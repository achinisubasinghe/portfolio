export interface GitHubProjectData {
  repoUrl: string;
  liveDemoUrl: string | null;
  imageUrl: string;
}

interface GitHubRepoResponse {
  html_url: string;
  homepage: string | null;
  default_branch: string;
}

interface GitHubContentResponse {
  content?: string;
  download_url?: string | null;
}

const GITHUB_API_BASE = "https://api.github.com";
const DEFAULT_SCREENSHOT_PATH = "docs/screenshot.png";

function getGitHubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured.");
  }

  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "achini-portfolio",
  };
}

function decodeBase64Utf8(encoded: string): string {
  const binary = atob(encoded.replace(/\s+/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function normalizeImagePath(rawTarget: string): string | null {
  const target = rawTarget.trim().split(/\s+/)[0].replace(/^<|>$/g, "");
  if (!target || /^https?:\/\//i.test(target) || target.startsWith("data:")) {
    return null;
  }

  const withoutQuery = target.split(/[?#]/)[0];
  const cleaned = withoutQuery.replace(/^\.?\//, "");
  return cleaned || null;
}

function extractReadmeImagePath(markdown: string): string | null {
  for (const match of markdown.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    if (match[1]) {
      const normalized = normalizeImagePath(match[1]);
      if (normalized) {
        return normalized;
      }
    }
  }

  for (const match of markdown.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) {
    if (match[1]) {
      const normalized = normalizeImagePath(match[1]);
      if (normalized) {
        return normalized;
      }
    }
  }

  return null;
}

function normalizeHomepageUrl(homepage: string | null): string | null {
  if (!homepage) {
    return null;
  }

  const trimmed = homepage.trim();
  if (!trimmed) {
    return null;
  }

  const parsed = new URL(trimmed);
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return null;
  }

  return parsed.toString().replace(/\/$/, "");
}

async function fetchGitHubJson<T>(path: string, headers: HeadersInit): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}) for ${path}`);
  }

  return (await response.json()) as T;
}

async function resolveImageDownloadUrl(
  owner: string,
  repo: string,
  defaultBranch: string,
  candidatePath: string,
  headers: HeadersInit
): Promise<string> {
  const encodedPath = candidatePath.split("/").map(encodeURIComponent).join("/");
  const ref = encodeURIComponent(defaultBranch);

  const response = await fetch(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${encodedPath}?ref=${ref}`,
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    if (candidatePath !== DEFAULT_SCREENSHOT_PATH) {
      return resolveImageDownloadUrl(owner, repo, defaultBranch, DEFAULT_SCREENSHOT_PATH, headers);
    }
    throw new Error(`GitHub image not found at ${owner}/${repo}/${candidatePath}`);
  }

  const data = (await response.json()) as GitHubContentResponse;
  if (!data.download_url) {
    throw new Error(`GitHub image download_url missing for ${owner}/${repo}/${candidatePath}`);
  }

  return data.download_url;
}

export async function fetchGitHubProject(
  owner: string,
  repo: string
): Promise<GitHubProjectData> {
  const headers = getGitHubHeaders();
  const repoData = await fetchGitHubJson<GitHubRepoResponse>(`/repos/${owner}/${repo}`, headers);

  let imagePath = DEFAULT_SCREENSHOT_PATH;
  const readmeResponse = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (readmeResponse.ok) {
    const readmeData = (await readmeResponse.json()) as GitHubContentResponse;
    if (readmeData.content) {
      imagePath = extractReadmeImagePath(decodeBase64Utf8(readmeData.content)) ?? DEFAULT_SCREENSHOT_PATH;
    }
  }

  const imageUrl = await resolveImageDownloadUrl(
    owner,
    repo,
    repoData.default_branch,
    imagePath,
    headers
  );

  return {
    repoUrl: repoData.html_url,
    liveDemoUrl: normalizeHomepageUrl(repoData.homepage),
    imageUrl,
  };
}

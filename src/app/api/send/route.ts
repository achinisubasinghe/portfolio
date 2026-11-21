import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!emailPattern.test(trimmedEmail)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      subject: `New message from ${trimmedName} via Portfolio`,
      replyTo: trimmedEmail,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Could not send your message. Try again later." },
      { status: 500 }
    );
  }
}

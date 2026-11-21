import type { Metadata } from "next";
import { personal } from "@/data/personal";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Achini Subasinghe by email or contact form.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="font-mono text-xs tracking-[0.06em] text-accent">05 / Contact</p>
        <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-balance text-ice md:text-5xl">
          Contact
        </h1>
        <p className="max-w-[58ch] text-[15px] leading-[1.7] text-pretty text-muted sm:text-base">
          Reach out about software engineering internships, web development work, or project
          collaboration.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside className="flex flex-col gap-6 lg:col-span-5">
          <Section>
            <h2 className="text-xl font-semibold tracking-[-0.015em] text-ice">
              Contact details
            </h2>
            <dl className="mt-5 divide-y divide-white/10 text-sm">
              <div className="flex flex-col gap-1 py-3.5 first:pt-0">
                <dt className="font-mono text-xs tracking-[0.04em] text-muted">Email</dt>
                <dd>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-ice underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {personal.email}
                  </a>
                </dd>
              </div>

              <div className="flex flex-col gap-1 py-3.5">
                <dt className="font-mono text-xs tracking-[0.04em] text-muted">Phone</dt>
                <dd>
                  <a
                    href={`tel:${personal.phoneHref}`}
                    className="font-mono tabular-nums text-ice transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {personal.phone}
                  </a>
                </dd>
              </div>

              <div className="flex flex-col gap-1 py-3.5 last:pb-0">
                <dt className="font-mono text-xs tracking-[0.04em] text-muted">Location</dt>
                <dd className="text-ice">{personal.location}</dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-white/10 pt-5">
              <SocialLinks />
            </div>
          </Section>
        </aside>
      </div>
    </div>
  );
}

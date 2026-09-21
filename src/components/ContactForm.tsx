"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

type FormStatus = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "error") {
    return (
      <div className="glass rounded-3xl p-6 text-center md:p-8">
        <p className="text-2xl">Something went wrong</p>
        <p className="mt-2 text-lg text-muted">
          Please try again later.
        </p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")}>Try again</Button>
        </div>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="glass rounded-3xl p-6 text-center md:p-8">
        <p className="text-2xl">Message sent</p>
        <p className="mt-2 text-lg text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")}>Send another message</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl mb-6">Send me a message</h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">Name</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-lg text-ice placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/60"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-lg text-ice placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/60"
            placeholder="your@email.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none rounded-2xl border border-white/25 bg-white/5 px-4 py-2 text-lg text-ice placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/60"
            placeholder="Your message..."
          />
        </div>

        <div>
          <Button type="submit" className={status === "submitting" ? "opacity-50" : ""}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </form>
  );
}

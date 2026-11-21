"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

type FormStatus = "idle" | "submitting" | "sent" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!name.trim()) {
    errors.name = "Enter your name.";
  }
  if (!email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!emailPattern.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!message.trim()) {
    errors.message = "Enter a message.";
  }
  return errors;
}

const inputBaseClass =
  "w-full rounded-lg border bg-white/[0.04] px-3.5 py-2.5 text-sm text-ice placeholder:text-muted/65 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (isSubmitting) return;

    const errors = validateFields(name, email, message);
    setFieldErrors(errors);
    setServerError("");

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        let errorMessage = "Could not send your message. Check your connection and try again.";
        try {
          const payload: unknown = await response.json();
          if (
            payload &&
            typeof payload === "object" &&
            "error" in payload &&
            typeof payload.error === "string" &&
            payload.error.trim()
          ) {
            errorMessage = payload.error;
          }
        } catch {
          errorMessage = "Could not send your message. Check your connection and try again.";
        }
        setServerError(errorMessage);
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setFieldErrors({});
    } catch {
      setServerError("Could not send your message. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass panel-enter rounded-2xl p-6 md:p-8" role="status">
        <p className="font-mono text-xs tracking-[0.05em] text-success">Delivered</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ice">
          Message sent
        </h2>
        <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted">
          Your message has been delivered. I will reply by email.
        </p>
        <div className="mt-6">
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-semibold tracking-[-0.015em] text-ice">
        Send a message
      </h2>

      {status === "error" && serverError && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-danger/35 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          {serverError}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-ice/90">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            disabled={isSubmitting}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              if (fieldErrors.name) {
                setFieldErrors((prev) => ({ ...prev, name: undefined }));
              }
            }}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`${inputBaseClass} ${
              fieldErrors.name
                ? "border-danger/60 focus:border-danger focus:ring-danger/25"
                : "border-white/15 focus:border-accent/60 focus:ring-accent/25"
            }`}
            placeholder="Your name"
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-xs text-danger">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-ice/90">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            disabled={isSubmitting}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (fieldErrors.email) {
                setFieldErrors((prev) => ({ ...prev, email: undefined }));
              }
            }}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`${inputBaseClass} ${
              fieldErrors.email
                ? "border-danger/60 focus:border-danger focus:ring-danger/25"
                : "border-white/15 focus:border-accent/60 focus:ring-accent/25"
            }`}
            placeholder="you@example.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-xs text-danger">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-ice/90">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            disabled={isSubmitting}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              if (fieldErrors.message) {
                setFieldErrors((prev) => ({ ...prev, message: undefined }));
              }
            }}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className={`${inputBaseClass} resize-y ${
              fieldErrors.message
                ? "border-danger/60 focus:border-danger focus:ring-danger/25"
                : "border-white/15 focus:border-accent/60 focus:ring-accent/25"
            }`}
            placeholder="Write your message"
          />
          {fieldErrors.message && (
            <p id="message-error" className="text-xs text-danger">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <div className="pt-1">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </div>
      </div>
    </form>
  );
}

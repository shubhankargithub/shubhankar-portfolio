"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactTopics, site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const topic = String(data.get("topic") ?? contactTopics[0]).trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `[Portfolio] ${topic} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : "",
      `Topic: ${topic}`,
      "",
      message,
      "",
      "— Sent from the portfolio of Shubhankar Chavan",
    ]
      .filter((line) => line !== "")
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email app should open with the message ready to send. If it does not, use the email address above.",
    );
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className="field-input"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="field-input"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-organisation" className="field-label">
            Organisation <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="contact-organisation"
            name="organisation"
            type="text"
            className="field-input"
            placeholder="Publication, company or team"
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="contact-topic" className="field-label">
            Reason for writing
          </label>
          <select id="contact-topic" name="topic" className="field-input" defaultValue={contactTopics[0]}>
            {contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="field-label">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className="field-input resize-y"
            placeholder="A sentence or two about what you have in mind."
            required
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[17rem] text-[0.66rem] leading-[1.65] text-muted">
          This form opens your email app with the message pre-filled. Nothing is
          stored or sent to a server.
        </p>
        <button type="submit" className="btn btn-primary shrink-0">
          Compose email
          <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-4 min-h-[1.2rem] text-[0.72rem] leading-relaxed text-accent ${
          status ? "opacity-100" : "opacity-0"
        }`}
      >
        {status}
      </p>
    </form>
  );
}

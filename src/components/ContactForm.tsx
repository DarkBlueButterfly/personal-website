import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Your message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (name in errors) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(key, String(value));
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setForm(initialForm);
      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-emerald-500/20 bg-em/10 p-8 mt-4"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
          <svg
            className="h-6 w-6 text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold dark:text-white">Message sent!</h2>

        <p className="mt-2 text-sm leading-6 dark:text-zinc-400">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-medium dark:text-white underline underline-offset-4 transition hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-3">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6"
      >
        {/* Netlify form identification */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Email notification subject */}
        <input
          type="hidden"
          name="subject"
          value="New message from your website"
        />

        {/* Honeypot spam protection */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="bot-field">Don&apos;t fill this out</label>

          <input
            id="bot-field"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full rounded-xl border dark:bg-zinc-900 px-4 py-3 dark:text-white outline-none transition placeholder:text-zinc-600 focus:ring-2 ${
              errors.name
                ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                : "border-zinc-800 focus:border-zinc-600 focus:ring-white/10"
            }`}
          />

          {errors.name && (
            <p
              id="name-error"
              className="mt-2 text-sm dark:text-red-400 text-red-500 font-bold"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="your@email.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full rounded-xl border dark:bg-zinc-900 px-4 py-3 dark:text-white outline-none transition placeholder:text-zinc-600 focus:ring-2 ${
              errors.email
                ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                : "border-zinc-800 focus:border-zinc-600 focus:ring-white/10"
            }`}
          />

          {errors.email && (
            <p
              id="email-error"
              className="mt-2 text-sm dark:text-red-400 text-red-500 font-bold"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Leave a message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full resize-y rounded-xl border dark:bg-zinc-900 px-4 py-3 dark:text-white outline-none transition placeholder:text-zinc-600 focus:ring-2 ${
              errors.message
                ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                : "border-zinc-800 focus:border-zinc-600 focus:ring-white/10"
            }`}
          ></textarea>

          {errors.message && (
            <p
              id="message-error"
              className="mt-2 text-sm dark:text-red-400 text-red-500 font-bold"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submission error */}
        {status === "error" && (
          <div
            className="rounded-xl border border-red-500/20 bg-red500/10 px-4 py-3 text-sm dark:text-red-300 text-red-600 font-bold"
            role="alert"
          >
            Something went wrong while sending you message. Please try again.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition cursor-pointer hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <svg
                className="mr-2 h-4 w-4 automate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

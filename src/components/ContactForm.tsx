"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactMethod: z.enum(["whatsapp", "email"]),
  contactValue: z.string().min(1, "Please provide your contact number or email"),
  situation: z.string().min(10, "Please describe your situation (at least 10 characters)"),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { contactMethod: "whatsapp" },
  });

  const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "The Healer";

  const onSubmit = async (data: ContactFormData) => {
    const { honeypot, ...payload } = data;
    if (honeypot) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      reset();
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl border-2 border-gold-primary bg-surface p-8 text-center">
        <span className="text-4xl">✨</span>
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-text-primary">
          Message Received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Your message has been received. {clientTitle} will respond personally,
          typically within a few hours.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 text-sm font-medium text-gold-primary transition-colors hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold-dim"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-all focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-crimson">{errors.name.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contactMethod"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold-dim"
          >
            Contact Method
          </label>
          <select
            id="contactMethod"
            {...register("contactMethod")}
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary transition-all focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary appearance-none"
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contactValue"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold-dim"
          >
            Your Number / Email
          </label>
          <input
            id="contactValue"
            type="text"
            {...register("contactValue")}
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-all focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
            placeholder="e.g. +256..."
          />
          {errors.contactValue && (
            <p className="mt-1 text-xs text-crimson">
              {errors.contactValue.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="situation"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold-dim"
        >
          Describe Your Situation
        </label>
        <textarea
          id="situation"
          rows={5}
          {...register("situation")}
          className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-all focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary resize-none"
          placeholder="How can I help you today?"
        />
        {errors.situation && (
          <p className="mt-1 text-xs text-crimson">{errors.situation.message}</p>
        )}
      </div>

      <div className="absolute overflow-hidden opacity-0 h-0 w-0" aria-hidden="true">
        <label htmlFor="honeypot">Do not fill this</label>
        <input
          id="honeypot"
          type="text"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative overflow-hidden flex w-full items-center justify-center rounded-full bg-gold-primary px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-deepnight transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="relative z-10">
          {isSubmitting ? "Sending..." : "Submit to the Healer"}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
      </button>
    </form>
  );
}

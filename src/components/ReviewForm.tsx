"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const reviewSchema = z.object({
  name: z.string().min(2, "Name is required"),
  location: z.string().min(2, "Location is required"),
  service: z.string().min(1, "Please select a service"),
  rating: z.number().min(1).max(5),
  quote: z.string().min(10, "Please share a bit more about your experience"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

export default function ReviewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rating, setRating] = useState(5);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 5 },
  });

  const onSubmit = async (data: ReviewFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call to push to Sanity/Database
      console.log("Review submission:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border-2 border-gold-primary bg-surface p-8 text-center animate-in fade-in zoom-in duration-500">
        <span className="text-4xl text-gold-primary">✨</span>
        <h3 className="mt-4 text-xl font-bold text-text-primary">Testimonial Received</h3>
        <p className="mt-2 text-text-secondary">
          Thank you for sharing your journey. Your review has been submitted for spiritual validation and will appear on the site soon.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-medium text-gold-primary hover:underline"
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-elevated/50 backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/50">
      <h3 className="text-xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
        Share Your Experience
      </h3>
      <p className="text-sm text-text-muted mb-8">
        Your story inspires hope in others. All submissions are reviewed for privacy before publishing.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gold-dim mb-2">Name</label>
            <input
              {...register("name")}
              className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary transition-all"
              placeholder="e.g. Grace N."
            />
            {errors.name && <p className="mt-1 text-xs text-crimson">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gold-dim mb-2">Location</label>
            <input
              {...register("location")}
              className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary transition-all"
              placeholder="City, Country"
            />
            {errors.location && <p className="mt-1 text-xs text-crimson">{errors.location.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gold-dim mb-2">Service Received</label>
          <select
            {...register("service")}
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary transition-all appearance-none"
          >
            <option value="">Select a service...</option>
            <option value="Love Spells">Love Spells</option>
            <option value="Binding Spells">Binding Spells</option>
            <option value="Money Spells">Money Spells</option>
            <option value="Protection Spells">Protection Spells</option>
            <option value="Traditional Healing">Traditional Healing</option>
            <option value="Curse Removal">Curse Removal</option>
            <option value="Spirit Blessings">Spirit Blessings</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-crimson">{errors.service.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gold-dim mb-2">Spiritual Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setRating(s);
                  reset({ ...register, rating: s });
                }}
                className={`text-2xl transition-transform hover:scale-125 ${s <= rating ? "text-gold-primary" : "text-text-muted opacity-30"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gold-dim mb-2">Your Story</label>
          <textarea
            {...register("quote")}
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-base text-text-primary focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary transition-all resize-none"
            placeholder="How did the spiritual work help you?"
          />
          {errors.quote && <p className="mt-1 text-xs text-crimson">{errors.quote.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full group overflow-hidden rounded-full bg-gold-primary px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-deepnight transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? "Submitting Ritual..." : "Submit for Validation"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </form>
    </div>
  );
}

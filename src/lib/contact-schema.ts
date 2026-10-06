import { z } from "zod";

/**
 * The single definition of a contact submission, imported by both the form and
 * the route handler.
 *
 * These two had drifted: the form posted `contactMethod`, `contactValue` and
 * `situation` while the route validated `email` and `message`, so every real
 * submission was rejected with 400 and no enquiry ever arrived. Sharing the
 * schema is what stops that happening again -- a rename now breaks the build
 * instead of silently losing leads.
 */
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactMethod: z.enum(["whatsapp", "email"]),
  contactValue: z.string().min(1, "Please provide your contact number or email"),
  situation: z
    .string()
    .min(10, "Please describe your situation (at least 10 characters)"),
});

/** Client-side shape: adds the spam honeypot, which is never sent onward. */
export const contactFormSchema = contactSchema.extend({
  honeypot: z.string().max(0),
});

export type ContactSubmission = z.infer<typeof contactSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

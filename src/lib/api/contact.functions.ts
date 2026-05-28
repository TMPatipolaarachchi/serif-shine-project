import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  workEmail: z.string().trim().optional().refine(
    (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    { message: "Enter a valid email address" },
  ),
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
  projectDetails: z.string().trim().min(1, "Project details are required"),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator(contactFormSchema)
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("./contact.server");

    await sendContactEmail(data);

    return { ok: true };
  });

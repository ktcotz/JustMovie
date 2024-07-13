import { z } from "zod";

export const UserPasswordFormSchema = z.object({
  password: z
    .string({ required_error: "validation.password-required" })
    .min(6, "validation.password-min-length"),
});

export type UserPasswordSchema = z.infer<typeof UserPasswordFormSchema>;

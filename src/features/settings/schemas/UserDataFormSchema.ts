import { z } from "zod";

export const UserDataFormSchema = z.object({
  name: z.string(),
  surname: z.string(),
});

export type UserDataSchema = z.infer<typeof UserDataFormSchema>;

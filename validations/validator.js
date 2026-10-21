import { z } from "zod";

export const userValidation = z.object({
  name: z.string().min(3).max(50),
  username: z.string().min(3).max(50),
  email: z.string().max(50),
  password: z.string().min(5),
  role: z.enum(["USER", "ADMIN"]).default("USER"),
});

export const taskValidation = z.object({
  title: z.string().min(1),
  status: z.enum(["todo", "in-progress", "done"]).default("todo"),
  userId: z.string(),
});

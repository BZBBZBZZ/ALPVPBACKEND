import z from "zod";

export const RegisterRequest = z.object({
  username: z.string().min(3).max(100),
  password: z.string().min(6).max(255),
});

export const LoginRequest = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type RegisterRequestType = z.infer<typeof RegisterRequest>;
export type LoginRequestType = z.infer<typeof LoginRequest>;

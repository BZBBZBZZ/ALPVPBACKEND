import { User } from "../generated/prisma";

declare global {
  namespace Express {
    interface Request {
      authUser?: { user_id: number; username: string };
    }
  }
}

export {};

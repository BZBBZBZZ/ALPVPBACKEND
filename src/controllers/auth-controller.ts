import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth-service";
import { RegisterRequest, LoginRequest } from "../validations/auth-validation";
import { Validation } from "../validations/validation";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = Validation.validate(RegisterRequest, req.body);
      const result = await AuthService.register(payload.username, payload.password);
      // result contains token and user
      res.status(201).json({ data: result });
    } catch (e) {
      next(e);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = Validation.validate(LoginRequest, req.body);
      const result = await AuthService.login(payload.username, payload.password);
      res.status(200).json({ data: result });
    } catch (e) {
      next(e);
    }
  }

  static async me(req: Request, res: Response, next: NextFunction) {
    try {
      const authUser = (req as any).authUser;
      if (!authUser) throw new Error("Not authenticated");

      // fetch clean user data
      const prisma = (await import("../utils/database-util")).prismaClient;
      const u = await prisma.user.findUnique({ where: { user_id: authUser.user_id }, select: { user_id: true, username: true, high_score: true, last_played_at: true } });

      if (!u) throw new Error("User not found");
      res.status(200).json({ data: u });
    } catch (e) {
      next(e);
    }
  }
}

import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth-service";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) return res.status(401).json({ error: "Missing token" });

    const token = auth.replace(/^Bearer\s+/, "");
    const payload = AuthService.verifyToken(token);
    (req as any).authUser = { user_id: payload.user_id, username: payload.username };
    next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

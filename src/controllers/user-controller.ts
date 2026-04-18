import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user-service";

export class UserController {
  static async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = req.query.limit ? parseInt(String(req.query.limit), 10) : 10;
      const data = await UserService.getLeaderboard(limit);
      res.status(200).json({ data });
    } catch (e) {
      next(e);
    }
  }
}

import { prismaClient } from "../utils/database-util";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const JWT_EXPIRES_IN = "7d";

export class AuthService {
  static async register(username: string, password: string) {
    const existing = await prismaClient.user.findUnique({ where: { username } });
    if (existing) {
      throw new Error("Username already taken");
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prismaClient.user.create({
      data: {
        username,
        password: hashed,
        high_score: 0,
      },
    });

    // generate token for convenience (auto-login after register)
    const token = jwt.sign({ user_id: user.user_id, username: user.username }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return { token, user: { user_id: user.user_id, username: user.username, high_score: user.high_score, last_played_at: user.last_played_at } };
  }

  static async login(username: string, password: string) {
    const user = await prismaClient.user.findUnique({ where: { username } });
    if (!user) throw new Error("Invalid credentials");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new Error("Invalid credentials");

    const token = jwt.sign({ user_id: user.user_id, username: user.username }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return { token, user: { user_id: user.user_id, username: user.username, high_score: user.high_score, last_played_at: user.last_played_at } };
  }

  static verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET) as { user_id: number; username: string; iat: number; exp: number };
  }
}

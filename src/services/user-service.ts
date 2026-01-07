import { prismaClient } from "../utils/database-util";
import { UserResponse, toUserResponse } from "../models/user-model";

export class UserService {
  static async getLeaderboard(limit = 10): Promise<UserResponse[]> {
    const users = await prismaClient.user.findMany({
      orderBy: [
        { high_score: "desc" },
        { last_played_at: "asc" },
      ],
      take: limit,
    });

    return users.map(toUserResponse);
  }

  static async upsertResult(username: string, score: number, playedAt: Date): Promise<void> {
    const user = await prismaClient.user.findUnique({
      where: { username },
    });

    if (!user) {
      await prismaClient.user.create({
        data: {
          username,
          password: "", // blank password by default; hook up auth later
          high_score: score,
          last_played_at: playedAt,
        },
      });
    } else {
      const newHigh = score > user.high_score ? score : user.high_score;
      await prismaClient.user.update({
        where: { username },
        data: {
          high_score: newHigh,
          last_played_at: playedAt,
        },
      });
    }
  }

  static async getById(user_id: number) {
    return prismaClient.user.findUnique({ where: { user_id } });
  }

}

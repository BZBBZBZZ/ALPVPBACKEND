import { User } from "../generated/prisma";

export interface UserResponse {
  user_id: number;
  username: string;
  high_score: number;
  last_played_at?: Date | null;
}

export function toUserResponse(u: User): UserResponse {
  return {
    user_id: u.user_id,
    username: u.username,
    high_score: u.high_score,
    last_played_at: u.last_played_at,
  };
}

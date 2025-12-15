import { string } from "zod"
import { generateToken } from "../utils/jwt-util"

export interface UserJWTPayload {
    user_id: number
    username: string
}

export interface RegisterUserRequest {
    username: string
    password: string
}

export interface LoginUserRequest {
    username: string
    password: string
}

export interface UserResponse {
    token?: string
}

export function toUserResponse(user_id: number, username: string): UserResponse {
    return {
        token: generateToken(
            {
                user_id: user_id,
                username: username,
            },
            "1h"
        ),
    }
}
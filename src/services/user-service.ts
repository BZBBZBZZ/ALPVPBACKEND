import { ResponseError } from "../error/response-error"
import {
    LoginUserRequest,
    RegisterUserRequest,
    toUserResponse,
    UserResponse,
} from "../models/user-model"
import { prismaClient } from "../utils/database-util"
import { UserValidation } from "../validations/user-validation"
import { Validation } from "../validations/validation"
import bcrypt from "bcrypt"

export class UserService {
    static async register(request: RegisterUserRequest): Promise<UserResponse> {
        const validatedData = Validation.validate(
            UserValidation.REGISTER,
            request
        )

        const existing = await prismaClient.user.findFirst({
            where: {
                username: validatedData.username,
            },
        })

        if (existing) {
            throw new ResponseError(400, "Username has already existed!")
        }

        validatedData.password = await bcrypt.hash(validatedData.password, 10)

        const user = await prismaClient.user.create({
            data: {
                username: validatedData.username,
                password: validatedData.password,
            },
        })

        return toUserResponse(user.user_id, user.username)
    }

    static async login(request: LoginUserRequest): Promise<UserResponse> {
        const validatedData = Validation.validate(UserValidation.LOGIN, request)


        const user = await prismaClient.user.findFirst({
            where: {
                username: validatedData.username,
            },
        })

        if (!user) {
            throw new ResponseError(400, "Invalid username or password!")
        }

        const passwordIsValid = await bcrypt.compare(
            validatedData.password,
            user.password
        )

        if (!passwordIsValid) {
            throw new ResponseError(400, "Invalid username or password!")
        }

        return toUserResponse(user.user_id, user.username)
    }

    static async submitScore(user_id: number, score: number) {
        const validated = Validation.validate(UserValidation.SUBMIT_SCORE, {
            score,
        })

        const user = await prismaClient.user.findUnique({
            where: { user_id: user_id },
        })

        if (!user) {
            throw new ResponseError(404, "User not found!")
        }

        const now = new Date()

        const data: any = {
            last_played_at: now,
        }

        if (validated.score > (user.high_score ?? 0)) {
            data.high_score = validated.score
        }

        const updated = await prismaClient.user.update({
            where: { user_id: user_id },
            data: data,
        })

        return updated
    }

    static async getLeaderboard(limit = 10, offset = 0) {
        // Use raw SQL to ensure tie-break ordering: highest score first, then
        // players who played earlier (older last_played_at) rank higher. We
        // also push NULL last_played_at users to the end by ordering on
        // (last_played_at IS NULL) so non-null values come first.

        const results: Array<{
            user_id: number
            username: string
            high_score: number
            last_played_at: Date | null
            rank: number
        }> = await prismaClient.$queryRaw`
            SELECT
                user_id,
                username,
                high_score,
                last_played_at,
                RANK() OVER (ORDER BY high_score DESC, (last_played_at IS NULL) ASC, last_played_at ASC) as rank
            FROM users
            ORDER BY high_score DESC, (last_played_at IS NULL) ASC, last_played_at ASC
            LIMIT ${limit}
            OFFSET ${offset}
        `

        return results
    }
}
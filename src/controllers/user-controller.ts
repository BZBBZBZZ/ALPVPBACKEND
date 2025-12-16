import { Request, Response, NextFunction } from "express"
import { UserRequest } from "../models/user-request-model"
import {
    LoginUserRequest,
    RegisterUserRequest,
    UserResponse,
} from "../models/user-model"
import { UserService } from "../services/user-service"

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: RegisterUserRequest = req.body as RegisterUserRequest
            const response: UserResponse = await UserService.register(request)

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async createMany(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body
        const items = Array.isArray(body) ? body : (body && (body.users ?? body))

        if (!Array.isArray(items)) {
            throw new Error("Request must be an array of users or { users: [...] }")
        }

        const created = await UserService.bulkCreateUsers(items)

        res.status(200).json({ data: created })
    } catch (error) {
        next(error)
    }
}

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const request: LoginUserRequest = req.body as LoginUserRequest
            const response: UserResponse = await UserService.login(request)

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async submitScore(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            if (!req.user) throw new Error("Unauthorized")

            const score = (req.body && req.body.score) as number

            const updated = await UserService.submitScore(req.user.user_id, score)

            res.status(200).json({ data: updated })
        } catch (error) {
            next(error)
        }
    }

    static async leaderboard(req: Request, res: Response, next: NextFunction) {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10
            const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : 0

            const data = await UserService.getLeaderboard(limit, offset)

            res.status(200).json({ data })
        } catch (error) {
            next(error)
        }
    }

    static async clearUsers(req: UserRequest, res: Response, next: NextFunction) {
        try {
            // Protected route - requires auth
            await UserService.clearAllUsers()
            res.status(200).json({ data: { success: true } })
        } catch (error) {
            next(error)
        }
    }

    static async bulkUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const items = req.body as Array<any>

            const created = await UserService.bulkCreateUsers(items)

            res.status(200).json({ data: created })
        } catch (error) {
            next(error)
        }
    }

    static async deleteUsers(req: UserRequest, res: Response, next: NextFunction) {
        try {
            if (!req.user) throw new Error("Unauthorized")

            const body = req.body

            // Accept either { user_ids: [1,2] } or raw array [1,2]
            let ids: number[] | undefined

            if (Array.isArray(body)) {
                ids = body as number[]
            } else if (Array.isArray((body && (body.user_ids || body.ids)))) {
                ids = (body.user_ids || body.ids) as number[]
            }

            if (!ids || ids.length === 0) {
                throw new Error("Request must contain user_ids array or be an array of ids")
            }

            const result = await UserService.deleteUsersByIds(ids)

            res.status(200).json({ data: result })
        } catch (error) {
            next(error)
        }
    }
}
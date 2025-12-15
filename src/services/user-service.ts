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
}
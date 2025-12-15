import { z, ZodType } from "zod"

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        username: z
            .string({
                error: "Username must be string!",
            })
            .min(1, {
                error: "Username can not be empty!",
            }),
        password: z
            .string({
                error: "Password must be string!",
            })
            .min(8, {
                error: "Password must contain more than or equal to 8 characters!",
            }),
    })

    static readonly LOGIN: ZodType = z.object({
        username: z
            .string({
                error: "Username must be string!",
            })
            .min(1, {
                error: "Username can not be empty!",
            }),
        password: z
            .string({
                error: "Password must be string!",
            })
            .min(8, {
                error: "Password must contain more than or equal to 8 characters!",
            }),
    })

    static readonly SUBMIT_SCORE: ZodType = z.object({
        score: z
            .number({
                error: "Score must be a number!",
            })
            .int({ message: "Score must be integer!" })
            .nonnegative({ message: "Score must be non-negative!" }),
    })
}
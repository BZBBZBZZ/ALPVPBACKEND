import { ZodType } from "zod";
import { ResponseError } from "../error/response-error";

export class Validation {
    static validate<T>(schema: ZodType<T>, data: unknown): T {
        const result = schema.safeParse(data);
        if (result.success) {
            return result.data;
        } else {
            throw new ResponseError(400, result.error.message);
        }
    }
}
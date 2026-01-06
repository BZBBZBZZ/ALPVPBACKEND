"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const response_error_1 = require("../error/response-error");
class Validation {
    static validate(schema, data) {
        const result = schema.safeParse(data);
        if (result.success) {
            return result.data;
        }
        else {
            throw new response_error_1.ResponseError(400, result.error.message);
        }
    }
}
exports.Validation = Validation;

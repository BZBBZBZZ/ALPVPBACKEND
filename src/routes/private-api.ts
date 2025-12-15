import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"
export const privateRouter = express.Router()

privateRouter.use(authMiddleware)

// Note: Todo routes removed as part of cleanup.
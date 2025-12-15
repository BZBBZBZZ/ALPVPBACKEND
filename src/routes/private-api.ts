import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"
import { UserController } from "../controllers/user-controller"

export const privateRouter = express.Router()

privateRouter.use(authMiddleware)

// Endpoint for submitting a score (requires authentication)
privateRouter.post("/score", UserController.submitScore)
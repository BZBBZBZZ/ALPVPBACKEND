import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"
import { UserController } from "../controllers/user-controller"

export const privateRouter = express.Router()

privateRouter.use(authMiddleware)

// Endpoint for submitting a score (requires authentication)
privateRouter.post("/score", UserController.submitScore)
// Admin/testing endpoints (protected):
privateRouter.post("/admin/clear-users", UserController.clearUsers)
privateRouter.post("/admin/bulk-users", UserController.bulkUsers)
// Delete specific users by IDs (protected):
privateRouter.delete("/admin/users", UserController.deleteUsers)
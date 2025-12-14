import express from "express";
import dotenv from "dotenv";
import { publicRouter } from "./routes/api";
import { errorMiddleware } from "./middlewares/error-middleware";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Routes
app.use("/api", publicRouter);

// Error Middleware (Wajib paling bawah)
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import express from "express";
import { apiRouter } from "./routes/api";
import { errorMiddleware } from "./middlewares/error-middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api", apiRouter);

// Error Middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

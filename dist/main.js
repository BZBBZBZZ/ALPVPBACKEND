"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./routes/api");
const error_middleware_1 = require("./middlewares/error-middleware");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Routes
app.use("/api", api_1.apiRouter);
// Error Middleware
app.use(error_middleware_1.errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

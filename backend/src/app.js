import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//both of these config after making the app to use the feature like app.get and app.use
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// Configure app to parse JSON
app.use(express.json({ limit: "16kb" })); // Now req.body will have JSON data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// Now /public folder is accessible
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes.js";

//routes declaration

app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register

export { app };

// require('dotenv').config({path: './env});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
    server.on("error", (error) => {
      console.log("ERROR", error);
    });
    // These happen at the HTTP server level - when Node.js tries to start the server
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!!", error);
    process.exit(1);
  });

/*
 function connectDB(){}
 connectDB()
no prob in this approach but there is a better approach using iffe
*/

/*
import express from "express";
const app = express();
( async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERROR", error);
        throw error;
      });
      //process.env.PORT comes from dotenv module so that same port is used on diff comp 
      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR:", error);
      throw error;
    }
  }
)(); */
// server.on here is an event listener, server is the httpserver object created by nodejs ,
// i can listen for events that happens on that server

//route -> auth 
import AuthRoute from "./auth.js";
import UserRoute from "./user.js";
//----------------------------------------------------------------
import express from "express";
//----------------------------------------------------------------
import AuthMiddleware from "../utils/Jwt/JwtAuthMiddleware.js";
//middleware

const IndexRoute = express.Router();

IndexRoute.use("/auth", AuthRoute);
IndexRoute.use("/user", [AuthMiddleware],UserRoute);

export default IndexRoute;


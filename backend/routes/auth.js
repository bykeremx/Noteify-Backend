import express from 'express';


//auth controller dahil et
import {
    Login,Register,Me,Logout
} from '../controllers/authController.js';

//------------------------------------------------------------------------------

import AuthMiddleware from '../utils/Jwt/JwtAuthMiddleware.js'
const Route = express.Router();

Route.post('/login',Login);
Route.post('/register',Register);
Route.get("/me",[AuthMiddleware],Me);
Route.get("/logout",[AuthMiddleware],Logout);

export default Route;
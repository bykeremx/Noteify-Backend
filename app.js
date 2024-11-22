import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import ErrorMiddleware from "./backend/middleware/ErrorsMiddleware.js"
//route 
import Routers from "./backend/routes/index.js"
//----------------------------------------------------------------
//dotenv girişi 
dotenv.config();

//veritabanı    
import MongoDbConnect from "./backend/db/dbConfig.js";
//----------------------------------------------------------------
const myApp = express();
myApp.use(express.json());
myApp.use("/api",Routers);
const PORT = process.env.PORT || 8080;

//error middleware


myApp.use(ErrorMiddleware)
myApp.listen(PORT,()=>{
    MongoDbConnect();
    console.log(`http://localhost:${PORT}`.bgRed.italic.underline.bold)
});





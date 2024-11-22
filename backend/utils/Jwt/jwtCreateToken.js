//token oluşturma fonksiyonunu yaz 
import { response } from "express";
import jwt from "jsonwebtoken"
const CreateWebToken = (user) => {
    try {
        const myToken = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        return myToken;
    } catch (error) {
        console.log("token oluşturulamadı ! ");
        
    }
}

export default CreateWebToken;
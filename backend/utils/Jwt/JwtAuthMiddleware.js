
import jwt from 'jsonwebtoken';
import SetCookieJwt from './jwtAuthSetCookie.js';
const AuthMiddleware = (req, res, next) => {
    //auth içindeki jwt yi al 
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json(
                {
                    message: 'Token yok',
                    status: "Giriş Başarısız ! "
                });
        }
        const tokeni_al = token.split(" ")[1];
        //tokenı decode et
        const decodeToken = jwt.verify(tokeni_al, process.env.JWT_SECRET)
        req.user = decodeToken;
        next()
    } catch (error) {
        throw new Error(error);
    }
}

export default AuthMiddleware;
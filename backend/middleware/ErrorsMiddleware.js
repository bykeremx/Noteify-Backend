import ErrorInfo from '../utils/errors/ErrorFunc.js';

const ErrorMiddleware = (err, req, res, next) => {
    switch (err.name) {
        case "TokenExpiredError":
            ErrorInfo(500, res, err, "Tokenin süresi bitti! Lütfen yeniden giriş yapın",process.env.NODE_ENV === 'development' ? err.stack : null);
            break;

        case "JsonWebTokenError":
            ErrorInfo(401, res, err, "Token doğrulama hatası!",process.env.NODE_ENV === 'development' ? err.stack : null);
            break;

        case "ValidationError":
            ErrorInfo(400, res, err, "Geçersiz format!",process.env.NODE_ENV === 'development' ? err.stack : null);
            break;

        case "CastError":
            ErrorInfo(400, res, err, "Girilen Parametre Bir ID değil :( !",process.env.NODE_ENV === 'development' ? err.stack : null);
            break;
        default:
            ErrorInfo(500, res, err, "Bir hata oluştu!", process.env.NODE_ENV === 'development' ? err.stack : null);
            break;
    }
};

export default ErrorMiddleware;

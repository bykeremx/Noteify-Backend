const ErrorInfo = (statusCode, res, err, message, stack = null) => {
    console.log("Hata adı:", err.name);
    console.log("Hata mesajı:", err.message);
    return res.status(statusCode).json({
        message: message || " ",
        error: {
            name: err.name,
            message: err.message,
            status: err.status || 500,
            timestamp: new Date()
        },
        stack: stack
    });
}

export default ErrorInfo
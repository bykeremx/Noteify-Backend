const ErrorInfo = (statusCode,res,err,message,stack=null) => {
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
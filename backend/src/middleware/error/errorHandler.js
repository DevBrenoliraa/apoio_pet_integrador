export const errorHandler = (error, req, res, next) => {
    console.log(error);
    
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Erro interno do servidor.'

    req.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
};
import jwt from 'jsonwebtoken';

const chave = 'diwdçowdnf';

export const verificaToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: "Token não fornecido."
        });
    };

    const tokenLimpo = token.split(" ")[1];

    try {
        const decode = jwt.verify(tokenLimpo, chave);
        req.usuario = decode;
        next();
        
    } catch (error) {
        next(error)
    }
}
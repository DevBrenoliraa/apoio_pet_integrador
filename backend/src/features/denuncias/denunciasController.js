import { denunciasModel } from "./denunciasModel.js";

export const denunciar = async (req, res, next) => {
    const { descricao, endereco } = req.body;
    const usuario_id = req.usuario.id;

    try {
        if (!descricao || !endereco) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Prencha todos os campos.'
            });
        };

        const novaDenuncia = await denunciasModel.create({
            usuario_id,
            descricao,
            endereco
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Denuncia realizada.',
            novaDenuncia
        });

    } catch (error) {
        next(error)
    }
}

export const listarDenuncias = async (req, res, next) => {
    try {
        const denuncias = await denunciasModel.findAll({
            attributes: ['usuario_id', 'descricao', 'endereco'],
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Denuncias listadas.',
            denuncias
        });
        
    } catch (error) {
        next(error)
    }
}
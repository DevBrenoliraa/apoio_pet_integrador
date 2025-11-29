import { doacoesModel } from './doacoesModel.js';

export const doar = async (req, res, next) => {
    const { valor } = req.body;
    const usuario_id = req.usuario.id;

    try {
        if (!valor) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Valos da doação não foi informado.'
            });
        };

        const novaDoacao = await doacoesModel.create({
            usuario_id,
            valor
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Doação realizada.',
            novaDoacao
        });

    } catch (error) {
        next(error)
    }
}

export const listarDoacoes = async (req, res, next) => {
    try {
        const doacoes = await doacoesModel.findAll({
            attributes: ['usuario_id', 'valor'],
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Doações listadas.',
            doacoes
        });
        
    } catch (error) {
        next(error)
    }
}
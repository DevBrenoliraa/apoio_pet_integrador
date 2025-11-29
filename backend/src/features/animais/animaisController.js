import { animaisModel } from "./animaisModel.js";

export const cadastrarAnimal = async (req, res, next) => {
    const { nome, raca, tipo, descricao, imagem } = req.body;

    try {
        if (!nome || !raca || !tipo || !descricao || !imagem) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Prencha todos os campos.'
            });
        };

        const novoAnimal = await animaisModel.create({
            nome,
            raca,
            tipo,
            descricao,
            imagem
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Animal cadastrado.",
            animal: novoAnimal
        });

    } catch (error) {
        next(error)
    }
}

export const listarAnimais = async (req, res, next) => {
    try {
        const animais = await animaisModel.findAll({
            attributes: { exclude: ['usuario_id_adocao', 'data_adocao'] },
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Animais listados.',
            animais
        });

    } catch (error) {
        next(error)
    }
}

export const adotar = async (req, res, next) => {
    const { id } = req.params;

    try {
        const animal = await animaisModel.findByPk(id);
        if (!animal) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Animal não encontrado."
            });
        };

        if (animal.usuario_id_adocao) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Este animal já foi adotado."
            });
        };

        const usuario_id = req.usuario.id;

        animal.usuario_id_adocao = usuario_id;
        animal.data_adocao = new Date();

        await animal.save();

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Animal adotado.",
            animal
        });

    } catch (error) {
        next(error)
    }
}
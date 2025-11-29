import { usuariosModel } from './usuariosModel.js';
import jwt from 'jsonwebtoken';

const chave = 'diwdçowdnf';

export const cadastrarUsuario = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Prencha todos os campos.'
            });
        };

        const verificaEmail = await usuariosModel.findOne({ where: { email } });
        if (verificaEmail) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'E-mail já cadastrado.'
            });
        };

        const novoUsuario = await usuariosModel.create({
            nome,
            email,
            senha
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Usuário cadastrado.',
            usuario: {
                id: novoUsuario.id,
                nome: novoUsuario.nome,
                email: novoUsuario.email
            },
        });

    } catch (error) {
        next(error)
    }
}

export const loginUsuario = async (req, res, next) => {
    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Preencha todos os campos.'
            });
        };

        const usuario = await usuariosModel.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Usuário não encontrado ou não existe.'
            });
        };

        if (senha !== usuario.senha) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: 'Senha inválida.'
            });
        };

        const token = jwt.sign(
            { id: usuario.id, nome: usuario.nome },
            chave,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Usuário logado.',
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            token
        });

    } catch (error) {
        next(error)
    }
}

export const listarUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuariosModel.findAll({
            attributes: ['id', 'nome', 'email'],
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Usuários listados.',
            usuarios
        });
        
    } catch (error) {
        next(error)
    }
}
import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const usuariosModel = conn.define(
    'usuarios',
    {
        nome: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        timestamps: true,
        tableName: 'usuarios'
    }
);
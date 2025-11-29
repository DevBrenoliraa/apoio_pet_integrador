import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const animaisModel = conn.define(
    'animais',
    {
        nome: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        raca: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tipo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imagem: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        usuario_id_adocao: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'usuarios', 
                key: 'id'
            }
        },
        data_adocao: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    },
    {
        timestamps: true,
        tableName: 'animais'
    }
);
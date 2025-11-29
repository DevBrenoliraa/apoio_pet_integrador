import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const doacoesModel = conn.define(
    'doacoes',
    {
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "usuarios",
                key: "id"
            }
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
    },
    {
        timestamps: true,
        tableName: 'doacoes'
    }
);
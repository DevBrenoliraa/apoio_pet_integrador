import express from 'express';
import cors from 'cors';
import { conn } from './config/sequelize.js';
import { errorHandler } from './middleware/error/errorHandler.js';
import './middleware/data/associations.js';

import usuariosRouter from './features/usuarios/usuariosRouter.js';
import doacoesRouter from './features/doacoes/doacoesRouter.js';
import denunciasRouter from './features/denuncias/denunciasRouter.js';
import animaisRouter from './features/animais/animaisRouter.js';

const app = express();
conn.sync();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.use('/api', usuariosRouter);
app.use('/api', doacoesRouter);
app.use('/api', denunciasRouter);
app.use('/api', animaisRouter);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Página não encontrada ou não existe.'
    });
});

app.use(errorHandler);

export default app;
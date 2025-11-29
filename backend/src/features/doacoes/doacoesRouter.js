import { Router } from 'express';
import { verificaToken } from '../../middleware/auth/verificaToken.js'
import { doar, listarDoacoes } from './doacoesController.js';

const router = Router();

router.get('/doacoes', listarDoacoes);
router.post('/doar', verificaToken, doar);

export default router;
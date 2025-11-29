import { Router } from 'express';
import { cadastrarUsuario, loginUsuario, listarUsuarios } from './usuariosController.js';

const router = Router();

router.get('/usuarios', listarUsuarios);
router.post('/usuarios/cadastro', cadastrarUsuario);
router.post('/usuarios/login', loginUsuario);

export default router;
import { Router } from 'express';
import { verificaToken} from '../../middleware/auth/verificaToken.js';
import { cadastrarAnimal, listarAnimais, adotar } from './animaisController.js';

const router = Router();

router.get('/animais', listarAnimais);
router.post('/animais/cadastro', verificaToken, cadastrarAnimal);
router.put('/animais/:id/adotar', verificaToken, adotar);

export default router;
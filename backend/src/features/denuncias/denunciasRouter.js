import { Router } from "express";
import { verificaToken } from "../../middleware/auth/verificaToken.js";
import { denunciar, listarDenuncias } from "./denunciasController.js";

const router = Router();

router.get('/denuncias', listarDenuncias);
router.post('/denunciar', verificaToken, denunciar);

export default router;
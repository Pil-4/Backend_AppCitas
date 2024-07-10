import { eliminarPerfil, insertarPerfil, listarPerfils, modificarPerfil, obtenerPerfil } from "../controllers/perfilController";
import express from 'express';

const router = express.Router();

router.post('/',insertarPerfil);
router.get('/',listarPerfils);
router.get('/:id',obtenerPerfil);
router.put('/:id',modificarPerfil);
router.patch('/:id',eliminarPerfil);

export default router;
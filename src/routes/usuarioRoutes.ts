import { eliminarUsuario, insertarUsuario, listarUsuarios, modificarUsuario, obtenerUsuario } from "../controllers/usuarioController";
import express from 'express';

const router = express.Router();

router.post('/',insertarUsuario);
router.get('/',listarUsuarios);
router.get('/:id',obtenerUsuario);
router.put('/:id',modificarUsuario);
router.patch('/:id',eliminarUsuario);

export default router;
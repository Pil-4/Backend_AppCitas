import { eliminarMedico, insertarMedico, listarMedicos, modificarMedico, obtenerMedico } from "../controllers/medicoController";
import express from 'express';

const router = express.Router();

router.post('/',insertarMedico);
router.get('/',listarMedicos);
router.get('/:id',obtenerMedico);
router.put('/:id',modificarMedico);
router.patch('/:id',eliminarMedico);

export default router;
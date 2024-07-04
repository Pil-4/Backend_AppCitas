import { eliminarPaciente, insertarPaciente, listarPacientes, modificarPaciente, obtenerPaciente } from "../controllers/pacienteController";
import express from 'express';

const router = express.Router();

router.post('/',insertarPaciente);
router.get('/',listarPacientes);
router.get('/:id',obtenerPaciente);
router.put('/:id',modificarPaciente);
router.patch('/:id',eliminarPaciente);

export default router;
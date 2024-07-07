import { eliminarHorario, insertarHorario, listarHorarios, modificarHorario, obtenerHorario } from "../controllers/horarioController";
import express from 'express';

const router = express.Router();

router.post('/',insertarHorario);
router.get('/',listarHorarios);
router.get('/:id',obtenerHorario);
router.put('/:id',modificarHorario);
router.patch('/:id',eliminarHorario);

export default router;
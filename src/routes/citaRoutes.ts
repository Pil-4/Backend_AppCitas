import { eliminarCita, insertarCita, listarCitas, modificarCita, obtenerCita } from "../controllers/citaController";
import express from 'express';

const router = express.Router();

router.post('/',insertarCita);
router.get('/',listarCitas);
router.get('/:id',obtenerCita);
router.put('/:id',modificarCita);
router.patch('/:id',eliminarCita);

export default router;
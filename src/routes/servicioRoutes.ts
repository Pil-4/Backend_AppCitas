import { eliminarServicio, insertarServicio, listarServicios, modificarServicio, obtenerServicio } from "../controllers/servicioController";
import express from 'express';

const router = express.Router();

router.post('/',insertarServicio);
router.get('/',listarServicios);
router.get('/:id',obtenerServicio);
router.put('/:id',modificarServicio);
router.patch('/:id',eliminarServicio);

export default router;
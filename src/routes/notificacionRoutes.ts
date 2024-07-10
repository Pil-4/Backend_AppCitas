import { eliminarNotificacion, insertarNotificacion, listarNotificacions, modificarNotificacion, obtenerNotificacion } from "../controllers/notificacionController";
import express from 'express';

const router = express.Router();

router.post('/',insertarNotificacion);
router.get('/',listarNotificacions);
router.get('/:id',obtenerNotificacion);
router.put('/:id',modificarNotificacion);
router.patch('/:id',eliminarNotificacion);

export default router;
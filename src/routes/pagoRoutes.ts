import { eliminarPago, insertarPago, listarPagos, modificarPago, obtenerPago } from "../controllers/pagoController";
import express from 'express';

const router = express.Router();

router.post('/',insertarPago);
router.get('/',listarPagos);
router.get('/:id',obtenerPago);
router.put('/:id',modificarPago);
router.patch('/:id',eliminarPago);

export default router;
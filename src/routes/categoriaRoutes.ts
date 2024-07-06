import { eliminarCategoria, insertarCategoria, listarCategorias, modificarCategoria, obtenerCategoria } from "../controllers/categoriaController";
import express from 'express';

const router = express.Router();

router.post('/',insertarCategoria);
router.get('/',listarCategorias);
router.get('/:id',obtenerCategoria);
router.put('/:id',modificarCategoria);
router.patch('/:id',eliminarCategoria);

export default router;
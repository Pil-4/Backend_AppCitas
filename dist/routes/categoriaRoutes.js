"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriaController_1 = require("../controllers/categoriaController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       properties:
 *         nombreCategoria:
 *           type: string
 *           description: Nombre de la categoría
 *           example: "Medicina General"
 */
/**
 * @swagger
 * /api/v1/categoria:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categoría]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 */
router.post('/', categoriaController_1.insertarCategoria);
/**
 * @swagger
 * /api/v1/categoria:
 *   get:
 *     summary: Listar todas las categorías
 *     tags: [Categoría]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 */
router.get('/', categoriaController_1.listarCategorias);
/**
 * @swagger
 * /api/v1/categoria/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categoría]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Detalles de la categoría
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 */
router.get('/:id', categoriaController_1.obtenerCategoria);
/**
 * @swagger
 * /api/v1/categoria/{id}:
 *   put:
 *     summary: Actualizar una categoría por ID
 *     tags: [Categoría]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 */
router.put('/:id', categoriaController_1.modificarCategoria);
/**
 * @swagger
 * /api/v1/categoria/{id}:
 *   delete:
 *     summary: Eliminar una categoría por ID (marcar como inactiva)
 *     tags: [Categoría]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       204:
 *         description: Categoría eliminada (marcada como inactiva)
 *       404:
 *         description: Categoría no encontrada
 */
router.delete('/:id', categoriaController_1.eliminarCategoria);
exports.default = router;
//# sourceMappingURL=categoriaRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const servicioController_1 = require("../controllers/servicioController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Servicio:
 *       type: object
 *       properties:
 *         categoria:
 *           type: object
 *           properties:
 *             idCategoria:
 *               type: integer
 *               description: ID de la categoría existente
 *               example: 1
 *             nombreCategoria:
 *               type: string
 *               description: Nombre de la categoría (opcional, solo para referencia)
 *               example: "Medicina General"
 *         nombreServicio:
 *           type: string
 *           description: Nombre del servicio
 *           example: "Consulta Médica"
 *         precio:
 *           type: number
 *           format: decimal
 *           description: Precio del servicio
 *           example: 50.00
 */
/**
 * @swagger
 * /api/v1/servicio:
 *   post:
 *     summary: Crear un nuevo servicio
 *     tags: [Servicio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Servicio'
 *     responses:
 *       201:
 *         description: Servicio creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Servicio'
 */
router.post('/', servicioController_1.insertarServicio);
/**
 * @swagger
 * /api/v1/servicio:
 *   get:
 *     summary: Listar todos los servicios
 *     tags: [Servicio]
 *     responses:
 *       200:
 *         description: Lista de servicios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Servicio'
 */
router.get('/', servicioController_1.listarServicios);
/**
 * @swagger
 * /api/v1/servicio/{id}:
 *   get:
 *     summary: Obtener un servicio por ID
 *     tags: [Servicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del servicio
 *     responses:
 *       200:
 *         description: Detalles del servicio
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Servicio'
 *       404:
 *         description: Servicio no encontrado
 */
router.get('/:id', servicioController_1.obtenerServicio);
/**
 * @swagger
 * /api/v1/servicio/{id}:
 *   put:
 *     summary: Actualizar un servicio por ID
 *     tags: [Servicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del servicio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Servicio'
 *     responses:
 *       200:
 *         description: Servicio actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Servicio'
 *       404:
 *         description: Servicio no encontrado
 */
router.put('/:id', servicioController_1.modificarServicio);
/**
 * @swagger
 * /api/v1/servicio/{id}:
 *   delete:
 *     summary: Eliminar un servicio por ID
 *     tags: [Servicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del servicio
 *     responses:
 *       204:
 *         description: Servicio eliminado
 *       404:
 *         description: Servicio no encontrado
 */
router.delete('/:id', servicioController_1.eliminarServicio);
exports.default = router;
//# sourceMappingURL=servicioRoutes.js.map
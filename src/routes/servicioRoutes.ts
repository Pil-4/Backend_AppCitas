import { eliminarServicio, insertarServicio, listarServicios, modificarServicio, obtenerServicio } from "../controllers/servicioController";
import express from 'express';

const router = express.Router();

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
router.post('/', insertarServicio);

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
router.get('/', listarServicios);

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
router.get('/:id', obtenerServicio);

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
router.put('/:id', modificarServicio);

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
router.delete('/:id', eliminarServicio);


export default router;
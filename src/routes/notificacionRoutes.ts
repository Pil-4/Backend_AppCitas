import { eliminarNotificacion, insertarNotificacion, listarNotificacions, modificarNotificacion, obtenerNotificacion } from "../controllers/notificacionController";
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Notificacion:
 *       type: object
 *       properties:
 *         usuario:
 *           $ref: '#/components/schemas/Usuario' 
 *         mensaje:
 *           type: string
 *           description: Mensaje de la notificación
 *           example: "Tienes una nueva solicitud de amistad"
 *         fechaNotificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la notificación
 *           example: "2024-07-10T15:30:00Z"
 *     Usuario:  
 *       type: object
 *       properties:
 *         idUsuario:
 *           type: integer
 *           description: ID único del usuario
 *           example: 1
 *         perfil:
 *           $ref: '#/components/schemas/Perfil'
 *         nombres:
 *           type: string
 *           description: Nombres del usuario
 *           example: "Juan"
 *         nombreUsuario:
 *           type: string
 *           description: Nombre de usuario
 *           example: "juan123"
 *         apellidoPaterno:
 *           type: string
 *           description: Apellido paterno del usuario
 *           example: "Pérez"
 *         apellidoMaterno:
 *           type: string
 *           description: Apellido materno del usuario
 *           example: "Gómez"
 *     Perfil:
 *       type: object
 *       properties:
 *         idPerfil:
 *           type: integer
 *           description: ID único del perfil
 *           example: 1
 *         descripcion:
 *           type: string
 *           description: Descripción del perfil
 *           example: "Administrador"
 */

/**
 * @swagger
 * /api/v1/notificacion:
 *   post:
 *     summary: Crear una nueva notificación
 *     tags: [Notificacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notificacion'
 *     responses:
 *       201:
 *         description: Notificación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacion'
 */
router.post('/', insertarNotificacion);

/**
 * @swagger
 * /api/v1/notificacion:
 *   get:
 *     summary: Listar todas las notificaciones
 *     tags: [Notificacion]
 *     responses:
 *       200:
 *         description: Lista de notificaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notificacion'
 */
router.get('/', listarNotificacions);

/**
 * @swagger
 * /api/v1/notificacion/{id}:
 *   get:
 *     summary: Obtener una notificación por ID
 *     tags: [Notificacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la notificación
 *     responses:
 *       200:
 *         description: Detalles de la notificación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacion'
 *       404:
 *         description: Notificación no encontrada
 */
router.get('/:id', obtenerNotificacion);

/**
 * @swagger
 * /api/v1/notificacion/{id}:
 *   put:
 *     summary: Actualizar una notificación por ID
 *     tags: [Notificacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la notificación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notificacion'
 *     responses:
 *       200:
 *         description: Notificación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacion'
 *       404:
 *         description: Notificación no encontrada
 */
router.put('/:id', modificarNotificacion);

/**
 * @swagger
 * /api/v1/notificacion/{id}:
 *   delete:
 *     summary: Eliminar (marcar como inactiva) una notificación por ID
 *     tags: [Notificacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la notificación
 *     responses:
 *       204:
 *         description: Notificación eliminada
 *       404:
 *         description: Notificación no encontrada
 */
router.delete('/:id', eliminarNotificacion);

export default router;

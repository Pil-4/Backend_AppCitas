import { eliminarHorario, insertarHorario, listarHorarios, modificarHorario, obtenerHorario } from "../controllers/horarioController";
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Medico:
 *       type: object
 *       properties:
 *         idMedico:
 *           type: integer
 *           description: ID del médico
 *           example: 1
 *     Horario:
 *       type: object
 *       properties:
 *         medico:
 *           $ref: '#/components/schemas/Medico'
 *         diaSemana:
 *           type: string
 *           description: Día de la semana (LU, MA, etc.)
 *           example: "LU"
 *         horaInicio:
 *           type: string
 *           format: time
 *           description: Hora de inicio (formato HH:mm:ss)
 *           example: "2024-07-10T09:00:00Z"
 *         horaFin:
 *           type: string
 *           format: time
 *           description: Hora de fin (formato HH:mm:ss)
 *           example: "2024-07-10T17:00:00Z"
 */

/**
 * @swagger
 * /api/v1/horario:
 *   post:
 *     summary: Crear un nuevo horario
 *     tags: [Horarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Horario'
 *     responses:
 *       201:
 *         description: Horario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Horario'
 */
router.post('/', insertarHorario);

/**
 * @swagger
 * /api/v1/horario:
 *   get:
 *     summary: Listar todos los horarios
 *     tags: [Horarios]
 *     responses:
 *       200:
 *         description: Lista de horarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Horario'
 */
router.get('/', listarHorarios);

/**
 * @swagger
 * /api/v1/horario/{id}:
 *   get:
 *     summary: Obtener un horario por ID
 *     tags: [Horarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del horario
 *     responses:
 *       200:
 *         description: Horario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Horario'
 *       404:
 *         description: Horario no encontrado
 */
router.get('/:id', obtenerHorario);

/**
 * @swagger
 * /api/v1/horario/{id}:
 *   put:
 *     summary: Actualizar un horario por ID
 *     tags: [Horarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del horario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Horario'
 *     responses:
 *       200:
 *         description: Horario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Horario'
 *       404:
 *         description: Horario no encontrado
 */
router.put('/:id', modificarHorario);

/**
 * @swagger
 * /api/v1/horario/{id}:
 *   delete: 
 *     summary: Eliminar un horario por ID (marcarlo como inactivo)
 *     tags: [Horarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del horario
 *     responses:
 *       204:
 *         description: Horario eliminado (marcado como inactivo)
 *       404:
 *         description: Horario no encontrado
 */
router.delete('/:id', eliminarHorario); 

export default router;

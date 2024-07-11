import { eliminarMedico, insertarMedico, listarMedicos, modificarMedico, obtenerMedico } from "../controllers/medicoController";
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
 *           readOnly: true
 *         tipoDocumento:
 *           type: string
 *           description: tipo del documento del médico
 *           example: "dni" 
 *         numeroDocumento:
 *           type: string
 *           description: numero de documento del medico
 *           example: "12345678"
 *         nombres: 
 *           type: string
 *           maxLength: 100
 *           description: Nombres del médico
 *           example: "Juan"
 *         apellidoPaterno: 
 *           type: string
 *           maxLength: 100
 *           description: Apellido paterno del médico
 *           example: "Pérez"
 *         apellidoMaterno: 
 *           type: string
 *           maxLength: 100
 *           description: Apellido materno del médico
 *           example: "Gómez"
 *         sexo:
 *           type: string
 *           maxLength: 1
 *           description: Sexo del médico (M/F)
 *           example: "M"
 *         especialidad: 
 *           type: string
 *           maxLength: 100
 *           description: Especialidad del médico
 *           example: "Cardiología"
 */

/**
 * @swagger
 * /api/v1/medico:
 *   post:
 *     summary: Crear un nuevo médico
 *     tags: [Médicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medico'
 *     responses:
 *       201:
 *         description: Médico creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 */
router.post('/', insertarMedico);

/**
 * @swagger
 * /api/v1/medico:
 *   get:
 *     summary: Listar todos los médicos
 *     tags: [Médicos]
 *     responses:
 *       200:
 *         description: Lista de médicos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medico'
 */
router.get('/', listarMedicos);

/**
 * @swagger
 * /api/v1/medico/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Médicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del médico
 *     responses:
 *       200:
 *         description: Médico encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       404:
 *         description: Médico no encontrado
 */
router.get('/:id', obtenerMedico);

/**
 * @swagger
 * /api/v1/medico/{id}:
 *   put:
 *     summary: Actualizar un médico por ID
 *     tags: [Médicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del médico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medico'
 *     responses:
 *       200:
 *         description: Médico actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       404:
 *         description: Médico no encontrado
 */
router.put('/:id', modificarMedico);

/**
 * @swagger
 * /api/v1/medico/{id}:
 *   delete:
 *     summary: Eliminar un médico por ID
 *     tags: [Médicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del médico
 *     responses:
 *       204:
 *         description: Médico eliminado (marcado como inactivo)
 *       404:
 *         description: Médico no encontrado
 */
router.delete('/:id', eliminarMedico);

export default router;

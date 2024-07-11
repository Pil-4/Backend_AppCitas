import { eliminarPaciente, insertarPaciente, listarPacientes, modificarPaciente, obtenerPaciente } from "../controllers/pacienteController";
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       properties:
 *         idPaciente:
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
 *           description: nombres del paciente
 *           example: "Juan"
 *         apellidoPaterno:
 *           type: string
 *           description: apellido paterno del paciente
 *           example: "Perez"
 *         apellidoMaterno:
 *           type: string
 *           description: apellido materno del paciente
 *           example: "Gomez"
 *         correo:
 *           type: string
 *           description: el correo del paciente
 *           example: "juan.perez@example.com"
 *         celular:
 *           type: string
 *           description: el celular del paciente
 *           example: "987654321"
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           description: la fecha de nacimiento del paciente
 *           example: "1999-06-18T00:00:00Z"
 *         sexo:
 *           type: string
 *           description: el genero del paciente
 *           example: "M"
 *         direccion:
 *           type: string
 *           description: la direccion del paciente
 *           example: "123 Main St"
 */


/**
 * @swagger
 * /api/v1/paciente:
 *   post:
 *     summary: Crear un nuevo paciente
 *     tags: [Paciente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente creado exitosamente
 */
router.post('/', insertarPaciente);

/**
 * @swagger
 * /api/v1/paciente:
 *   get:
 *     summary: Listar todos los pacientes
 *     tags: [Paciente]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
router.get('/', listarPacientes);

/**
 * @swagger
 * /api/v1/paciente/{id}:
 *   get:
 *     summary: Obtener paciente por ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Detalles del paciente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 */
router.get('/:id', obtenerPaciente);

/**
 * @swagger
 * /api/v1/paciente/{id}:
 *   put:
 *     summary: Actualizar paciente por ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del paciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: Paciente actualizado exitosamente
 */
router.put('/:id', modificarPaciente);

/**
 * @swagger
 * /api/v1/paciente/{id}:
 *   delete:
 *     summary: Eliminar paciente por ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Paciente eliminado exitosamente
 */
router.delete('/:id', eliminarPaciente);

export default router;

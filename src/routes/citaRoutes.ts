import { eliminarCita, insertarCita, listarCitas, modificarCita, obtenerCita } from "../controllers/citaController";
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Cita:
 *       type: object
 *       properties:
 *         paciente:
 *           $ref: '#/components/schemas/Paciente'
 *         servicio:
 *           $ref: '#/components/schemas/Servicio'
 *         medico:
 *           $ref: '#/components/schemas/Medico'
 *         fechaCita:
 *           type: string
 *           format: date-time
 *           description: Fecha de la cita
 *           example: "2024-07-15T10:30:00Z"
 *         horaCita:
 *           type: string
 *           format: date-time
 *           description: Hora de la cita
 *           example: "10:30:00Z"
 *         estadoCita:
 *           type: string
 *           description: Estado de la cita (e.g., "Pendiente", "Confirmada", "Cancelada")
 *           example: "Pendiente"
 *         notasAdicionales:
 *           type: string
 *           description: Notas adicionales sobre la cita
 *           example: "Paciente con alergia a la penicilina"
 * 
 *     Paciente:
 *       type: object
 *       properties:
 *         idPaciente:
 *           type: integer
 *           descripcion: ID del paciente
 *           example: 1
 *         tipoDocumento:
 *           type: string
 *           description: Tipo del documento del paciente
 *           example: "DNI"
 *         numeroDocumento:
 *           type: string
 *           description: Número de documento del paciente
 *           example: "12345678"
 *         nombres:
 *           type: string
 *           description: Nombres del paciente
 *           example: "Juan"
 *         apellidoPaterno:
 *           type: string
 *           description: Apellido paterno del paciente
 *           example: "Pérez"
 *         apellidoMaterno:
 *           type: string
 *           description: Apellido materno del paciente
 *           example: "Gómez"
 *         correo:
 *           type: string
 *           description: Correo electrónico del paciente
 *           example: "juan.perez@example.com"
 *         celular:
 *           type: string
 *           description: Número de celular del paciente
 *           example: "987654321"
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del paciente
 *           example: "1990-01-15"
 *         sexo:
 *           type: string
 *           description: Sexo del paciente (M/F)
 *           example: "M"
 *         direccion:
 *           type: string
 *           description: Dirección del paciente
 *           example: "Av. Siempreviva 742"
 * 
 *     Medico:
 *       type: object
 *       properties:
 *         idMedico:
 *           type: integer
 *           description: ID del medico
 *           example: 1
 *         tipoDocumento:
 *           type: string
 *           description: Tipo del documento del médico
 *           example: "DNI"
 *         numeroDocumento:
 *           type: string
 *           description: Número de documento del médico
 *           example: "87654321"
 *         nombres: 
 *           type: string
 *           maxLength: 100
 *           description: Nombres del médico
 *           example: "Ana"
 *         apellidoPaterno: 
 *           type: string
 *           maxLength: 100
 *           description: Apellido paterno del médico
 *           example: "López"
 *         apellidoMaterno: 
 *           type: string
 *           maxLength: 100
 *           description: Apellido materno del médico
 *           example: "García"
 *         sexo:
 *           type: string
 *           maxLength: 1
 *           description: Sexo del médico (M/F)
 *           example: "F"
 *         especialidad: 
 *           type: string
 *           maxLength: 100
 *           description: Especialidad del médico
 *           example: "Pediatría"
 *     
 *     Servicio:
 *       type: object
 *       properties:
 *         idServicio:
 *           type: integer
 *           description: ID del servicio
 *           example: 1
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
 * /api/v1/cita:
 *   post:
 *     summary: Crear una nueva cita
 *     tags: [Cita]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       201:
 *         description: Cita creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 */
router.post('/', insertarCita);

/**
 * @swagger
 * /api/v1/cita:
 *   get:
 *     summary: Listar todas las citas
 *     tags: [Cita]
 *     responses:
 *       200:
 *         description: Lista de citas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cita'
 */
router.get('/', listarCitas);

/**
 * @swagger
 * /api/v1/cita/{id}:
 *   get:
 *     summary: Obtener una cita por ID
 *     tags: [Cita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cita
 *     responses:
 *       200:
 *         description: Detalles de la cita
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       404:
 *         description: Cita no encontrada
 */
router.get('/:id', obtenerCita);

/**
 * @swagger
 * /api/v1/cita/{id}:
 *   put:
 *     summary: Actualizar una cita por ID
 *     tags: [Cita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       200:
 *         description: Cita actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       404:
 *         description: Cita no encontrada
 */
router.put('/:id', modificarCita);

/**
 * @swagger
 * /api/v1/cita/{id}:
 *   delete:
 *     summary: Eliminar una cita por ID
 *     tags: [Cita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cita
 *     responses:
 *       204:
 *         description: Cita eliminada exitosamente
 *       404:
 *         description: Cita no encontrada
 */
router.delete('/:id', eliminarCita);

export default router;

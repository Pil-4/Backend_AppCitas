"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pagoController_1 = require("../controllers/pagoController");
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Pago:
 *       type: object
 *       properties:
 *         cita:
 *           type: object
 *           properties:
 *             idCita:
 *               type: integer
 *               description: ID de la cita asociada al pago
 *               example: 1
 *             paciente:
 *               type: object
 *               properties:
 *                 idPaciente:
 *                   type: integer
 *                   description: ID del paciente
 *                   example: 1
 *                 tipoDocumento:
 *                   type: string
 *                   description: Tipo del documento del paciente
 *                   example: "DNI"
 *                 numeroDocumento:
 *                   type: string
 *                   description: Número de documento del paciente
 *                   example: "12345678"
 *                 nombres:
 *                   type: string
 *                   description: Nombres del paciente
 *                   example: "Juan"
 *                 apellidoPaterno:
 *                   type: string
 *                   description: Apellido paterno del paciente
 *                   example: "Perez"
 *                 apellidoMaterno:
 *                   type: string
 *                   description: Apellido materno del paciente
 *                   example: "Gomez"
 *                 correo:
 *                   type: string
 *                   description: Correo electrónico del paciente
 *                   example: "juan.perez@example.com"
 *                 celular:
 *                   type: string
 *                   description: Número de celular del paciente
 *                   example: "987654321"
 *                 fechaNacimiento:
 *                   type: string
 *                   format: date
 *                   description: Fecha de nacimiento del paciente
 *                   example: "1999-06-18"
 *                 sexo:
 *                   type: string
 *                   description: Sexo del paciente (M/F)
 *                   example: "M"
 *                 direccion:
 *                   type: string
 *                   description: Dirección del paciente
 *                   example: "123 Main St"
 *             servicio:
 *               type: object
 *               properties:
 *                 idServicio:
 *                   type: integer
 *                   description: ID del servicio
 *                   example: 1
 *                 categoria:
 *                   type: object
 *                   properties:
 *                     idCategoria:
 *                       type: integer
 *                       description: ID de la categoría existente
 *                       example: 1
 *                     nombreCategoria:
 *                       type: string
 *                       description: Nombre de la categoría (opcional, solo para referencia)
 *                       example: "Medicina General"
 *                 nombreServicio:
 *                   type: string
 *                   description: Nombre del servicio
 *                   example: "Consulta Médica"
 *                 precio:
 *                   type: number
 *                   format: decimal
 *                   description: Precio del servicio
 *                   example: 50.00
 *             medico:
 *               type: object
 *               properties:
 *                 idMedico:
 *                   type: integer
 *                   description: ID del medico
 *                   example: 1
 *                 tipoDocumento:
 *                   type: string
 *                   description: Tipo del documento del médico
 *                   example: "DNI"
 *                 numeroDocumento:
 *                   type: string
 *                   description: Número de documento del médico
 *                   example: "87654321"
 *                 nombres:
 *                   type: string
 *                   maxLength: 100
 *                   description: Nombres del médico
 *                   example: "Juan"
 *                 apellidoPaterno:
 *                   type: string
 *                   maxLength: 100
 *                   description: Apellido paterno del médico
 *                   example: "Pérez"
 *                 apellidoMaterno:
 *                   type: string
 *                   maxLength: 100
 *                   description: Apellido materno del médico
 *                   example: "Gómez"
 *                 sexo:
 *                   type: string
 *                   maxLength: 1
 *                   description: Sexo del médico (M/F)
 *                   example: "M"
 *                 especialidad:
 *                   type: string
 *                   maxLength: 100
 *                   description: Especialidad del médico
 *                   example: "Cardiología"
 *             fechaCita:
 *               type: string
 *               format: date-time
 *               description: Fecha de la cita
 *               example: "2024-07-15T10:30:00Z"
 *             horaCita:
 *               type: string
 *               format: date-time
 *               description: Hora de la cita
 *               example: "10:30:00Z"
 *             estadoCita:
 *               type: string
 *               description: Estado de la cita (e.g., "Pendiente", "Confirmada", "Cancelada")
 *               example: "Pendiente"
 *             notasAdicionales:
 *               type: string
 *               description: Notas adicionales sobre la cita
 *               example: "Paciente con alergia a la penicilina"
 *         nombres:
 *           type: string
 *           description: Nombres de la persona que paga
 *           example: "Maria"
 *         apellidoPaterno:
 *           type: string
 *           description: Apellido paterno de la persona que paga
 *           example: "Lopez"
 *         apellidoMaterno:
 *           type: string
 *           description: Apellido materno de la persona que paga
 *           example: "Perez"
 *         tipoDocumento:
 *           type: string
 *           description: Tipo de documento de la persona que paga
 *           example: "DNI"
 *         numeroDocumento:
 *           type: string
 *           description: Número de documento de la persona que paga
 *           example: "12345678"
 *         fechaPago:
 *           type: string
 *           format: date-time
 *           description: Fecha de pago
 *           example: "2024-07-10T22:12:20.757Z"
 *         tipoDePago:
 *           type: string
 *           description: Tipo de pago realizado
 *           example: "Efectivo"
 *         subtotalPago:
 *           type: number
 *           format: decimal
 *           description: Subtotal del pago
 *           example: 0
 *         igvPago:
 *           type: number
 *           format: decimal
 *           description: IGV aplicado al pago
 *           example: 0
 *         totalPago:
 *           type: number
 *           format: decimal
 *           description: Total del pago realizado
 *           example: 0
 */
/**
 * @swagger
 * /api/v1/pago:
 *   post:
 *     summary: Crear un nuevo pago
 *     tags: [Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pago'
 *     responses:
 *       201:
 *         description: Pago creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 */
router.post('/', pagoController_1.insertarPago);
/**
 * @swagger
 * /api/v1/pago:
 *   get:
 *     summary: Listar todos los pagos
 *     tags: [Pago]
 *     responses:
 *       200:
 *         description: Lista de pagos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pago'
 */
router.get('/', pagoController_1.listarPagos);
/**
 * @swagger
 * /api/v1/pago/{id}:
 *   get:
 *     summary: Obtener un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Detalles del pago
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 *       404:
 *         description: Pago no encontrado
 */
router.get('/:id', pagoController_1.obtenerPago);
/**
 * @swagger
 * /api/v1/pago/{id}:
 *   put:
 *     summary: Actualizar un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pago'
 *     responses:
 *       200:
 *         description: Pago actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 *       404:
 *         description: Pago no encontrado
 */
router.put('/:id', pagoController_1.modificarPago);
/**
 * @swagger
 * /api/v1/pago/{id}:
 *   delete:
 *     summary: Eliminar un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     responses:
 *       204:
 *         description: Pago eliminado exitosamente
 *       404:
 *         description: Pago no encontrado
 */
router.delete('/:id', pagoController_1.eliminarPago);
exports.default = router;
//# sourceMappingURL=pagoRoutes.js.map
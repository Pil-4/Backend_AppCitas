"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pacienteController_1 = require("../controllers/pacienteController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       properties:
 *         dni:
 *           type: string
 *           description: The DNI of the patient
 *           example: "12345678"
 *         nombres:
 *           type: string
 *           description: The first names of the patient
 *           example: "Juan"
 *         apellidoPaterno:
 *           type: string
 *           description: The paternal surname of the patient
 *           example: "Perez"
 *         apellidoMaterno:
 *           type: string
 *           description: The maternal surname of the patient
 *           example: "Gomez"
 *         correo:
 *           type: string
 *           description: The email of the patient
 *           example: "juan.perez@example.com"
 *         celular:
 *           type: string
 *           description: The phone number of the patient
 *           example: "987654321"
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           description: The birth date of the patient
 *           example: "1999-06-18T00:00:00Z"
 *         sexo:
 *           type: string
 *           description: The gender of the patient
 *           example: "M"
 *         direccion:
 *           type: string
 *           description: The address of the patient
 *           example: "123 Main St"
 *         estadoAuditoria:
 *           type: string
 *           description: The audit status of the patient
 *           example: "Active"
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: The creation date of the record
 *           example: "2024-07-07T19:32:00Z"
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: The last modification date of the record
 *           example: "2024-07-07T19:32:00Z"
 */
/**
 * @swagger
 * /api/v1/paciente:
 *   post:
 *     summary: Create a new patient
 *     tags: [Paciente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Patient created successfully
 */
router.post('/', pacienteController_1.insertarPaciente);
/**
 * @swagger
 * /api/v1/paciente:
 *   get:
 *     summary: Retrieve a list of patients
 *     tags: [Paciente]
 *     responses:
 *       200:
 *         description: A list of patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
router.get('/', pacienteController_1.listarPacientes);
/**
 * @swagger
 * /api/v1/paciente/{id}:
 *   get:
 *     summary: Get a patient by ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The patient ID
 *     responses:
 *       200:
 *         description: Patient details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 */
router.get('/:id', pacienteController_1.obtenerPaciente);
/**
 * @swagger
 * /api/v1/paciente/{id}:
 *   put:
 *     summary: Update a patient by ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The patient ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: Patient updated successfully
 */
router.put('/:id', pacienteController_1.modificarPaciente);
/**
 * @swagger
 * /api/v1/paciente/{id}:
 *   delete:
 *     summary: Delete a patient by ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The patient ID
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 */
router.delete('/:id', pacienteController_1.eliminarPaciente);
exports.default = router;
//# sourceMappingURL=pacienteRoutes.js.map
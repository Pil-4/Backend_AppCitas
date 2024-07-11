"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioController_1 = require("../controllers/usuarioController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         idUsuario:
 *           type: integer
 *           readOnly: true
 *         perfil:
 *           type: object
 *           properties:
 *             idPerfil:
 *               type: integer
 *               description: ID único del perfil
 *               example: 1
 *             descripcion:
 *               type: string
 *               description: Descripción del perfil
 *               example: "Administrador"
 *         nombres:
 *           type: string
 *           description: Nombres del usuario
 *           example: "Juan"
 *         nombreUsuario:
 *           type: string
 *           description: Nombre de usuario (login)
 *           example: "juan123"
 *         apellidoPaterno:
 *           type: string
 *           description: Apellido paterno del usuario
 *           example: "Pérez"
 *         apellidoMaterno:
 *           type: string
 *           description: Apellido materno del usuario
 *           example: "Gómez"
 *         contrasena:
 *           type: string
 *           description: Contraseña del usuario
 *           example: "C0ntr@s3ñ@s3gur4"
 */
/**
 * @swagger
 * /api/v1/usuario:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.post('/', usuarioController_1.insertarUsuario);
/**
 * @swagger
 * /api/v1/usuario:
 *   get:
 *     summary: Listar todos los usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get('/', usuarioController_1.listarUsuarios);
/**
 * @swagger
 * /api/v1/usuario/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:id', usuarioController_1.obtenerUsuario);
/**
 * @swagger
 * /api/v1/usuario/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', usuarioController_1.modificarUsuario);
/**
 * @swagger
 * /api/v1/usuario/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       204:
 *         description: Usuario eliminado (marcado como inactivo)
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:id', usuarioController_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuarioRoutes.js.map
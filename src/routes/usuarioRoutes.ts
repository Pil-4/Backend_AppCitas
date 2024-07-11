import { eliminarUsuario, insertarUsuario, listarUsuarios, modificarUsuario, obtenerUsuario } from "../controllers/usuarioController";
import express from 'express';

const router = express.Router();

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
router.post('/', insertarUsuario);

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
router.get('/', listarUsuarios);

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
router.get('/:id', obtenerUsuario);

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
router.put('/:id', modificarUsuario);

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
router.delete('/:id', eliminarUsuario); 

export default router;

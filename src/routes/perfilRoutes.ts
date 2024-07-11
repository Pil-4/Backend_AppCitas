import { eliminarPerfil, insertarPerfil, listarPerfils, modificarPerfil, obtenerPerfil } from "../controllers/perfilController";
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Perfil:
 *       type: object
 *       properties:
 *         idPerfil:
 *           type: integer
 *           readOnly: true
 *         descripcion:
 *           type: string
 *           description: Descripción del perfil
 *           example: "Administrador"
 */

/**
 * @swagger
 * /api/v1/perfil:
 *   post:
 *     summary: Crear un nuevo perfil
 *     tags: [Perfil]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perfil'
 *     responses:
 *       201:
 *         description: Perfil creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 */
router.post('/', insertarPerfil);

/**
 * @swagger
 * /api/v1/perfil:
 *   get:
 *     summary: Listar todos los perfiles
 *     tags: [Perfil]
 *     responses:
 *       200:
 *         description: Lista de perfiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 */
router.get('/', listarPerfils);

/**
 * @swagger
 * /api/v1/perfil/{id}:
 *   get:
 *     summary: Obtener un perfil por ID
 *     tags: [Perfil]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del perfil
 *     responses:
 *       200:
 *         description: Detalles del perfil
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 *       404:
 *         description: Perfil no encontrado
 */
router.get('/:id', obtenerPerfil);

/**
 * @swagger
 * /api/v1/perfil/{id}:
 *   put:
 *     summary: Actualizar un perfil por ID
 *     tags: [Perfil]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del perfil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perfil'
 *     responses:
 *       200:
 *         description: Perfil actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 *       404:
 *         description: Perfil no encontrado
 */
router.put('/:id', modificarPerfil);

// Nota: En muchos casos, el método PATCH se usa para actualizaciones parciales. 
// Aquí, se asume que estás eliminando (marcando como inactivo) en lugar de hacer PATCH.
/**
 * @swagger
 * /api/v1/perfil/{id}:
 *   delete:
 *     summary: Eliminar (marcar como inactivo) un perfil por ID
 *     tags: [Perfil]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del perfil
 *     responses:
 *       204:
 *         description: Perfil eliminado
 *       404:
 *         description: Perfil no encontrado
 */
router.delete('/:id', eliminarPerfil); 

export default router;

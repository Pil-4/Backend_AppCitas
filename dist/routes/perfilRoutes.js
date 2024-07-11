"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perfilController_1 = require("../controllers/perfilController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
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
router.post('/', perfilController_1.insertarPerfil);
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
router.get('/', perfilController_1.listarPerfils);
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
router.get('/:id', perfilController_1.obtenerPerfil);
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
router.put('/:id', perfilController_1.modificarPerfil);
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
router.delete('/:id', perfilController_1.eliminarPerfil);
exports.default = router;
//# sourceMappingURL=perfilRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perfilController_1 = require("../controllers/perfilController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', perfilController_1.insertarPerfil);
router.get('/', perfilController_1.listarPerfils);
router.get('/:id', perfilController_1.obtenerPerfil);
router.put('/:id', perfilController_1.modificarPerfil);
router.patch('/:id', perfilController_1.eliminarPerfil);
exports.default = router;
//# sourceMappingURL=perfilRoutes.js.map
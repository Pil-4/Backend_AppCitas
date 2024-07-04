"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pacienteController_1 = require("../controllers/pacienteController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', pacienteController_1.insertarPaciente);
router.get('/', pacienteController_1.listarPacientes);
router.get('/:id', pacienteController_1.obtenerPaciente);
router.put('/:id', pacienteController_1.modificarPaciente);
router.patch('/:id', pacienteController_1.eliminarPaciente);
exports.default = router;
//# sourceMappingURL=pacienteRoutes.js.map
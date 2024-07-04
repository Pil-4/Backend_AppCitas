"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medicoController_1 = require("../controllers/medicoController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', medicoController_1.insertarMedico);
router.get('/', medicoController_1.listarMedicos);
router.get('/:id', medicoController_1.obtenerMedico);
router.put('/:id', medicoController_1.modificarMedico);
router.patch('/:id', medicoController_1.eliminarMedico);
exports.default = router;
//# sourceMappingURL=medicoRoutes.js.map
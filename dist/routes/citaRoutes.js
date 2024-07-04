"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const citaController_1 = require("../controllers/citaController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', citaController_1.insertarCita);
router.get('/', citaController_1.listarCitas);
router.get('/:id', citaController_1.obtenerCita);
router.put('/:id', citaController_1.modificarCita);
router.patch('/:id', citaController_1.eliminarCita);
exports.default = router;
//# sourceMappingURL=citaRoutes.js.map
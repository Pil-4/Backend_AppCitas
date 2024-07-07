"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const horarioController_1 = require("../controllers/horarioController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', horarioController_1.insertarHorario);
router.get('/', horarioController_1.listarHorarios);
router.get('/:id', horarioController_1.obtenerHorario);
router.put('/:id', horarioController_1.modificarHorario);
router.patch('/:id', horarioController_1.eliminarHorario);
exports.default = router;
//# sourceMappingURL=horarioRoutes.js.map
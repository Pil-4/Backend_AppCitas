"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pagoController_1 = require("../controllers/pagoController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', pagoController_1.insertarPago);
router.get('/', pagoController_1.listarPagos);
router.get('/:id', pagoController_1.obtenerPago);
router.put('/:id', pagoController_1.modificarPago);
router.patch('/:id', pagoController_1.eliminarPago);
exports.default = router;
//# sourceMappingURL=pagoRoutes.js.map
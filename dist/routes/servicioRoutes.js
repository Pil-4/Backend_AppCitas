"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const servicioController_1 = require("../controllers/servicioController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', servicioController_1.insertarServicio);
router.get('/', servicioController_1.listarServicios);
router.get('/:id', servicioController_1.obtenerServicio);
router.put('/:id', servicioController_1.modificarServicio);
router.patch('/:id', servicioController_1.eliminarServicio);
exports.default = router;
//# sourceMappingURL=servicioRoutes.js.map
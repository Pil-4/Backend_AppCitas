"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarServicioSchema = exports.insertarServicioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const servicioBaseSchema = {
    nombreServicio: joi_1.default.string()
        .max(150),
    precio: joi_1.default.number().positive()
};
exports.insertarServicioSchema = joi_1.default.object(Object.assign(Object.assign({}, servicioBaseSchema), { nombreServicio: servicioBaseSchema.nombreServicio.required(), precio: servicioBaseSchema.precio.required() }));
exports.modificarServicioSchema = joi_1.default.object(Object.assign({}, servicioBaseSchema));
//# sourceMappingURL=servicioSchema.js.map
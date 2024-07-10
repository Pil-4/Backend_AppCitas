"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarnotificacionSchema = exports.insertarnotificacionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const notificacionBaseSchema = {
    mensaje: joi_1.default.string()
        .min(200)
        .max(2000),
    fechaNotificacion: joi_1.default.string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/),
};
exports.insertarnotificacionSchema = joi_1.default.object(Object.assign(Object.assign({}, notificacionBaseSchema), { mensaje: notificacionBaseSchema.mensaje.required(), fechaNotificacion: notificacionBaseSchema.fechaNotificacion.required() }));
exports.modificarnotificacionSchema = joi_1.default.object(Object.assign({}, notificacionBaseSchema));
//# sourceMappingURL=notificacionSchema.js.map
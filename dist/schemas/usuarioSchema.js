"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarusuarioSchema = exports.insertarusuarioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const usuarioBaseSchema = {
    nombres: joi_1.default.string()
        .max(100),
    nombreUsuario: joi_1.default.string()
        .max(100),
    apellidoPaterno: joi_1.default.string()
        .max(100),
    apellidoMaterno: joi_1.default.string()
        .max(100),
    contrasena: joi_1.default.string()
        .min(8)
        .max(30)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
        .messages({
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'string.max': 'La contraseña no debe exceder los 30 caracteres',
        'string.pattern.base': 'La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un carácter especial'
    })
};
exports.insertarusuarioSchema = joi_1.default.object(Object.assign(Object.assign({}, usuarioBaseSchema), { nombres: usuarioBaseSchema.nombres.required(), nombreUsuario: usuarioBaseSchema.nombreUsuario.required(), apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(), apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(), contrasena: usuarioBaseSchema.contrasena.required() }));
exports.modificarusuarioSchema = joi_1.default.object(Object.assign({}, usuarioBaseSchema));
//# sourceMappingURL=usuarioSchema.js.map
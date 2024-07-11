"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarPerfilSchema = exports.insertarPerfilSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const perfilBaseSchema = {
    descripcion: joi_1.default.string()
        .max(100)
};
exports.insertarPerfilSchema = joi_1.default.object(Object.assign(Object.assign({}, perfilBaseSchema), { descripcion: perfilBaseSchema.descripcion.required() }));
exports.modificarPerfilSchema = joi_1.default.object(Object.assign({}, perfilBaseSchema));
//# sourceMappingURL=perfilSchema.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarperfilSchema = exports.insertarperfilSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const perfilBaseSchema = {
    descripcion: joi_1.default.string()
        .max(100)
};
exports.insertarperfilSchema = joi_1.default.object(Object.assign(Object.assign({}, perfilBaseSchema), { descripcion: perfilBaseSchema.descripcion.required() }));
exports.modificarperfilSchema = joi_1.default.object(Object.assign({}, perfilBaseSchema));
//# sourceMappingURL=perfilSchema.js.map
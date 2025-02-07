"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarcategoriaSchema = exports.insertarcategoriaSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const categoriaBaseSchema = {
    nombreCategoria: joi_1.default.string()
        .min(5)
        .max(50)
};
exports.insertarcategoriaSchema = joi_1.default.object(Object.assign(Object.assign({}, categoriaBaseSchema), { nombreCategoria: categoriaBaseSchema.nombreCategoria.required() }));
exports.modificarcategoriaSchema = joi_1.default.object(Object.assign({}, categoriaBaseSchema));
//# sourceMappingURL=categoriaSchema.js.map
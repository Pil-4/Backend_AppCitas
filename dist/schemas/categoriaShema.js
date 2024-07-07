"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarcategoriaSchema = exports.insertCategoriaSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const categoriaBaseSchema = {
    nombreCategoria: joi_1.default.string()
        .min(10)
        .max(50)
        .required()
};
exports.insertCategoriaSchema = joi_1.default.object(Object.assign(Object.assign({}, categoriaBaseSchema), { nombreCategoria: categoriaBaseSchema.nombreCategoria.required() }));
exports.modificarcategoriaSchema = joi_1.default.object(Object.assign({}, categoriaBaseSchema));
//# sourceMappingURL=categoriaShema.js.map
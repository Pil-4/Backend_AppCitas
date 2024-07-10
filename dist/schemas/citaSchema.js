"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarCitaSchema = exports.insertarCitaSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const citaBaseSchema = {
    fechaCita: joi_1.default.date(),
    horaCita: joi_1.default.string()
        .pattern(new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')),
    estadoCita: joi_1.default.string()
        .valid('pendiente', 'confirmada', 'cancelada'),
    notasAdicionales: joi_1.default.string().max(500)
        .allow(null, '')
};
exports.insertarCitaSchema = joi_1.default.object(Object.assign(Object.assign({}, citaBaseSchema), { fechaCita: citaBaseSchema.fechaCita.required(), horaCita: citaBaseSchema.horaCita.required(), estadoCita: citaBaseSchema.estadoCita.required(), notasAdicionales: citaBaseSchema.notasAdicionales }));
exports.modificarCitaSchema = joi_1.default.object(Object.assign({}, citaBaseSchema));
//# sourceMappingURL=citaSchema.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarHorarioSchema = exports.insertarHorarioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const horarioBaseSchema = {
    diaSemana: joi_1.default.string()
        .valid('lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'),
    horaInicio: joi_1.default.string()
        .pattern(new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')),
    horaFin: joi_1.default.string()
        .pattern(new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$'))
};
exports.insertarHorarioSchema = joi_1.default.object(Object.assign(Object.assign({}, horarioBaseSchema), { diaSemana: horarioBaseSchema.diaSemana.required(), horaInicio: horarioBaseSchema.horaInicio.required(), horaFin: horarioBaseSchema.horaFin.required() }));
exports.modificarHorarioSchema = joi_1.default.object(Object.assign({}, horarioBaseSchema));
//# sourceMappingURL=horarioSchema.js.map
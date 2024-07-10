"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarpacienteSchema = exports.insertarpacienteSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const pacienteBaseSchema = {
    tipoDocumento: joi_1.default.string()
        .valid('DNI', 'CE', 'Pasaporte'),
    numeroDocumento: joi_1.default.when('tipoDocumento', {
        is: 'DNI',
        then: joi_1.default.string().pattern(new RegExp('^[0-9]{8}$')).required(),
        otherwise: joi_1.default.when('tipoDocumento', {
            is: 'CE',
            then: joi_1.default.string().pattern(new RegExp('^[0-9A-Za-z]{12}$')).required(),
            otherwise: joi_1.default.string().pattern(new RegExp('^[0-9A-Za-z]{8,15}$')).required()
        })
    }),
    nombres: joi_1.default.string()
        .max(100),
    apellidoPaterno: joi_1.default.string()
        .max(100),
    apellidoMaterno: joi_1.default.string()
        .max(100),
    correo: joi_1.default.string()
        .email()
        .max(150),
    celular: joi_1.default.string()
        .max(9),
    fechaNacimiento: joi_1.default.string()
        .isoDate(),
    sexo: joi_1.default.string()
        .max(1),
    direccion: joi_1.default.string()
        .max(1024)
};
exports.insertarpacienteSchema = joi_1.default.object(Object.assign(Object.assign({}, pacienteBaseSchema), { tipoDocumento: pacienteBaseSchema.tipoDocumento.required(), numeroDocumento: pacienteBaseSchema.numeroDocumento.required(), nombres: pacienteBaseSchema.nombres.required(), apellidoPaterno: pacienteBaseSchema.apellidoPaterno.required(), apellidoMaterno: pacienteBaseSchema.apellidoMaterno.required(), correo: pacienteBaseSchema.correo.required(), celular: pacienteBaseSchema.celular.required(), fechaNacimiento: pacienteBaseSchema.fechaNacimiento.required(), sexo: pacienteBaseSchema.sexo.required(), direccion: pacienteBaseSchema.direccion.required() }));
exports.modificarpacienteSchema = joi_1.default.object(Object.assign({}, pacienteBaseSchema));
//# sourceMappingURL=pacienteShema.js.map
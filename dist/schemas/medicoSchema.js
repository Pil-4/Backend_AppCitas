"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarMedicoSchema = exports.insertarMedicoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const medicoBaseSchema = {
    tipoDocumento: joi_1.default.string()
        .valid('DNI', 'CE', 'Pasaporte')
        .messages({
        'any.only': '"tipoDocumento" debe ser uno de [DNI, CE, Pasaporte]',
        'any.required': '"tipoDocumento" es un campo obligatorio',
    }),
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
    sexo: joi_1.default.string()
        .valid('M', 'F'),
    especialidad: joi_1.default.string()
        .max(150)
};
exports.insertarMedicoSchema = joi_1.default.object(Object.assign(Object.assign({}, medicoBaseSchema), { tipoDocumento: medicoBaseSchema.tipoDocumento.required(), numeroDocumento: medicoBaseSchema.numeroDocumento.required(), nombres: medicoBaseSchema.nombres.required(), apellidoPaterno: medicoBaseSchema.apellidoPaterno.required(), apellidoMaterno: medicoBaseSchema.apellidoMaterno.required(), sexo: medicoBaseSchema.sexo.required(), especialidad: medicoBaseSchema.especialidad.required() }));
exports.modificarMedicoSchema = joi_1.default.object(Object.assign({}, medicoBaseSchema));
//# sourceMappingURL=medicoSchema.js.map
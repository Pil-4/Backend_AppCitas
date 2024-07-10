"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarPagoSchema = exports.insertarPagoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const pagoBaseSchema = {
    nombres: joi_1.default.string()
        .max(100),
    apellidoPaterno: joi_1.default.string()
        .max(150),
    apellidoMaterno: joi_1.default.string()
        .max(150),
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
    fechaPago: joi_1.default.date(),
    tipoDePago: joi_1.default.string()
        .valid('efectivo', 'tarjeta', 'transferencia'),
    subtotalPago: joi_1.default.number().positive(),
    igvPago: joi_1.default.number().positive(),
    totalPago: joi_1.default.number().positive()
};
exports.insertarPagoSchema = joi_1.default.object(Object.assign(Object.assign({}, pagoBaseSchema), { nombres: pagoBaseSchema.nombres.required(), apellidoPaterno: pagoBaseSchema.apellidoPaterno.required(), apellidoMaterno: pagoBaseSchema.apellidoMaterno.required(), tipoDocumento: pagoBaseSchema.tipoDocumento.required(), numeroDocumento: pagoBaseSchema.numeroDocumento.required(), fechaPago: pagoBaseSchema.fechaPago.required(), tipoDePago: pagoBaseSchema.tipoDePago.required(), subtotalPago: pagoBaseSchema.subtotalPago.required(), igvPago: pagoBaseSchema.igvPago.required(), totalPago: pagoBaseSchema.totalPago.required() }));
exports.modificarPagoSchema = joi_1.default.object(Object.assign({}, pagoBaseSchema));
//# sourceMappingURL=pagoShema.js.map
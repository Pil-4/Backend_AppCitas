import Joi from "joi";

const pagoBaseSchema = {
    nombres: Joi.string()
        .max(100),
    apellidoPaterno: Joi.string()
        .max(150),
    apellidoMaterno: Joi.string()
        .max(150),
    tipoDocumento: Joi.string()
        .valid('DNI', 'CE', 'Pasaporte'),
    numeroDocumento: Joi.when('tipoDocumento', {
        is: 'DNI',
        then: Joi.string().pattern(new RegExp('^[0-9]{8}$')).required(),
        otherwise: Joi.when('tipoDocumento', {
            is: 'CE',
            then: Joi.string().pattern(new RegExp('^[0-9A-Za-z]{12}$')).required(),
            otherwise: Joi.string().pattern(new RegExp('^[0-9A-Za-z]{8,15}$')).required()
        })
    }),
    fechaPago: Joi.date(),
    tipoDePago: Joi.string()
        .valid('efectivo', 'tarjeta', 'transferencia'),
    subtotalPago: Joi.number().positive(),
    igvPago: Joi.number().positive(),
    totalPago: Joi.number().positive()
};

export const insertarPagoSchema = Joi.object({
    ...pagoBaseSchema,
    nombres: pagoBaseSchema.nombres.required(),
    apellidoPaterno: pagoBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: pagoBaseSchema.apellidoMaterno.required(),
    tipoDocumento: pagoBaseSchema.tipoDocumento.required(),
    numeroDocumento: pagoBaseSchema.numeroDocumento.required(),
    fechaPago: pagoBaseSchema.fechaPago.required(),
    tipoDePago: pagoBaseSchema.tipoDePago.required(),
    subtotalPago: pagoBaseSchema.subtotalPago.required(),
    igvPago: pagoBaseSchema.igvPago.required(),
    totalPago: pagoBaseSchema.totalPago.required()
});

export const modificarPagoSchema = Joi.object({
    ...pagoBaseSchema
});

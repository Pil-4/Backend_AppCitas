import Joi from "joi";

const pagoBaseSchema = {
    nombres: Joi.string()
        .max(100),
    apellidoPaterno: Joi.string()
        .max(150),
    apellidoMaterno: Joi.string()
        .max(150),
    dni: Joi.string()
        .pattern(new RegExp('^[0-9]{8}$'))
        .max(8)
        .min(8),
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
    dni: pagoBaseSchema.dni.required(),
    fechaPago: pagoBaseSchema.fechaPago.required(),
    tipoDePago: pagoBaseSchema.tipoDePago.required(),
    subtotalPago: pagoBaseSchema.subtotalPago.required(),
    igvPago: pagoBaseSchema.igvPago.required(),
    totalPago: pagoBaseSchema.totalPago.required()
});

export const modificarPagoSchema = Joi.object({
    ...pagoBaseSchema
});

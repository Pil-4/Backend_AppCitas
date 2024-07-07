import Joi from "joi";

const medicoBaseSchema = {
    dni: Joi.string()
        .pattern(new RegExp('^[0-9]{8}$'))
        .max(8)
        .min(8),
    nombres: Joi.string()
        .max(100),
    apellidoPaterno: Joi.string()
        .max(100),
    apellidoMaterno: Joi.string()
        .max(100),
    sexo: Joi.string()
        .valid('M', 'F'),
    especialidad: Joi.string()
        .max(150)
};

export const insertarMedicoSchema = Joi.object({
    ...medicoBaseSchema,
    dni: medicoBaseSchema.dni.required(),
    nombres: medicoBaseSchema.nombres.required(),
    apellidoPaterno: medicoBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: medicoBaseSchema.apellidoMaterno.required(),
    sexo: medicoBaseSchema.sexo.required(),
    especialidad: medicoBaseSchema.especialidad.required()
});

export const modificarMedicoSchema = Joi.object({
    ...medicoBaseSchema
});

import Joi from "joi";

const medicoBaseSchema = {
    tipoDocumento: Joi.string()
        .valid('DNI', 'CE', 'Pasaporte')
        .messages({
            'any.only': '"tipoDocumento" debe ser uno de [DNI, CE, Pasaporte]',
            'any.required': '"tipoDocumento" es un campo obligatorio',
        }),
    numeroDocumento: Joi.when('tipoDocumento', {
            is: 'DNI',
            then: Joi.string().pattern(new RegExp('^[0-9]{8}$')).required(),
            otherwise: Joi.when('tipoDocumento', {
                is: 'CE',
                then: Joi.string().pattern(new RegExp('^[0-9A-Za-z]{12}$')).required(),
                otherwise: Joi.string().pattern(new RegExp('^[0-9A-Za-z]{8,15}$')).required()
        })
    }),
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
    tipoDocumento: medicoBaseSchema.tipoDocumento.required(),
    numeroDocumento: medicoBaseSchema.numeroDocumento.required(),
    nombres: medicoBaseSchema.nombres.required(),
    apellidoPaterno: medicoBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: medicoBaseSchema.apellidoMaterno.required(),
    sexo: medicoBaseSchema.sexo.required(),
    especialidad: medicoBaseSchema.especialidad.required()
});

export const modificarMedicoSchema = Joi.object({
    ...medicoBaseSchema
});

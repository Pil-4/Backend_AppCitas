import Joi from "joi";

const pacienteBaseSchema = {
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
    nombres: Joi.string()
        .max(100),
    apellidoPaterno: Joi.string()
        .max(100),
    apellidoMaterno: Joi.string()
        .max(100),
    correo: Joi.string()
        .email()
        .max(150),
    celular: Joi.string()
        .max(9),
    fechaNacimiento: Joi.string()
        .isoDate(),
    sexo: Joi.string()
        .max(1),
    direccion: Joi.string()
        .max(1024)
};

export const insertarpacienteSchema = Joi.object({
    ...pacienteBaseSchema,
    tipoDocumento: pacienteBaseSchema.tipoDocumento.required(),
    numeroDocumento: pacienteBaseSchema.numeroDocumento.required(),
    nombres: pacienteBaseSchema.nombres.required(),
    apellidoPaterno: pacienteBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: pacienteBaseSchema.apellidoMaterno.required(),
    correo: pacienteBaseSchema.correo.required(),
    celular: pacienteBaseSchema.celular.required(),
    fechaNacimiento: pacienteBaseSchema.fechaNacimiento.required(),
    sexo: pacienteBaseSchema.sexo.required(),
    direccion: pacienteBaseSchema.direccion.required()
});

export const modificarpacienteSchema = Joi.object({
    ...pacienteBaseSchema
});


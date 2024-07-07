import Joi from "joi";

const pacienteBaseSchema = {
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
    dni: pacienteBaseSchema.dni.required(),
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


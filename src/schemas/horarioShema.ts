import Joi from "joi";

const horarioBaseSchema = {
    diaSemana: Joi.string()
        .valid('lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'),
    horaInicio: Joi.string()
        .pattern(new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')),
    horaFin: Joi.string()
        .pattern(new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$'))
};

export const insertarHorarioSchema = Joi.object({
    ...horarioBaseSchema,
    diaSemana: horarioBaseSchema.diaSemana.required(),
    horaInicio: horarioBaseSchema.horaInicio.required(),
    horaFin: horarioBaseSchema.horaFin.required()
});

export const modificarHorarioSchema = Joi.object({
    ...horarioBaseSchema,
});

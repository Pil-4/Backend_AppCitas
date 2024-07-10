import Joi from "joi";

const citaBaseSchema = {
    fechaCita: Joi.date(),
    horaCita: Joi.string()
        .pattern(new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')),
    estadoCita: Joi.string()
        .valid('pendiente', 'confirmada', 'cancelada'),
    notasAdicionales: Joi.string().max(500)
        .allow(null, '')
};

export const insertarCitaSchema = Joi.object({
    ...citaBaseSchema,
    fechaCita: citaBaseSchema.fechaCita.required(),
    horaCita: citaBaseSchema.horaCita.required(),
    estadoCita: citaBaseSchema.estadoCita.required(),
    notasAdicionales: citaBaseSchema.notasAdicionales
});

export const modificarCitaSchema = Joi.object({
    ...citaBaseSchema,
});

import Joi from "joi";

const perfilBaseSchema = {
    descripcion: Joi.string()
    .max(100)
};

export const insertarperfilSchema = Joi.object({
    ...perfilBaseSchema,
    descripcion: perfilBaseSchema.descripcion.required()
});

export const modificarperfilSchema = Joi.object({
    ...perfilBaseSchema
});

import Joi from "joi";

const perfilBaseSchema = {
    descripcion: Joi.string()
    .max(100)
};

export const insertarPerfilSchema = Joi.object({
    ...perfilBaseSchema,
    descripcion: perfilBaseSchema.descripcion.required()
});

export const modificarPerfilSchema = Joi.object({
    ...perfilBaseSchema
});

import Joi from "joi";

const categoriaBaseSchema = {
    nombreCategoria: Joi.string()
    .min(5)         
    .max(50)     
};

export const insertarcategoriaSchema = Joi.object({
    ...categoriaBaseSchema, 
    nombreCategoria: categoriaBaseSchema.nombreCategoria.required(),

});

export const modificarcategoriaSchema = Joi.object({
    ...categoriaBaseSchema
});
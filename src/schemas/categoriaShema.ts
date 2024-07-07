import Joi from "joi";

const categoriaBaseSchema = {
    nombreCategoria: Joi.string()
    .min(10)         
    .max(50)     
};

export const insertCategoriaSchema = Joi.object({
    ...categoriaBaseSchema, 
    nombreCategoria: categoriaBaseSchema.nombreCategoria.required(),

});

export const modificarcategoriaSchema = Joi.object({
    ...categoriaBaseSchema
});
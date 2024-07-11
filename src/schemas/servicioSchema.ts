import Joi from "joi";

const servicioBaseSchema = {
    nombreServicio: Joi.string()
    .max(150),
    precio: Joi.number().positive()
};

export const insertarServicioSchema = Joi.object({
    ...servicioBaseSchema,
    nombreServicio: servicioBaseSchema.nombreServicio.required(),
    precio: servicioBaseSchema.precio.required(),
    categoria: Joi.object({
        idCategoria: Joi.number().integer().required(),
        nombreCategoria: Joi.string()
        .min(5)         
        .max(50)   
    }).required()
});

export const modificarServicioSchema = Joi.object({
    ...servicioBaseSchema
});

import Joi from "joi";

const notificacionBaseSchema = {
    mensaje: Joi.string()
        .min(200)
        .max(2000),
    fechaNotificacion: Joi.string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/), 
};

export const insertarNotificacionSchema = Joi.object({
    ...notificacionBaseSchema,
    mensaje: notificacionBaseSchema.mensaje.required(),
    fechaNotificacion: notificacionBaseSchema.fechaNotificacion.required()
});

export const modificarNotificacionSchema = Joi.object({
    ...notificacionBaseSchema
});


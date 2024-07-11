import Joi from "joi";

const usuarioBaseSchema = {
    nombres: Joi.string()
        .max(100),
    nombreUsuario: Joi.string()
        .max(100),
    apellidoPaterno: Joi.string()
        .max(100),
    apellidoMaterno: Joi.string()
        .max(100),
    contrasena: Joi.string()
        .min(8) 
        .max(30)          
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
        .messages({
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'string.max': 'La contraseña no debe exceder los 30 caracteres',
        'string.pattern.base': 'La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un carácter especial'
    })
};

export const insertarusuarioSchema = Joi.object({
    ...usuarioBaseSchema,
    nombres: usuarioBaseSchema.nombres.required(),
    nombreUsuario: usuarioBaseSchema.nombreUsuario.required(),
    apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(),
    contrasena: usuarioBaseSchema.contrasena.required()
});

export const modificarusuarioSchema = Joi.object({
    ...usuarioBaseSchema
});


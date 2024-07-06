import { categoria } from "@prisma/client"
import { ICategoria } from "../models/Categoria"

export const fromPrismaCategoria = (categoria: categoria): any=> ({
    idCategoria: categoria.id_categoria,
    nombreCategoria:categoria.nombre_categoria
});

export const toPrismaCategoria = (categoria: ICategoria): any => ({
    nombre_categoria:categoria.nombreCategoria
})
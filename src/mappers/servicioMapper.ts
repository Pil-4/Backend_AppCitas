import { categoria, servicio } from "@prisma/client"
import { IServicio } from "../models/Servicio"
import { fromPrismaCategoria } from "./categoriaMapper";

export const fromPrismaServicio = (servicio: servicio, categoria: categoria): any=> ({
    idServicio: servicio.id_servicio,
    categoria: fromPrismaCategoria(categoria),
    nombreServicio: servicio.nombre_servicio,
    precio:servicio.precio
});
export const toPrismaServicio = (servicio: IServicio): any => ({
    id_categoria: servicio.categoria.idCategoria,
    nombre_servicio: servicio.nombreServicio,
    precio:servicio.precio
})
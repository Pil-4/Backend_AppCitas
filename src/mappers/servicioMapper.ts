import { servicio } from "@prisma/client"
import { IServicio } from "../models/Servicio"

export const fromPrismaServicio = (servicio: servicio): any=> ({
    idServicio: servicio.id_servicio,
    idCategoria: servicio.id_categoria,
    nombreServicio: servicio.nombre_servicio,
    precio:servicio.precio
});
export const toPrismaServicio = (servicio: IServicio): any => ({
    nombre_servicio: servicio.nombreServicio,
    id_categoria: servicio.categoria,
    precio:servicio.precio
})
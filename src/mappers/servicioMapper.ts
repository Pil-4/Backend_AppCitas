import { servicio } from "@prisma/client"
import { IServicio } from "../models/Servicio"

export const fromPrismaServicio = (servicio: servicio): any=> ({
    idServicio: servicio.id_servicio,
    nombreServicio: servicio.nombre_servicio,
    categoria: servicio.categoria,
    precio:servicio.precio
});
export const toPrismaServicio = (servicio: IServicio): any => ({
    nombre_servicio: servicio.nombreServicio,
    categoria: servicio.categoria,
    precio:servicio.precio
})
import { perfil, usuario, notificacion } from "@prisma/client"
import { INotificacion } from "../models/Notificacion"
import { fromPrismaUsuario } from "./usuarioMapper";

export const fromPrismanotificacion = (notificacion: notificacion, usuario:usuario, perfil:perfil): any=> ({
    idNotificacion: notificacion.id_notificacion,
    usuario:fromPrismaUsuario(usuario, perfil),
    mensaje:notificacion.mensaje,
    fechaNotificacion: notificacion.fecha_notificacion
});
export const toPrismanotificacion = (notificacion: INotificacion): any => ({
    id_usuario: notificacion.usuario.idUsuario,
    mensaje: notificacion.mensaje,
    fecha_notificacion:notificacion.fechaNotificacion
})
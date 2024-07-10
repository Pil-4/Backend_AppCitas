import { perfil, usuario } from "@prisma/client"
import { IUsuario } from "../models/Usuario"
import { fromPrismaPerfil } from "./perfilMapper";

export const fromPrismaUsuario = (usuario: usuario, perfil:perfil): any=> ({
    idUsuario: usuario.id_usuario,
    perfil:fromPrismaPerfil(perfil),
    nombres:usuario.nombres,
    nombreUsuario: usuario.nombre_usuario,
    apellidoPaterno:usuario.apellido_paterno,
    apellidoMaterno:usuario.apellido_materno,
    contrasena: usuario.contrasena
});
export const toPrismaUsuario = (usuario: IUsuario): any => ({
    id_perfil: usuario.perfil.idPerfil,
    nombres: usuario.nombres,
    nombre_usuario:usuario.nombreUsuario,
    apellido_paterno:usuario.apellidoPaterno,
    apellido_materno: usuario.apellidoMaterno,
    contrasena:usuario.contrasena
})
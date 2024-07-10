import { PrismaClient, usuario } from "@prisma/client";
import { IUsuario } from "../models/Usuario";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaUsuario, toPrismaUsuario } from "../mappers/usuarioMapper";

const prisma = new PrismaClient();

export const insertarUsuario = async (usuario: IUsuario) => {
    
    await prisma.usuario.create({
        data: toPrismaUsuario(usuario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarUsuarios = async () => {
    const usuario: any[] = await prisma.usuario.findMany({
        include: {
            perfil: true
        }
    });
    return usuario.map((usuario: any)=> fromPrismaUsuario(usuario, usuario.perfil));
}

export const obtenerUsuario = async (idUsuario: number) => {
    // console.log('usuarioService::obtenerusuario',idUsuario);

    // const usuario: usuario =  await prisma.usuario.findUnique({
    //     where: {
    //         id_usuario: idUsuario,
    //         estado_auditoria:'1'
    //     }
    // });

    // return fromPrismaUsuario(usuario);
    const usuario: any =  await prisma.usuario.findUnique({
        where: {
            id_usuario: idUsuario
        },
        include: {
            perfil: true
        }
    });
    return fromPrismaUsuario(usuario, usuario.perfil);
}

export const modificarUsuario = async (idUsuario: number, usuario:IUsuario) => {
    console.log('usuarioService::modificarUsuario',idUsuario,usuario);
    await prisma.usuario.update({
        data: toPrismaUsuario(usuario),
        where:{
            id_usuario: idUsuario
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarUsuario = async (idUsuario: number) => {
    console.log('usuarioService::eliminarusuario',idUsuario);
    
    await prisma.usuario.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_usuario: idUsuario
        }
    })


    // await prisma.usuario.delete({
    //     where: {
    //         id_usuario: idusuario
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
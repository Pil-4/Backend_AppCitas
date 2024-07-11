import { PrismaClient, notificacion } from "@prisma/client";
import { INotificacion } from "../models/Notificacion";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaNotificacion, toPrismaNotificacion } from "../mappers/notificacionMapper";

const prisma = new PrismaClient();

export const insertarNotificacion = async (notificacion: INotificacion) => {
    
    await prisma.notificacion.create({
        data: toPrismaNotificacion(notificacion)
    });
    return RESPONSE_INSERT_OK;
}

export const listarNotificacions = async () => {
    const notificacion: any[] = await prisma.notificacion.findMany({
        include: {
            usuario: true
        }
    });
    return notificacion.map((notificacion: any)=> fromPrismaNotificacion(notificacion, notificacion.usuario, notificacion.perfil));
}

export const obtenerNotificacion = async (idNotificacion: number) => {
    // console.log('notificacionService::obtenernotificacion',idnotificacion);

    // const notificacion: notificacion =  await prisma.notificacion.findUnique({
    //     where: {
    //         id_notificacion: idnotificacion,
    //         estado_auditoria:'1'
    //     }
    // });

    // return fromPrismanotificacion(notificacion);
    const notificacion: any =  await prisma.notificacion.findUnique({
        where: {
            id_notificacion: idNotificacion
        },
        include: {
            usuario: true
        }
    });
    return fromPrismaNotificacion(notificacion, notificacion.usuario, notificacion.perfil);
}

export const modificarNotificacion = async (idNotificacion: number, notificacion:INotificacion) => {
    console.log('notificacionService::modificarNotificacion',idNotificacion,notificacion);
    await prisma.notificacion.update({
        data: toPrismaNotificacion(notificacion),
        where:{
            id_notificacion: idNotificacion
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarNotificacion = async (idNotificacion: number) => {
    console.log('notificacionService::eliminarNotificacion',idNotificacion);
    
    await prisma.notificacion.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_notificacion: idNotificacion
        }
    })


    // await prisma.notificacion.delete({
    //     where: {
    //         id_notificacion: idnotificacion
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
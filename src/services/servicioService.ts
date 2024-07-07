import { PrismaClient, servicio } from "@prisma/client";
import { IServicio } from "../models/Servicio";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaServicio, toPrismaServicio } from "../mappers/servicioMapper";

const prisma = new PrismaClient();

export const insertarServicio = async (servicio: IServicio) => {
    
    await prisma.servicio.create({
        data: toPrismaServicio(servicio)
    });
    return RESPONSE_INSERT_OK;
}

export const listarServicios = async () => {
    const servicio: any[] = await prisma.servicio.findMany({
        include: {
            categoria: true
        }
    });
    return servicio.map((servicio: any)=> fromPrismaServicio(servicio, servicio.categoria));
}

export const obtenerServicio = async (idServicio: number) => {
    // console.log('servicioService::obtenerServicio',idServicio);

    // const servicio: servicio =  await prisma.servicio.findUnique({
    //     where: {
    //         id_servicio: idServicio,
    //         estado_auditoria:'1'
    //     }
    // });

    // return fromPrismaServicio(servicio);
    const servicio: any =  await prisma.servicio.findUnique({
        where: {
            id_servicio: idServicio
        },
        include: {
            categoria: true
        }
    });
    return fromPrismaServicio(servicio, servicio.categoria);
}

export const modificarServicio = async (idServicio: number, servicio:IServicio) => {
    console.log('servicioService::modificarServicio',idServicio,servicio);
    await prisma.servicio.update({
        data: toPrismaServicio(servicio),
        where:{
            id_servicio: idServicio
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarServicio = async (idServicio: number) => {
    console.log('servicioService::eliminarServicio',idServicio);
    
    await prisma.servicio.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_servicio: idServicio
        }
    })


    // await prisma.servicio.delete({
    //     where: {
    //         id_servicio: idservicio
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
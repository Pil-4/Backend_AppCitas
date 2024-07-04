import { PrismaClient, cita } from "@prisma/client";
import { ICita } from "../models/Cita";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaCita, toPrismaCita } from "../mappers/citaMapper";

const prisma = new PrismaClient();

export const insertarCita = async (cita: ICita) => {
    
    await prisma.cita.create({
        data: toPrismaCita(cita)
    });
    return RESPONSE_INSERT_OK;
}

export const listarCitas = async () => {
    const cita: cita[] = await prisma.cita.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return cita.map((cita: cita)=> fromPrismaCita(cita));
}

export const obtenerCita = async (idCita: number) => {
    console.log('citaService::obtenerCita',idCita);

    const cita: cita =  await prisma.cita.findUnique({
        where: {
            id_cita: idCita,
            estado_auditoria:'1'
        }
    });

    return fromPrismaCita(cita);
}

export const modificarCita = async (idCita: number, cita:ICita) => {
    console.log('citaService::modificarcita',idCita,cita);
    await prisma.cita.update({
        data: toPrismaCita(cita),
        where:{
            id_cita: idCita
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarCita = async (idCita: number) => {
    console.log('citaService::eliminarCita',idCita);
    
    await prisma.cita.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_cita: idCita
        }
    })


    // await prisma.cita.delete({
    //     where: {
    //         id_cita: idcita
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
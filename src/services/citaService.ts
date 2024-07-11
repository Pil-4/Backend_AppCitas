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
    const cita: any[] = await prisma.cita.findMany({
        include: {
            paciente: true,
            servicio: { // <-- Incluir la categoría a través de servicio
                include: {
                categoria: true
                }
            },
            medico: true
        }
    });
    return cita.map((cita: any)=> fromPrismaCita(cita, cita.paciente, cita.servicio, cita.servicio.categoria, cita.medico));
}

export const obtenerCita = async (idCita: number) => {
    // console.log('citaService::obtenerCita',idCita);

    // const cita: cita =  await prisma.cita.findUnique({
    //     where: {
    //         id_cita: idCita,
    //         estado_auditoria:'1'
    //     }
    // });

    // return fromPrismaCita(cita);

    const cita: any =  await prisma.cita.findUnique({
        where: {
            id_cita: idCita
        },
        include: {
            paciente: true,
            servicio: { // <-- Incluir la categoría a través de servicio
                include: {
                categoria: true
                }
            },
            medico: true
        }
    });
    return fromPrismaCita(cita, cita.paciente, cita.servicio, cita.servicio.categoria, cita.medico);
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
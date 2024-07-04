import { PrismaClient, medico } from "@prisma/client";
import { IMedico } from "../models/Medico";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaMedico, toPrismaMedico } from "../mappers/medicoMapper";

const prisma = new PrismaClient();

export const insertarMedico = async (medico: IMedico) => {
    
    await prisma.medico.create({
        data: toPrismaMedico(medico)
    });
    return RESPONSE_INSERT_OK;
}

export const listarMedicos = async () => {
    const medico: medico[] = await prisma.medico.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return medico.map((medico: medico)=> fromPrismaMedico(medico));
}

export const obtenerMedico = async (idMedico: number) => {
    console.log('medicoService::obtenerMedico',idMedico);

    const medico: medico =  await prisma.medico.findUnique({
        where: {
            id_medico: idMedico,
            estado_auditoria:'1'
        }
    });

    return fromPrismaMedico(medico);
}

export const modificarMedico = async (idMedico: number, medico:IMedico) => {
    console.log('medicoService::modificarmedico',idMedico,medico);
    await prisma.medico.update({
        data: toPrismaMedico(medico),
        where:{
            id_medico: idMedico
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarMedico = async (idMedico: number) => {
    console.log('medicoService::eliminarMedico',idMedico);
    
    await prisma.medico.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_medico: idMedico
        }
    })


    // await prisma.medico.delete({
    //     where: {
    //         id_medico: idMedico
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
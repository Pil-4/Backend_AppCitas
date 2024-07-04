import { PrismaClient, paciente } from "@prisma/client";
import { IPaciente } from "../models/Paciente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPaciente, toPrismaPaciente } from "../mappers/pacienteMapper";

const prisma = new PrismaClient();

export const insertarPaciente = async (paciente: IPaciente) => {
    
    await prisma.paciente.create({
        data: toPrismaPaciente(paciente)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPacientes = async () => {
    const paciente: paciente[] = await prisma.paciente.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return paciente.map((paciente: paciente)=> fromPrismaPaciente(paciente));
}

export const obtenerPaciente = async (idPaciente: number) => {
    console.log('pacienteService::obtenerPaciente',idPaciente);

    const paciente: paciente =  await prisma.paciente.findUnique({
        where: {
            id_paciente: idPaciente,
            estado_auditoria:'1'
        }
    });

    return fromPrismaPaciente(paciente);
}

export const modificarPaciente = async (idPaciente: number, paciente:IPaciente) => {
    console.log('pacienteService::modificarPaciente',idPaciente,paciente);
    await prisma.paciente.update({
        data: toPrismaPaciente(paciente),
        where:{
            id_paciente: idPaciente
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarPaciente = async (idPaciente: number) => {
    console.log('pacienteService::eliminarPaciente',idPaciente);
    
    await prisma.paciente.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_paciente: idPaciente
        }
    })


    // await prisma.paciente.delete({
    //     where: {
    //         id_paciente: idPaciente
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
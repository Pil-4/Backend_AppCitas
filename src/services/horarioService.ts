import { PrismaClient, horario } from "@prisma/client";
import { IHorario } from "../models/Horario";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaHorario, toPrismaHorario } from "../mappers/horarioMapper";

const prisma = new PrismaClient();

export const insertarHorario = async (horario: IHorario) => {
    
    await prisma.horario.create({
        data: toPrismaHorario(horario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarHorarios = async () => {
    const horario: any[] = await prisma.horario.findMany({
        include: {
            medico: true
        }
    });
    return horario.map((horario: any)=> fromPrismaHorario(horario, horario.medico));
}

export const obtenerHorario = async (idHorario: number) => {
    // console.log('horarioService::obtenerHorario',idHorario);

    // const horario: horario =  await prisma.horario.findUnique({
    //     where: {
    //         id_horario: idHorario,
    //         estado_auditoria:'1'
    //     }
    // });

    // return fromPrismaHorario(horario);
    const horario: any =  await prisma.horario.findUnique({
        where: {
            id_horario: idHorario
        },
        include: {
            medico: true
        }
    });
    return fromPrismaHorario(horario, horario.medico);

}

export const modificarHorario = async (idHorario: number, horario:IHorario) => {
    await prisma.horario.update({
        data: toPrismaHorario(horario),
        where:{
            id_horario: idHorario
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarHorario = async (idHorario: number) => {
    console.log('horarioService::eliminarHorario',idHorario);
    
    await prisma.horario.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_horario: idHorario
        }
    })


    // await prisma.horario.delete({
    //     where: {
    //         id_horario: idhorario
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
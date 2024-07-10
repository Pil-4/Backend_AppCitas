import { PrismaClient, perfil } from "@prisma/client";
import { IPerfil } from "../models/Perfil";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPerfil, toPrismaPerfil } from "../mappers/perfilMapper";

const prisma = new PrismaClient();

export const insertarPerfil = async (perfil: IPerfil) => {
    
    await prisma.perfil.create({
        data: toPrismaPerfil(perfil)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPerfils = async () => {
    const perfil: perfil[] = await prisma.perfil.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return perfil.map((perfil: perfil)=> fromPrismaPerfil(perfil));
}

export const obtenerPerfil = async (idperfil: number) => {
    console.log('perfilService::obtenerPerfil',idperfil);

    const perfil: perfil =  await prisma.perfil.findUnique({
        where: {
            id_perfil: idperfil,
            estado_auditoria:'1'
        }
    });

    return fromPrismaPerfil(perfil);
}

export const modificarPerfil = async (idPerfil: number, perfil:IPerfil) => {
    console.log('perfilService::modificarperfil',idPerfil,perfil);
    await prisma.perfil.update({
        data: toPrismaPerfil(perfil),
        where:{
            id_perfil: idPerfil
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarPerfil = async (idPerfil: number) => {
    console.log('perfilService::eliminarperfil',idPerfil);
    
    await prisma.perfil.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_perfil: idPerfil
        }
    })


    // await prisma.perfil.delete({
    //     where: {
    //         id_perfil: idperfil
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
import { PrismaClient, pago } from "@prisma/client";
import { IPago } from "../models/Pago";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPago, toPrismaPago } from "../mappers/pagoMapper";

const prisma = new PrismaClient();

export const insertarPago = async (pago: IPago) => {
    
    await prisma.pago.create({
        data: toPrismaPago(pago)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPagos = async () => {
    const pago: pago[] = await prisma.pago.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return pago.map((pago: pago)=> fromPrismaPago(pago));
}

export const obtenerPago = async (idpago: number) => {
    console.log('pagoService::obtenerPago',idpago);

    const pago: pago =  await prisma.pago.findUnique({
        where: {
            id_pago: idpago,
            estado_auditoria:'1'
        }
    });

    return fromPrismaPago(pago);
}

export const modificarPago = async (idPago: number, pago:IPago) => {
    console.log('pagoService::modificarPago',idPago,pago);
    await prisma.pago.update({
        data: toPrismaPago(pago),
        where:{
            id_pago: idPago
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarPago = async (idPago: number) => {
    console.log('pagoService::eliminarPago',idPago);
    
    await prisma.pago.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_pago: idPago
        }
    })


    // await prisma.pago.delete({
    //     where: {
    //         id_pago: idPago
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
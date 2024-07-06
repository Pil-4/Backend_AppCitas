import { PrismaClient, categoria } from "@prisma/client";
import { ICategoria } from "../models/Categoria";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaCategoria, toPrismaCategoria } from "../mappers/categoriaMapper";

const prisma = new PrismaClient();

export const insertarCategoria = async (categoria: ICategoria) => {
    
    await prisma.categoria.create({
        data: toPrismaCategoria(categoria)
    });
    return RESPONSE_INSERT_OK;
}

export const listarCategorias = async () => {
    const categoria: categoria[] = await prisma.categoria.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return categoria.map((categoria: categoria)=> fromPrismaCategoria(categoria));
}

export const obtenerCategoria = async (idCategoria: number) => {
    console.log('categoriaService::obtenerCategoria',idCategoria);

    const categoria: categoria =  await prisma.categoria.findUnique({
        where: {
            id_categoria: idCategoria,
            estado_auditoria:'1'
        }
    });

    return fromPrismaCategoria(categoria);
}

export const modificarCategoria = async (idCategoria: number, categoria:ICategoria) => {
    console.log('categoriaService::modificarCategoria',idCategoria,categoria);
    await prisma.categoria.update({
        data: toPrismaCategoria(categoria),
        where:{
            id_categoria: idCategoria
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarCategoria = async (idCategoria: number) => {
    console.log('categoriaService::eliminarCategoria',idCategoria);
    
    await prisma.categoria.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_categoria: idCategoria
        }
    })


    // await prisma.categoria.delete({
    //     where: {
    //         id_categoria: idcategoria
    //     }
    // });
    return RESPONSE_DELETE_OK;
}
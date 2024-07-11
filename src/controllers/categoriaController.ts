import { Request, Response } from "express";
import * as categoriaService from "../services/categoriaService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarcategoriaSchema, modificarcategoriaSchema } from "../schemas/categoriaSchema";

export const insertarCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::insertarCategoria');
    try {
        const { error, value: validatedCategoria } = insertarcategoriaSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await categoriaService.insertarCategoria(validatedCategoria);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarCategorias = async (req: Request, res: Response) => {
    console.log('categoriaController::listarCategorias');
    try {
        const categoria = await categoriaService.listarCategorias();
        res.status(200).json(ResponseModel.success(categoria));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::obtenerCategoria');
    try {
        const { id } = req.params;
        const categoria = await categoriaService.obtenerCategoria(Number(id))
        res.status(200).json(ResponseModel.success(categoria));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::modificarCategoria');
    try {
        const { id } = req.params;
        const { error, value: validatedCategoria } = modificarcategoriaSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await categoriaService.modificarCategoria(Number(id), validatedCategoria);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarCategoria = async (req: Request, res: Response) => {
    console.log('categoriaController::eliminarCategoria');
    try {
        const { id } = req.params;
        const response = await categoriaService.eliminarCategoria(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
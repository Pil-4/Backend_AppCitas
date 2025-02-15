import { Request, Response } from "express";
import * as perfilService from "../services/perfilService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarPerfilSchema, modificarPerfilSchema } from "../schemas/perfilSchema"; 

export const insertarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::insertarPerfil');
    try {
        const { error, value: validatedPerfil } = insertarPerfilSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await perfilService.insertarPerfil(validatedPerfil);
        res.status(200).json(ResponseModel.success(null, response)); 
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarPerfils = async (req: Request, res: Response) => {
    console.log('perfilController::listarPerfils');
    try {
        const perfil = await perfilService.listarPerfils();
        res.status(200).json(ResponseModel.success(perfil));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::obtenerPerfil');
    try {
        const { id } = req.params;
        const perfil = await perfilService.obtenerPerfil(Number(id))
        res.status(200).json(ResponseModel.success(perfil));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::modificarPerfil');
    try {
        const { id } = req.params;
        const { error, value: validatedPerfil } = modificarPerfilSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await perfilService.modificarPerfil(Number(id), validatedPerfil);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarPerfil = async (req: Request, res: Response) => {
    console.log('perfilController::eliminarPerfil');
    try {
        const { id } = req.params;
        const response = await perfilService.eliminarPerfil(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
import { Request, Response } from "express"
import * as usuarioService from "../services/usuarioService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarusuarioSchema, modificarusuarioSchema } from "../schemas/usuarioSchema";

export const insertarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::insertarUsuario');
    try {
        const { error, value: validatedUsuario } = insertarusuarioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await usuarioService.insertarUsuario(validatedUsuario);
        res.status(201).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarUsuarios = async (req: Request, res: Response) => {
    console.log('usuarioController::listarUsuarios');
    try {
        const usuario = await usuarioService.listarUsuarios();
        res.status(200).json(ResponseModel.success(usuario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::obtenerUsuario');
    try {
        const { id } = req.params;
        const usuario = await usuarioService.obtenerUsuario(Number(id))
        res.status(200).json(ResponseModel.success(usuario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::modificarUsuario');
    try {
        const { id } = req.params;
        const { error, value: validatedUsuario } = modificarusuarioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await usuarioService.modificarUsuario(Number(id), validatedUsuario); 
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error('Error al modificar usuario:', error.message);
        res.status(500).json(ResponseModel.error("Error interno del servidor"));
    }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::eliminarUsuario');
    try {
        const { id } = req.params;
        const response = await usuarioService.eliminarUsuario(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
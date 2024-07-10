import { Request, Response } from "express"
import * as medicoService from "../services/medicoService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarMedicoSchema, modificarMedicoSchema } from "../schemas/medicoSchema";

export const insertarMedico = async (req: Request, res: Response) => {
    console.log('medicoController::insertarMedico');
    try {
        const { error, value: validatedMedico } = insertarMedicoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await medicoService.insertarMedico(validatedMedico);
        res.status(201).json(ResponseModel.success(null, response)); 
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};
export const listarMedicos = async (req: Request, res: Response) => {
    console.log('medicoController::listarMedicos');
    try {
        const medico = await medicoService.listarMedicos();
        res.status(200).json(ResponseModel.success(medico));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerMedico = async (req: Request, res: Response) => {
    console.log('medicoController::obtenerMedico');
    try {
        const { id } = req.params;
        const medico = await medicoService.obtenerMedico(Number(id))
        res.status(200).json(ResponseModel.success(medico));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarMedico = async (req: Request, res: Response) => {
    console.log('medicoController::modificarMedico');
    try {
        const { id } = req.params;
        const { error, value: validatedMedico } = modificarMedicoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await medicoService.modificarMedico(Number(id), validatedMedico);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) { 
        console.error('Error al modificar médico:', error.message);
        res.status(500).json(ResponseModel.error("Error interno del servidor"));
    }
};

export const eliminarMedico = async (req: Request, res: Response) => {
    console.log('medicoController::eliminarMedico');
    try {
        const { id } = req.params;
        const response = await medicoService.eliminarMedico(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
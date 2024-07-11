import { Request, Response } from "express";
import * as citaService from "../services/citaService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarCitaSchema, modificarCitaSchema } from "../schemas/citaSchema"; 

export const insertarCita = async (req: Request, res: Response) => {
    console.log('citaController::insertarCita');
    try {
        const { error, value: validatedCita } = insertarCitaSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await citaService.insertarCita(validatedCita);
        res.status(200).json(ResponseModel.success(null, response)); 
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarCitas = async (req: Request, res: Response) => {
    console.log('citaController::listarCitas');
    try {
        const cita = await citaService.listarCitas();
        res.status(200).json(ResponseModel.success(cita));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerCita = async (req: Request, res: Response) => {
    console.log('citaController::obtenerCita');
    try {
        const { id } = req.params;
        const cita = await citaService.obtenerCita(Number(id))
        res.status(200).json(ResponseModel.success(cita));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarCita = async (req: Request, res: Response) => {
    console.log('citaController::modificarCita');
    try {
        const { id } = req.params;
        const { error, value: validatedCita } = modificarCitaSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await citaService.modificarCita(Number(id), validatedCita);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};
export const eliminarCita = async (req: Request, res: Response) => {
    console.log('citaController::eliminarCita');
    try {
        const { id } = req.params;
        const response = await citaService.eliminarCita(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
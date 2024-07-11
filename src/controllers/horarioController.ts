import { Request, Response } from "express";
import * as horarioService from "../services/horarioService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarHorarioSchema, modificarHorarioSchema } from "../schemas/horarioSchema";

export const insertarHorario = async (req: Request, res: Response) => {
    console.log('horarioController::insertarHorario');
    try {
        const { error, value: validatedHorario } = insertarHorarioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await horarioService.insertarHorario(validatedHorario); 
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarHorarios = async (req: Request, res: Response) => {
    console.log('horarioController::listarHorarios');
    try {
        const horario = await horarioService.listarHorarios();
        res.status(200).json(ResponseModel.success(horario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerHorario = async (req: Request, res: Response) => {
    console.log('horarioController::obtenerHorario');
    try {
        const { id } = req.params;
        const horario = await horarioService.obtenerHorario(Number(id))
        res.status(200).json(ResponseModel.success(horario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarHorario = async (req: Request, res: Response) => {
    console.log('horarioController::modificarHorario');
    try {
        const { id } = req.params;
        const { error, value: validatedHorario } = modificarHorarioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await horarioService.modificarHorario(Number(id), validatedHorario);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarHorario = async (req: Request, res: Response) => {
    console.log('horarioController::eliminarHorario');
    try {
        const { id } = req.params;
        const response = await horarioService.eliminarHorario(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
import { Request, Response } from "express"
import * as pacienteService from "../services/pacienteService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarpacienteSchema, modificarpacienteSchema } from "../schemas/pacienteSchema";


export const insertarPaciente = async (req: Request, res: Response) => {
    console.log('pacienteController::insertarPaciente');
    try {
        const { error, value: validatedPaciente } = insertarpacienteSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await pacienteService.insertarPaciente(validatedPaciente);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarPacientes = async (req: Request, res: Response) => {
    console.log('pacienteController::listarPacientes');
    try {
        const paciente = await pacienteService.listarPacientes();
        res.status(200).json(ResponseModel.success(paciente));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerPaciente = async (req: Request, res: Response) => {
    console.log('pacienteController::obtenerPaciente');
    try {
        const { id } = req.params;
        const paciente = await pacienteService.obtenerPaciente(Number(id))
        res.status(200).json(ResponseModel.success(paciente));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarPaciente = async (req: Request, res: Response) => {
    console.log('pacienteController::modificarPaciente');
    try {
        const { id } = req.params;
        const { error, value: validatedPaciente } = modificarpacienteSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await pacienteService.modificarPaciente(Number(id), validatedPaciente);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error('Error al modificar paciente:', error.message);
        res.status(500).json(ResponseModel.error("Error interno del servidor"));
    }
};
export const eliminarPaciente = async (req: Request, res: Response) => {
    console.log('pacienteController::eliminarPaciente');
    try {
        const { id } = req.params;
        const response = await pacienteService.eliminarPaciente(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
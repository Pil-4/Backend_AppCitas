import { Request, Response } from "express"
import * as notificacionService from "../services/norificacionService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarNotificacion = async (req: Request, res: Response) => {
    console.log('notificacionController::insertarNotificacion');
    try {
        const response = await notificacionService.insertarNotificacion(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarNotificacions = async (req: Request, res: Response) => {
    console.log('notificacionController::listarNotificacions');
    try {
        const notificacion = await notificacionService.listarNotificacions();
        res.status(200).json(ResponseModel.success(notificacion));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerNotificacion = async (req: Request, res: Response) => {
    console.log('notificacionController::obtenernotificacion');
    try {
        const { id } = req.params;
        const notificacion = await notificacionService.obtenerNotificacion(Number(id))
        res.status(200).json(ResponseModel.success(notificacion));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarNotificacion = async (req: Request, res: Response) => {
    console.log('notificacionController::modificarNotificacion');
    try {
        const { id } = req.params;
        const response = await notificacionService.modificarNotificacion(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarNotificacion = async (req: Request, res: Response) => {
    console.log('notificacionController::eliminarNotificacion');
    try {
        const { id } = req.params;
        const response = await notificacionService.eliminarNotificacion(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
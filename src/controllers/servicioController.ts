import { Request, Response } from "express"
import * as servicioService from "../services/servicioService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarServicio = async (req: Request, res: Response) => {
    console.log('servicioController::insertarServicio');
    try {
        const response = await servicioService.insertarServicio(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarServicios = async (req: Request, res: Response) => {
    console.log('servicioController::listarServicios');
    try {
        const servicio = await servicioService.listarServicios();
        res.status(200).json(ResponseModel.success(servicio));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerServicio = async (req: Request, res: Response) => {
    console.log('servicioController::obtenerServicio');
    try {
        const { id } = req.params;
        const servicio = await servicioService.obtenerServicio(Number(id))
        res.status(200).json(ResponseModel.success(servicio));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarServicio = async (req: Request, res: Response) => {
    console.log('servicioController::modificarServicio');
    try {
        const { id } = req.params;
        const response = await servicioService.modificarServicio(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarServicio = async (req: Request, res: Response) => {
    console.log('servicioController::eliminarServicio');
    try {
        const { id } = req.params;
        const response = await servicioService.eliminarServicio(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
import { Request, Response } from "express";
import * as pagoService from "../services/pagoService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarPagoSchema, modificarPagoSchema } from "../schemas/pagoSchema";

export const insertarPago = async (req: Request, res: Response) => {
    console.log('pagoController::insertarPago');
    try {
        const { error, value: validatedPago } = insertarPagoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await pagoService.insertarPago(validatedPago); 
        res.status(200).json(ResponseModel.success(null, response)); 
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const listarPagos = async (req: Request, res: Response) => {
    console.log('pagoController::listarPagos');
    try {
        const pago = await pagoService.listarPagos();
        res.status(200).json(ResponseModel.success(pago));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerPago = async (req: Request, res: Response) => {
    console.log('pagoController::obtenerPago');
    try {
        const { id } = req.params;
        const pago = await pagoService.obtenerPago(Number(id))
        res.status(200).json(ResponseModel.success(pago));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}


export const modificarPago = async (req: Request, res: Response) => {
    console.log('pagoController::modificarPago');
    try {
        const { id } = req.params;
        const { error, value: validatedPago } = modificarPagoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel.error(error.details[0].message));
        }
        const response = await pagoService.modificarPago(Number(id), validatedPago); 
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
};

export const eliminarPago = async (req: Request, res: Response) => {
    console.log('pagoController::eliminarPago');
    try {
        const { id } = req.params;
        const response = await pagoService.eliminarPago(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarServicio = exports.modificarServicio = exports.obtenerServicio = exports.listarServicios = exports.insertarServicio = void 0;
const servicioService = __importStar(require("../services/servicioService"));
const ResponseModel_1 = require("../models/ResponseModel");
const servicioSchema_1 = require("../schemas/servicioSchema");
const insertarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioController::insertarServicio');
    try {
        const { error, value: validatedServicio } = servicioSchema_1.insertarServicioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield servicioService.insertarServicio(validatedServicio);
        res.status(201).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarServicio = insertarServicio;
const listarServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioController::listarServicios');
    try {
        const servicio = yield servicioService.listarServicios();
        res.status(200).json(ResponseModel_1.ResponseModel.success(servicio));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarServicios = listarServicios;
const obtenerServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioController::obtenerServicio');
    try {
        const { id } = req.params;
        const servicio = yield servicioService.obtenerServicio(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(servicio));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerServicio = obtenerServicio;
const modificarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioController::modificarServicio');
    try {
        const { id } = req.params;
        const { error, value: validatedServicio } = servicioSchema_1.modificarServicioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield servicioService.modificarServicio(Number(id), validatedServicio);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error('Error al modificar servicio:', error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error("Error interno del servidor"));
    }
});
exports.modificarServicio = modificarServicio;
const eliminarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioController::eliminarServicio');
    try {
        const { id } = req.params;
        const response = yield servicioService.eliminarServicio(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarServicio = eliminarServicio;
//# sourceMappingURL=servicioController.js.map
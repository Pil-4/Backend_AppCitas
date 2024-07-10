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
exports.eliminarNotificacion = exports.modificarNotificacion = exports.obtenerNotificacion = exports.listarNotificacions = exports.insertarNotificacion = void 0;
const notificacionService = __importStar(require("../services/norificacionService"));
const ResponseModel_1 = require("../models/ResponseModel");
const insertarNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionController::insertarNotificacion');
    try {
        const response = yield notificacionService.insertarNotificacion(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarNotificacion = insertarNotificacion;
const listarNotificacions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionController::listarNotificacions');
    try {
        const notificacion = yield notificacionService.listarNotificacions();
        res.status(200).json(ResponseModel_1.ResponseModel.success(notificacion));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarNotificacions = listarNotificacions;
const obtenerNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionController::obtenernotificacion');
    try {
        const { id } = req.params;
        const notificacion = yield notificacionService.obtenerNotificacion(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(notificacion));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerNotificacion = obtenerNotificacion;
const modificarNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionController::modificarNotificacion');
    try {
        const { id } = req.params;
        const response = yield notificacionService.modificarNotificacion(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarNotificacion = modificarNotificacion;
const eliminarNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionController::eliminarNotificacion');
    try {
        const { id } = req.params;
        const response = yield notificacionService.eliminarNotificacion(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarNotificacion = eliminarNotificacion;
//# sourceMappingURL=notificacionController.js.map
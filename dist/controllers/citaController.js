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
exports.eliminarCita = exports.modificarCita = exports.obtenerCita = exports.listarCitas = exports.insertarCita = void 0;
const citaService = __importStar(require("../services/citaService"));
const ResponseModel_1 = require("../models/ResponseModel");
const insertarCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaController::insertarCita');
    try {
        const response = yield citaService.insertarCita(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarCita = insertarCita;
const listarCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaController::listarCitas');
    try {
        const cita = yield citaService.listarCitas();
        res.status(200).json(ResponseModel_1.ResponseModel.success(cita));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarCitas = listarCitas;
const obtenerCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaController::obtenerCita');
    try {
        const { id } = req.params;
        const cita = yield citaService.obtenerCita(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(cita));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerCita = obtenerCita;
const modificarCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaController::modificarCita');
    try {
        const { id } = req.params;
        const response = yield citaService.modificarCita(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarCita = modificarCita;
const eliminarCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaController::eliminarCita');
    try {
        const { id } = req.params;
        const response = yield citaService.eliminarCita(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarCita = eliminarCita;
//# sourceMappingURL=citaController.js.map
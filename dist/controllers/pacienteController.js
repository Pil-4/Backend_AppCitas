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
exports.eliminarPaciente = exports.modificarPaciente = exports.obtenerPaciente = exports.listarPacientes = exports.insertarPaciente = void 0;
const pacienteService = __importStar(require("../services/pacienteService"));
const ResponseModel_1 = require("../models/ResponseModel");
const pacienteShema_1 = require("../schemas/pacienteShema");
const insertarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteController::insertarPaciente');
    try {
        const { error, value: validatedPaciente } = pacienteShema_1.insertarpacienteSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield pacienteService.insertarPaciente(validatedPaciente);
        res.status(201).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error('Error al insertar paciente:', error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error("Error interno del servidor"));
    }
});
exports.insertarPaciente = insertarPaciente;
const listarPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteController::listarPacientes');
    try {
        const paciente = yield pacienteService.listarPacientes();
        res.status(200).json(ResponseModel_1.ResponseModel.success(paciente));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPacientes = listarPacientes;
const obtenerPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteController::obtenerPaciente');
    try {
        const { id } = req.params;
        const paciente = yield pacienteService.obtenerPaciente(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(paciente));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPaciente = obtenerPaciente;
const modificarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteController::modificarPaciente');
    try {
        const { id } = req.params;
        const { error, value: validatedPaciente } = pacienteShema_1.modificarpacienteSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield pacienteService.modificarPaciente(Number(id), validatedPaciente);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error('Error al modificar paciente:', error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error("Error interno del servidor"));
    }
});
exports.modificarPaciente = modificarPaciente;
const eliminarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteController::eliminarPaciente');
    try {
        const { id } = req.params;
        const response = yield pacienteService.eliminarPaciente(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPaciente = eliminarPaciente;
//# sourceMappingURL=pacienteController.js.map
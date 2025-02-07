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
exports.eliminarMedico = exports.modificarMedico = exports.obtenerMedico = exports.listarMedicos = exports.insertarMedico = void 0;
const medicoService = __importStar(require("../services/medicoService"));
const ResponseModel_1 = require("../models/ResponseModel");
const medicoSchema_1 = require("../schemas/medicoSchema");
const insertarMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoController::insertarMedico');
    try {
        const { error, value: validatedMedico } = medicoSchema_1.insertarMedicoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield medicoService.insertarMedico(validatedMedico);
        res.status(201).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarMedico = insertarMedico;
const listarMedicos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoController::listarMedicos');
    try {
        const medico = yield medicoService.listarMedicos();
        res.status(200).json(ResponseModel_1.ResponseModel.success(medico));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarMedicos = listarMedicos;
const obtenerMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoController::obtenerMedico');
    try {
        const { id } = req.params;
        const medico = yield medicoService.obtenerMedico(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(medico));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerMedico = obtenerMedico;
const modificarMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoController::modificarMedico');
    try {
        const { id } = req.params;
        const { error, value: validatedMedico } = medicoSchema_1.modificarMedicoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield medicoService.modificarMedico(Number(id), validatedMedico);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error('Error al modificar médico:', error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error("Error interno del servidor"));
    }
});
exports.modificarMedico = modificarMedico;
const eliminarMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoController::eliminarMedico');
    try {
        const { id } = req.params;
        const response = yield medicoService.eliminarMedico(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarMedico = eliminarMedico;
//# sourceMappingURL=medicoController.js.map
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
exports.eliminarHorario = exports.modificarHorario = exports.obtenerHorario = exports.listarHorarios = exports.insertarHorario = void 0;
const horarioService = __importStar(require("../services/horarioService"));
const ResponseModel_1 = require("../models/ResponseModel");
const horarioSchema_1 = require("../schemas/horarioSchema");
const insertarHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horarioController::insertarHorario');
    try {
        const { error, value: validatedHorario } = horarioSchema_1.insertarHorarioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield horarioService.insertarHorario(validatedHorario);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarHorario = insertarHorario;
const listarHorarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horarioController::listarHorarios');
    try {
        const horario = yield horarioService.listarHorarios();
        res.status(200).json(ResponseModel_1.ResponseModel.success(horario));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarHorarios = listarHorarios;
const obtenerHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horarioController::obtenerHorario');
    try {
        const { id } = req.params;
        const horario = yield horarioService.obtenerHorario(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(horario));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerHorario = obtenerHorario;
const modificarHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horarioController::modificarHorario');
    try {
        const { id } = req.params;
        const { error, value: validatedHorario } = horarioSchema_1.modificarHorarioSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield horarioService.modificarHorario(Number(id), validatedHorario);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarHorario = modificarHorario;
const eliminarHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horarioController::eliminarHorario');
    try {
        const { id } = req.params;
        const response = yield horarioService.eliminarHorario(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarHorario = eliminarHorario;
//# sourceMappingURL=horarioController.js.map
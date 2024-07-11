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
exports.eliminarPerfil = exports.modificarPerfil = exports.obtenerPerfil = exports.listarPerfils = exports.insertarPerfil = void 0;
const perfilService = __importStar(require("../services/perfilService"));
const ResponseModel_1 = require("../models/ResponseModel");
const perfilSchema_1 = require("../schemas/perfilSchema");
const insertarPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilController::insertarPerfil');
    try {
        const { error, value: validatedPerfil } = perfilSchema_1.insertarPerfilSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield perfilService.insertarPerfil(validatedPerfil);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarPerfil = insertarPerfil;
const listarPerfils = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilController::listarPerfils');
    try {
        const perfil = yield perfilService.listarPerfils();
        res.status(200).json(ResponseModel_1.ResponseModel.success(perfil));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPerfils = listarPerfils;
const obtenerPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilController::obtenerPerfil');
    try {
        const { id } = req.params;
        const perfil = yield perfilService.obtenerPerfil(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(perfil));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPerfil = obtenerPerfil;
const modificarPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilController::modificarPerfil');
    try {
        const { id } = req.params;
        const { error, value: validatedPerfil } = perfilSchema_1.modificarPerfilSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield perfilService.modificarPerfil(Number(id), validatedPerfil);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarPerfil = modificarPerfil;
const eliminarPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilController::eliminarPerfil');
    try {
        const { id } = req.params;
        const response = yield perfilService.eliminarPerfil(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPerfil = eliminarPerfil;
//# sourceMappingURL=perfilController.js.map
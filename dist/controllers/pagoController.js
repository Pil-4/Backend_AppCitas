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
exports.eliminarPago = exports.modificarPago = exports.obtenerPago = exports.listarPagos = exports.insertarPago = void 0;
const pagoService = __importStar(require("../services/pagoService"));
const ResponseModel_1 = require("../models/ResponseModel");
const pagoSchema_1 = require("../schemas/pagoSchema");
const insertarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoController::insertarPago');
    try {
        const { error, value: validatedPago } = pagoSchema_1.insertarPagoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield pagoService.insertarPago(validatedPago);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarPago = insertarPago;
const listarPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoController::listarPagos');
    try {
        const pago = yield pagoService.listarPagos();
        res.status(200).json(ResponseModel_1.ResponseModel.success(pago));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPagos = listarPagos;
const obtenerPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoController::obtenerPago');
    try {
        const { id } = req.params;
        const pago = yield pagoService.obtenerPago(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(pago));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPago = obtenerPago;
const modificarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoController::modificarPago');
    try {
        const { id } = req.params;
        const { error, value: validatedPago } = pagoSchema_1.modificarPagoSchema.validate(req.body);
        if (error) {
            return res.status(400).json(ResponseModel_1.ResponseModel.error(error.details[0].message));
        }
        const response = yield pagoService.modificarPago(Number(id), validatedPago);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarPago = modificarPago;
const eliminarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoController::eliminarPago');
    try {
        const { id } = req.params;
        const response = yield pagoService.eliminarPago(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPago = eliminarPago;
//# sourceMappingURL=pagoController.js.map
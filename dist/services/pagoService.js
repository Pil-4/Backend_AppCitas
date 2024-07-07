"use strict";
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
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const pagoMapper_1 = require("../mappers/pagoMapper");
const prisma = new client_1.PrismaClient();
const insertarPago = (pago) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.pago.create({
        data: (0, pagoMapper_1.toPrismaPago)(pago)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarPago = insertarPago;
const listarPagos = () => __awaiter(void 0, void 0, void 0, function* () {
    const pago = yield prisma.pago.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return pago.map((pago) => (0, pagoMapper_1.fromPrismaPago)(pago));
});
exports.listarPagos = listarPagos;
const obtenerPago = (idpago) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoService::obtenerPago', idpago);
    const pago = yield prisma.pago.findUnique({
        where: {
            id_pago: idpago,
            estado_auditoria: '1'
        }
    });
    return (0, pagoMapper_1.fromPrismaPago)(pago);
});
exports.obtenerPago = obtenerPago;
const modificarPago = (idPago, pago) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoService::modificarPago', idPago, pago);
    yield prisma.pago.update({
        data: (0, pagoMapper_1.toPrismaPago)(pago),
        where: {
            id_pago: idPago
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarPago = modificarPago;
const eliminarPago = (idPago) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pagoService::eliminarPago', idPago);
    yield prisma.pago.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_pago: idPago
        }
    });
    // await prisma.pago.delete({
    //     where: {
    //         id_pago: idPago
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarPago = eliminarPago;
//# sourceMappingURL=pagoService.js.map
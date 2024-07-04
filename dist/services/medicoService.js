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
exports.eliminarMedico = exports.modificarMedico = exports.obtenerMedico = exports.listarMedicos = exports.insertarMedico = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const medicoMapper_1 = require("../mappers/medicoMapper");
const prisma = new client_1.PrismaClient();
const insertarMedico = (medico) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.medico.create({
        data: (0, medicoMapper_1.toPrismaMedico)(medico)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarMedico = insertarMedico;
const listarMedicos = () => __awaiter(void 0, void 0, void 0, function* () {
    const medico = yield prisma.medico.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return medico.map((medico) => (0, medicoMapper_1.fromPrismaMedico)(medico));
});
exports.listarMedicos = listarMedicos;
const obtenerMedico = (idMedico) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::obtenerMedico', idMedico);
    const medico = yield prisma.medico.findUnique({
        where: {
            id_medico: idMedico,
            estado_auditoria: '1'
        }
    });
    return (0, medicoMapper_1.fromPrismaMedico)(medico);
});
exports.obtenerMedico = obtenerMedico;
const modificarMedico = (idMedico, medico) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::modificarmedico', idMedico, medico);
    yield prisma.medico.update({
        data: (0, medicoMapper_1.toPrismaMedico)(medico),
        where: {
            id_medico: idMedico
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarMedico = modificarMedico;
const eliminarMedico = (idMedico) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::eliminarMedico', idMedico);
    yield prisma.medico.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_medico: idMedico
        }
    });
    // await prisma.medico.delete({
    //     where: {
    //         id_medico: idMedico
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarMedico = eliminarMedico;
//# sourceMappingURL=medicoService.js.map
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
exports.eliminarCita = exports.modificarCita = exports.obtenerCita = exports.listarCitas = exports.insertarCita = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const citaMapper_1 = require("../mappers/citaMapper");
const prisma = new client_1.PrismaClient();
const insertarCita = (cita) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.cita.create({
        data: (0, citaMapper_1.toPrismaCita)(cita)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarCita = insertarCita;
const listarCitas = () => __awaiter(void 0, void 0, void 0, function* () {
    const cita = yield prisma.cita.findMany({
        include: {
            paciente: true,
            servicio: true,
            medico: true
        }
    });
    return cita.map((cita) => (0, citaMapper_1.fromPrismaCita)(cita, cita.paciente, cita.servicio, cita.medico, cita.categoria));
});
exports.listarCitas = listarCitas;
const obtenerCita = (idCita) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('citaService::obtenerCita',idCita);
    // const cita: cita =  await prisma.cita.findUnique({
    //     where: {
    //         id_cita: idCita,
    //         estado_auditoria:'1'
    //     }
    // });
    // return fromPrismaCita(cita);
    const cita = yield prisma.cita.findUnique({
        where: {
            id_cita: idCita
        },
        include: {
            paciente: true,
            servicio: true,
            medico: true
        }
    });
    return (0, citaMapper_1.fromPrismaCita)(cita, cita.paciente, cita.servicio, cita.medico, cita.categoria);
});
exports.obtenerCita = obtenerCita;
const modificarCita = (idCita, cita) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaService::modificarcita', idCita, cita);
    yield prisma.cita.update({
        data: (0, citaMapper_1.toPrismaCita)(cita),
        where: {
            id_cita: idCita
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarCita = modificarCita;
const eliminarCita = (idCita) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citaService::eliminarCita', idCita);
    yield prisma.cita.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_cita: idCita
        }
    });
    // await prisma.cita.delete({
    //     where: {
    //         id_cita: idcita
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarCita = eliminarCita;
//# sourceMappingURL=citaService.js.map
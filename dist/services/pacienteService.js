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
exports.eliminarPaciente = exports.modificarPaciente = exports.obtenerPaciente = exports.listarPacientes = exports.insertarPaciente = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const pacienteMapper_1 = require("../mappers/pacienteMapper");
const prisma = new client_1.PrismaClient();
const insertarPaciente = (paciente) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.paciente.create({
        data: (0, pacienteMapper_1.toPrismaPaciente)(paciente)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarPaciente = insertarPaciente;
const listarPacientes = () => __awaiter(void 0, void 0, void 0, function* () {
    const paciente = yield prisma.paciente.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return paciente.map((paciente) => (0, pacienteMapper_1.fromPrismaPaciente)(paciente));
});
exports.listarPacientes = listarPacientes;
const obtenerPaciente = (idPaciente) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteService::obtenerPaciente', idPaciente);
    const paciente = yield prisma.paciente.findUnique({
        where: {
            id_paciente: idPaciente,
            estado_auditoria: '1'
        }
    });
    return (0, pacienteMapper_1.fromPrismaPaciente)(paciente);
});
exports.obtenerPaciente = obtenerPaciente;
const modificarPaciente = (idPaciente, paciente) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteService::modificarPaciente', idPaciente, paciente);
    yield prisma.paciente.update({
        data: (0, pacienteMapper_1.toPrismaPaciente)(paciente),
        where: {
            id_paciente: idPaciente
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarPaciente = modificarPaciente;
const eliminarPaciente = (idPaciente) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacienteService::eliminarPaciente', idPaciente);
    yield prisma.paciente.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_paciente: idPaciente
        }
    });
    // await prisma.paciente.delete({
    //     where: {
    //         id_paciente: idPaciente
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarPaciente = eliminarPaciente;
//# sourceMappingURL=pacienteService.js.map
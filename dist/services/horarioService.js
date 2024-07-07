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
exports.eliminarHorario = exports.modificarHorario = exports.obtenerHorario = exports.listarHorarios = exports.insertarHorario = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const horarioMapper_1 = require("../mappers/horarioMapper");
const prisma = new client_1.PrismaClient();
const insertarHorario = (horario) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.horario.create({
        data: (0, horarioMapper_1.toPrismaHorario)(horario)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarHorario = insertarHorario;
const listarHorarios = () => __awaiter(void 0, void 0, void 0, function* () {
    const horario = yield prisma.horario.findMany({
        include: {
            medico: true
        }
    });
    return horario.map((horario) => (0, horarioMapper_1.fromPrismaHorario)(horario, horario.medico));
});
exports.listarHorarios = listarHorarios;
const obtenerHorario = (idHorario) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('horarioService::obtenerHorario',idHorario);
    // const horario: horario =  await prisma.horario.findUnique({
    //     where: {
    //         id_horario: idHorario,
    //         estado_auditoria:'1'
    //     }
    // });
    // return fromPrismaHorario(horario);
    const horario = yield prisma.horario.findUnique({
        where: {
            id_horario: idHorario
        },
        include: {
            medico: true
        }
    });
    return (0, horarioMapper_1.fromPrismaHorario)(horario, horario.medico);
});
exports.obtenerHorario = obtenerHorario;
const modificarHorario = (idHorario, horario) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.horario.update({
        data: (0, horarioMapper_1.toPrismaHorario)(horario),
        where: {
            id_horario: idHorario
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarHorario = modificarHorario;
const eliminarHorario = (idHorario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horarioService::eliminarHorario', idHorario);
    yield prisma.horario.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_horario: idHorario
        }
    });
    // await prisma.horario.delete({
    //     where: {
    //         id_horario: idhorario
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarHorario = eliminarHorario;
//# sourceMappingURL=horarioService.js.map
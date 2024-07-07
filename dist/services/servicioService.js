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
exports.eliminarServicio = exports.modificarServicio = exports.obtenerServicio = exports.listarServicios = exports.insertarServicio = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const servicioMapper_1 = require("../mappers/servicioMapper");
const prisma = new client_1.PrismaClient();
const insertarServicio = (servicio) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.servicio.create({
        data: (0, servicioMapper_1.toPrismaServicio)(servicio)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarServicio = insertarServicio;
const listarServicios = () => __awaiter(void 0, void 0, void 0, function* () {
    const servicio = yield prisma.servicio.findMany({
        include: {
            categoria: true
        }
    });
    return servicio.map((servicio) => (0, servicioMapper_1.fromPrismaServicio)(servicio, servicio.categoria));
});
exports.listarServicios = listarServicios;
const obtenerServicio = (idServicio) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('servicioService::obtenerServicio',idServicio);
    // const servicio: servicio =  await prisma.servicio.findUnique({
    //     where: {
    //         id_servicio: idServicio,
    //         estado_auditoria:'1'
    //     }
    // });
    // return fromPrismaServicio(servicio);
    const servicio = yield prisma.servicio.findUnique({
        where: {
            id_servicio: idServicio
        },
        include: {
            categoria: true
        }
    });
    return (0, servicioMapper_1.fromPrismaServicio)(servicio, servicio.categoria);
});
exports.obtenerServicio = obtenerServicio;
const modificarServicio = (idServicio, servicio) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioService::modificarServicio', idServicio, servicio);
    yield prisma.servicio.update({
        data: (0, servicioMapper_1.toPrismaServicio)(servicio),
        where: {
            id_servicio: idServicio
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarServicio = modificarServicio;
const eliminarServicio = (idServicio) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('servicioService::eliminarServicio', idServicio);
    yield prisma.servicio.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_servicio: idServicio
        }
    });
    // await prisma.servicio.delete({
    //     where: {
    //         id_servicio: idservicio
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarServicio = eliminarServicio;
//# sourceMappingURL=servicioService.js.map
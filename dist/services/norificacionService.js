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
exports.eliminarNotificacion = exports.modificarNotificacion = exports.obtenerNotificacion = exports.listarNotificacions = exports.insertarNotificacion = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const notificacionMapper_1 = require("../mappers/notificacionMapper");
const prisma = new client_1.PrismaClient();
const insertarNotificacion = (notificacion) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.notificacion.create({
        data: (0, notificacionMapper_1.toPrismaNotificacion)(notificacion)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarNotificacion = insertarNotificacion;
const listarNotificacions = () => __awaiter(void 0, void 0, void 0, function* () {
    const notificacion = yield prisma.notificacion.findMany({
        include: {
            usuario: true
        }
    });
    return notificacion.map((notificacion) => (0, notificacionMapper_1.fromPrismaNotificacion)(notificacion, notificacion.usuario, notificacion.perfil));
});
exports.listarNotificacions = listarNotificacions;
const obtenerNotificacion = (idNotificacion) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('notificacionService::obtenernotificacion',idnotificacion);
    // const notificacion: notificacion =  await prisma.notificacion.findUnique({
    //     where: {
    //         id_notificacion: idnotificacion,
    //         estado_auditoria:'1'
    //     }
    // });
    // return fromPrismanotificacion(notificacion);
    const notificacion = yield prisma.notificacion.findUnique({
        where: {
            id_notificacion: idNotificacion
        },
        include: {
            usuario: true
        }
    });
    return (0, notificacionMapper_1.fromPrismaNotificacion)(notificacion, notificacion.usuario, notificacion.perfil);
});
exports.obtenerNotificacion = obtenerNotificacion;
const modificarNotificacion = (idNotificacion, notificacion) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionService::modificarNotificacion', idNotificacion, notificacion);
    yield prisma.notificacion.update({
        data: (0, notificacionMapper_1.toPrismaNotificacion)(notificacion),
        where: {
            id_notificacion: idNotificacion
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarNotificacion = modificarNotificacion;
const eliminarNotificacion = (idNotificacion) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('notificacionService::eliminarNotificacion', idNotificacion);
    yield prisma.notificacion.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_notificacion: idNotificacion
        }
    });
    // await prisma.notificacion.delete({
    //     where: {
    //         id_notificacion: idnotificacion
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarNotificacion = eliminarNotificacion;
//# sourceMappingURL=norificacionService.js.map
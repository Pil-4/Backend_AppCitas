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
exports.eliminarPerfil = exports.modificarPerfil = exports.obtenerPerfil = exports.listarPerfils = exports.insertarPerfil = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const perfilMapper_1 = require("../mappers/perfilMapper");
const prisma = new client_1.PrismaClient();
const insertarPerfil = (perfil) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.perfil.create({
        data: (0, perfilMapper_1.toPrismaPerfil)(perfil)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarPerfil = insertarPerfil;
const listarPerfils = () => __awaiter(void 0, void 0, void 0, function* () {
    const perfil = yield prisma.perfil.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return perfil.map((perfil) => (0, perfilMapper_1.fromPrismaPerfil)(perfil));
});
exports.listarPerfils = listarPerfils;
const obtenerPerfil = (idperfil) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilService::obtenerPerfil', idperfil);
    const perfil = yield prisma.perfil.findUnique({
        where: {
            id_perfil: idperfil,
            estado_auditoria: '1'
        }
    });
    return (0, perfilMapper_1.fromPrismaPerfil)(perfil);
});
exports.obtenerPerfil = obtenerPerfil;
const modificarPerfil = (idPerfil, perfil) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilService::modificarperfil', idPerfil, perfil);
    yield prisma.perfil.update({
        data: (0, perfilMapper_1.toPrismaPerfil)(perfil),
        where: {
            id_perfil: idPerfil
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarPerfil = modificarPerfil;
const eliminarPerfil = (idPerfil) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('perfilService::eliminarperfil', idPerfil);
    yield prisma.perfil.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_perfil: idPerfil
        }
    });
    // await prisma.perfil.delete({
    //     where: {
    //         id_perfil: idperfil
    //     }
    // });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarPerfil = eliminarPerfil;
//# sourceMappingURL=perfilService.js.map
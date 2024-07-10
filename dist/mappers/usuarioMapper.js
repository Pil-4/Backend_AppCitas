"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaUsuario = exports.fromPrismaUsuario = void 0;
const perfilMapper_1 = require("./perfilMapper");
const fromPrismaUsuario = (usuario, perfil) => ({
    idUsuario: usuario.id_usuario,
    perfil: (0, perfilMapper_1.fromPrismaPerfil)(perfil),
    nombres: usuario.nombres,
    nombreUsuario: usuario.nombre_usuario,
    apellidoPaterno: usuario.apellido_paterno,
    apellidoMaterno: usuario.apellido_materno,
    contrasena: usuario.contrasena
});
exports.fromPrismaUsuario = fromPrismaUsuario;
const toPrismaUsuario = (usuario) => ({
    id_perfil: usuario.perfil.idPerfil,
    nombres: usuario.nombres,
    nombre_usuario: usuario.nombreUsuario,
    apellido_paterno: usuario.apellidoPaterno,
    apellido_materno: usuario.apellidoMaterno,
    contrasena: usuario.contrasena
});
exports.toPrismaUsuario = toPrismaUsuario;
//# sourceMappingURL=usuarioMapper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismanotificacion = exports.fromPrismanotificacion = void 0;
const usuarioMapper_1 = require("./usuarioMapper");
const fromPrismanotificacion = (notificacion, usuario, perfil) => ({
    idNotificacion: notificacion.id_notificacion,
    usuario: (0, usuarioMapper_1.fromPrismaUsuario)(usuario, perfil),
    mensaje: notificacion.mensaje,
    fechaNotificacion: notificacion.fecha_notificacion
});
exports.fromPrismanotificacion = fromPrismanotificacion;
const toPrismanotificacion = (notificacion) => ({
    id_usuario: notificacion.usuario.idUsuario,
    mensaje: notificacion.mensaje,
    fecha_notificacion: notificacion.fechaNotificacion
});
exports.toPrismanotificacion = toPrismanotificacion;
//# sourceMappingURL=notificacionMapper.js.map
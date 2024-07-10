"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaNotificacion = exports.fromPrismaNotificacion = void 0;
const usuarioMapper_1 = require("./usuarioMapper");
const fromPrismaNotificacion = (notificacion, usuario, perfil) => ({
    idNotificacion: notificacion.id_notificacion,
    usuario: (0, usuarioMapper_1.fromPrismaUsuario)(usuario, perfil),
    mensaje: notificacion.mensaje,
    fechaNotificacion: notificacion.fecha_notificacion
});
exports.fromPrismaNotificacion = fromPrismaNotificacion;
const toPrismaNotificacion = (notificacion) => ({
    id_usuario: notificacion.usuario.idUsuario,
    mensaje: notificacion.mensaje,
    fecha_notificacion: notificacion.fechaNotificacion
});
exports.toPrismaNotificacion = toPrismaNotificacion;
//# sourceMappingURL=notificacionMapper.js.map
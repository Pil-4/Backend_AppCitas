"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaServicio = exports.fromPrismaServicio = void 0;
const fromPrismaServicio = (servicio) => ({
    idServicio: servicio.id_servicio,
    nombreServicio: servicio.nombre_servicio,
    categoria: servicio.categoria,
    precio: servicio.precio
});
exports.fromPrismaServicio = fromPrismaServicio;
const toPrismaServicio = (servicio) => ({
    nombre_servicio: servicio.nombreServicio,
    categoria: servicio.categoria,
    precio: servicio.precio
});
exports.toPrismaServicio = toPrismaServicio;
//# sourceMappingURL=servicioMapper.js.map
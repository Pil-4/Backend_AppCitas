"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaServicio = exports.fromPrismaServicio = void 0;
const fromPrismaServicio = (servicio) => ({
    idServicio: servicio.id_servicio,
    idCategoria: servicio.id_categoria,
    nombreServicio: servicio.nombre_servicio,
    precio: servicio.precio
});
exports.fromPrismaServicio = fromPrismaServicio;
const toPrismaServicio = (servicio) => ({
    nombre_servicio: servicio.nombreServicio,
    id_categoria: servicio.categoria,
    precio: servicio.precio
});
exports.toPrismaServicio = toPrismaServicio;
//# sourceMappingURL=servicioMapper.js.map
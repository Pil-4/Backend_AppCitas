"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaServicio = exports.fromPrismaServicio = void 0;
const categoriaMapper_1 = require("./categoriaMapper");
const fromPrismaServicio = (servicio, categoria) => ({
    idServicio: servicio.id_servicio,
    categoria: (0, categoriaMapper_1.fromPrismaCategoria)(categoria),
    nombreServicio: servicio.nombre_servicio,
    precio: servicio.precio
});
exports.fromPrismaServicio = fromPrismaServicio;
const toPrismaServicio = (servicio) => ({
    id_categoria: servicio.categoria.idCategoria,
    nombre_servicio: servicio.nombreServicio,
    precio: servicio.precio
});
exports.toPrismaServicio = toPrismaServicio;
//# sourceMappingURL=servicioMapper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaCategoria = exports.fromPrismaCategoria = void 0;
const fromPrismaCategoria = (categoria) => ({
    idCategoria: categoria.id_categoria,
    nombreCategoria: categoria.nombre_categoria
});
exports.fromPrismaCategoria = fromPrismaCategoria;
const toPrismaCategoria = (categoria) => ({
    nombre_categoria: categoria.nombreCategoria
});
exports.toPrismaCategoria = toPrismaCategoria;
//# sourceMappingURL=categoriaMapper.js.map
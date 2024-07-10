"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPerfil = exports.fromPrismaPerfil = void 0;
const fromPrismaPerfil = (perfil) => ({
    idPerfil: perfil.id_perfil,
    descripcion: perfil.descripcion
});
exports.fromPrismaPerfil = fromPrismaPerfil;
const toPrismaPerfil = (perfil) => ({
    descripcion: perfil.descripcion
});
exports.toPrismaPerfil = toPrismaPerfil;
//# sourceMappingURL=perfilMapper.js.map
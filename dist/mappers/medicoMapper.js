"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaMedico = exports.fromPrismaMedico = void 0;
const fromPrismaMedico = (medico) => ({
    idMedico: medico.id_medico,
    dni: medico.dni,
    nombres: medico.nombres,
    apellidoPaterno: medico.apellido_paterno,
    apellidoMaterno: medico.apellido_materno,
    sexo: medico.sexo,
    especialidad: medico.especialidad
});
exports.fromPrismaMedico = fromPrismaMedico;
const toPrismaMedico = (medico) => ({
    dni: medico.dni,
    nombres: medico.nombres,
    apellido_paterno: medico.apellidoPaterno,
    apellido_materno: medico.apellidoMaterno,
    sexo: medico.sexo,
    especialidad: medico.especialidad
});
exports.toPrismaMedico = toPrismaMedico;
//# sourceMappingURL=medicoMapper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPaciente = exports.fromPrismaPaciente = void 0;
const fromPrismaPaciente = (paciente) => ({
    idPaciente: paciente.id_paciente,
    tipoDocumento: paciente.tipo_documento,
    numeroDocumento: paciente.numero_documento,
    nombres: paciente.nombres,
    apellidoPaterno: paciente.apellido_paterno,
    apellidoMaterno: paciente.apellido_materno,
    correo: paciente.correo,
    celular: paciente.celular,
    fechaNacimiento: paciente.fecha_nacimiento,
    sexo: paciente.sexo,
    direccion: paciente.direccion
});
exports.fromPrismaPaciente = fromPrismaPaciente;
const toPrismaPaciente = (paciente) => ({
    tipo_documento: paciente.tipoDocumento,
    numero_documento: paciente.numeroDocumento,
    nombres: paciente.nombres,
    apellido_paterno: paciente.apellidoPaterno,
    apellido_materno: paciente.apellidoMaterno,
    correo: paciente.correo,
    celular: paciente.celular,
    fecha_nacimiento: paciente.fechaNacimiento,
    sexo: paciente.sexo,
    direccion: paciente.direccion
});
exports.toPrismaPaciente = toPrismaPaciente;
//# sourceMappingURL=pacienteMapper.js.map
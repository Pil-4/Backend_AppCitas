"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPaciente = exports.fromPrismaPaciente = void 0;
const fromPrismaPaciente = (paciente) => ({
    idPaciente: paciente.id_paciente,
    dni: paciente.dni,
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
    dni: paciente.dni,
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
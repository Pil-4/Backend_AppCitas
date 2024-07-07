"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaCita = exports.fromPrismaCita = void 0;
const pacienteMapper_1 = require("./pacienteMapper");
const servicioMapper_1 = require("./servicioMapper");
const medicoMapper_1 = require("./medicoMapper");
const fromPrismaCita = (cita, paciente, servicio, categoria, medico) => ({
    idCita: cita.id_cita,
    paciente: (0, pacienteMapper_1.fromPrismaPaciente)(paciente),
    servicio: (0, servicioMapper_1.fromPrismaServicio)(servicio, categoria),
    medico: (0, medicoMapper_1.fromPrismaMedico)(medico),
    fechaCita: cita.fecha_cita,
    horaCita: cita.hora_cita,
    estadoCita: cita.estado_cita,
    notasAdicionales: cita.notas_adicionales
});
exports.fromPrismaCita = fromPrismaCita;
const toPrismaCita = (cita) => ({
    id_paciente: cita.paciente.idPaciente,
    id_servicio: cita.servicio.idServicio,
    id_medico: cita.medico.idMedico,
    fecha_cita: cita.fechaCita,
    hora_cita: cita.horaCita,
    estado_cita: cita.estadoCita,
    notas_adicionales: cita.notasAdicionales
});
exports.toPrismaCita = toPrismaCita;
//# sourceMappingURL=citaMapper.js.map
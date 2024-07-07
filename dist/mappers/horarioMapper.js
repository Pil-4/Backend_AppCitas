"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaHorario = exports.fromPrismaHorario = void 0;
const medicoMapper_1 = require("./medicoMapper");
const fromPrismaHorario = (horario, medico) => ({
    idhorario: horario.id_horario,
    medico: (0, medicoMapper_1.fromPrismaMedico)(medico),
    diaSemana: horario.dia_semana,
    horaInicio: horario.hora_inicio,
    horaFin: horario.hora_fin
});
exports.fromPrismaHorario = fromPrismaHorario;
const toPrismaHorario = (horario) => ({
    id_medico: horario.medico.idMedico,
    dia_semana: horario.diaSemana,
    hora_inicio: horario.horaInicio,
    hora_fin: horario.horaFin
});
exports.toPrismaHorario = toPrismaHorario;
//# sourceMappingURL=horarioMapper.js.map
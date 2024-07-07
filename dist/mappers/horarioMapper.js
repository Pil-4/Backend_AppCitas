"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaHorario = exports.fromPrismaHorario = void 0;
const fromPrismaHorario = (horario) => ({
    idhorario: horario.id_horario,
    medico: horario.id_medico,
    diaSemana: horario.dia_semana,
    horaInicio: horario.hora_inicio,
    horaFin: horario.hora_fin
});
exports.fromPrismaHorario = fromPrismaHorario;
const toPrismaHorario = (horario) => ({
    id_medico: horario.medico,
    dia_semana: horario.diaSemana,
    hora_inicio: horario.horaInicio,
    hora_fin: horario.horaFin
});
exports.toPrismaHorario = toPrismaHorario;
//# sourceMappingURL=horarioMapper.js.map
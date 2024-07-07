import { horario } from "@prisma/client"
import { IHorario } from "../models/Horario"

export const fromPrismaHorario = (horario: horario): any=> ({
    idhorario: horario.id_horario,
    medico:horario.id_medico,
    diaSemana:horario.dia_semana,
    horaInicio:horario.hora_inicio,
    horaFin:horario.hora_fin
});


export const toPrismaHorario = (horario: IHorario): any => ({
    id_medico:horario.medico,
    dia_semana:horario.diaSemana,
    hora_inicio:horario.horaInicio,
    hora_fin:horario.horaFin
})
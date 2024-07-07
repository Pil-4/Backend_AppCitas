import { horario, medico } from "@prisma/client"
import { IHorario } from "../models/Horario"
import { fromPrismaMedico } from "./medicoMapper";

export const fromPrismaHorario = (horario: horario, medico: medico): any=> ({
    idhorario: horario.id_horario,
    medico:fromPrismaMedico(medico),
    diaSemana:horario.dia_semana,
    horaInicio:horario.hora_inicio,
    horaFin:horario.hora_fin
});


export const toPrismaHorario = (horario: IHorario): any => ({
    id_medico:horario.medico.idMedico,
    dia_semana:horario.diaSemana,
    hora_inicio:horario.horaInicio,
    hora_fin:horario.horaFin
})
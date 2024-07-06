import { cita } from "@prisma/client"
import { ICita } from "../models/Cita"

export const fromPrismaCita = (cita: cita): any=> ({
    idCita: cita.id_cita,
    paciente:cita.id_paciente,
    servicio:cita.id_servicio,
    medico:cita.id_medico,
    fechaCita:cita.fecha_cita,
    horaCita:cita.hora_cita,
    estadoCita:cita.estado_cita,
    notasAdicionales:cita.notas_adicionales
});


export const toPrismaCita = (cita: ICita): any => ({
    id_paciente:cita.paciente,
    id_servicio:cita.servicio,
    id_medico:cita.medico,
    fecha_cita:cita.fechaCita,
    hora_cita:cita.horaCita,
    estado_cita:cita.estadoCita,
    notas_adicionales:cita.notasAdicionales
})
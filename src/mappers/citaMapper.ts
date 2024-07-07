import { categoria, cita, medico, paciente, servicio } from "@prisma/client";
import { ICita } from "../models/Cita";
import { fromPrismaPaciente } from "./pacienteMapper";
import { fromPrismaServicio } from "./servicioMapper";
import { fromPrismaMedico } from "./medicoMapper";

export const fromPrismaCita = (cita: cita, paciente: paciente, servicio: servicio, categoria: categoria, medico: medico): any => ({
    idCita: cita.id_cita,
    paciente: fromPrismaPaciente(paciente),
    servicio: fromPrismaServicio(servicio, categoria), 
    medico: fromPrismaMedico(medico),
    fechaCita: cita.fecha_cita,
    horaCita: cita.hora_cita,
    estadoCita: cita.estado_cita,
    notasAdicionales: cita.notas_adicionales
});

export const toPrismaCita = (cita: ICita): any => ({
    id_paciente: cita.paciente.idPaciente, 
    id_servicio: cita.servicio.idServicio, 
    id_medico: cita.medico.idMedico,
    fecha_cita: cita.fechaCita,
    hora_cita: cita.horaCita,
    estado_cita: cita.estadoCita,
    notas_adicionales: cita.notasAdicionales
});

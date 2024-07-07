import { paciente } from "@prisma/client"
import { IPaciente } from "../models/Paciente"

export const fromPrismaPaciente = (paciente: paciente): any=> ({
    idPaciente: paciente.id_paciente,
    dni: paciente.dni,
    nombres: paciente.nombres,
    apellidoPaterno: paciente.apellido_paterno,
    apellidoMaterno: paciente.apellido_materno,
    correo: paciente.correo,
    celular:paciente.celular,
    fechaNacimiento: paciente.fecha_nacimiento,
    sexo: paciente.sexo,
    direccion: paciente.direccion
});

export const toPrismaPaciente = (paciente: IPaciente): any => ({
    dni: paciente.dni,
    nombres: paciente.nombres,
    apellido_paterno: paciente.apellidoPaterno,
    apellido_materno: paciente.apellidoMaterno,
    correo: paciente.correo,
    celular:paciente.celular,
    fecha_nacimiento: paciente.fechaNacimiento,
    sexo: paciente.sexo,
    direccion: paciente.direccion
})  
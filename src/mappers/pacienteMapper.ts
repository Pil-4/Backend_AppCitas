import { paciente } from "@prisma/client"
import { IPaciente } from "../models/Paciente"

export const fromPrismaPaciente = (paciente: paciente): any=> ({
    idPaciente: paciente.id_paciente,
    tipoDocumento: paciente.tipo_documento,
    numeroDocumento: paciente.numero_documento,
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
    tipo_documento: paciente.tipoDocumento,
    numero_documento: paciente.numeroDocumento,
    nombres: paciente.nombres,
    apellido_paterno: paciente.apellidoPaterno,
    apellido_materno: paciente.apellidoMaterno,
    correo: paciente.correo,
    celular:paciente.celular,
    fecha_nacimiento: paciente.fechaNacimiento,
    sexo: paciente.sexo,
    direccion: paciente.direccion
})  
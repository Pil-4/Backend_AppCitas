import { medico } from "@prisma/client"
import { IMedico } from "../models/Medico"

export const fromPrismaMedico = (medico: medico): any=> ({
    idMedico: medico.id_medico,
    tipoDocumento: medico.tipo_documento,
    numeroDocumento: medico.numero_documento,
    nombres: medico.nombres,
    apellidoPaterno: medico.apellido_paterno,
    apellidoMaterno: medico.apellido_materno,
    sexo: medico.sexo,
    especialidad: medico.especialidad
});

export const toPrismaMedico = (medico: IMedico): any => ({
    tipo_documento: medico.tipoDocumento,
    numero_documento: medico.numeroDocumento,
    nombres: medico.nombres,
    apellido_paterno: medico.apellidoPaterno,
    apellido_materno: medico.apellidoMaterno,
    sexo: medico.sexo,
    especialidad: medico.especialidad
})
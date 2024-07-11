import { categoria, cita, medico, paciente, servicio, pago } from "@prisma/client"
import { IPago } from "../models/Pago"
import { fromPrismaCita } from "./citaMapper";

export const fromPrismaPago = (pago: pago, cita: cita,  paciente: paciente, servicio: servicio, categoria: categoria, medico: medico ): any=> ({
    idPago: pago.id_pago,
    cita: fromPrismaCita(cita, paciente, servicio, categoria, medico),
    nombres: pago.nombres,
    apellidoPaterno: pago.apellido_paterno,
    apellidoMaterno: pago.apellido_materno,
    tipoDocumento: pago.tipo_documento,
    numeroDocumento: pago.numero_documento,
    fechaPago: pago.fecha_pago,
    tipoDePago: pago.tipo_de_pago,
    subtotalPago: pago.subtotal_pago,
    igvPago: pago.igv_pago,
    totalPago: pago.total_pago
});


export const toPrismaPago = (pago: IPago): any => ({
    id_cita: pago.cita.idCita,
    nombres: pago.nombres,
    apellido_paterno: pago.apellidoPaterno,
    apellido_materno: pago.apellidoMaterno,
    tipo_documento: pago.tipoDocumento,
    numero_documento: pago.numeroDocumento,
    fecha_pago: pago.fechaPago,
    tipo_de_pago: pago.tipoDePago,
    subtotal_pago: pago.subtotalPago,
    igv_pago: pago.igvPago,
    total_pago: pago.totalPago
})
import { pago } from "@prisma/client"
import { IPago } from "../models/Pago"

export const fromPrismaPago = (pago: pago): any=> ({
    idPago: pago.id_pago,
    cita: pago.id_cita,
    nombres: pago.nombres,
    apellidoPaterno: pago.apellido_paterno,
    apellidoMaterno: pago.apellido_materno,
    dni: pago.dni,
    fechaPago: pago.fecha_pago,
    tipoDePago: pago.tipo_de_pago,
    subtotalPago: pago.subtotal_pago,
    igvPago: pago.igv_pago,
    totalPago: pago.total_pago
});


export const toPrismaPago = (pago: IPago): any => ({
    id_cita: pago.cita,
    nombres: pago.nombres,
    apellido_paterno: pago.apellidoPaterno,
    apellido_materno: pago.apellidoMaterno,
    dni: pago.dni,
    fecha_pago: pago.fechaPago,
    tipo_de_Pago: pago.tipoDePago,
    subtotal_pago: pago.subtotalPago,
    igv_pago: pago.igvPago,
    total_pago: pago.totalPago
})
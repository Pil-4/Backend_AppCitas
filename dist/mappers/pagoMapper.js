"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPago = exports.fromPrismaPago = void 0;
const citaMapper_1 = require("./citaMapper");
const fromPrismaPago = (pago, cita, paciente, servicio, categoria, medico) => ({
    idPago: pago.id_pago,
    cita: (0, citaMapper_1.fromPrismaCita)(cita, paciente, servicio, categoria, medico),
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
exports.fromPrismaPago = fromPrismaPago;
const toPrismaPago = (pago) => ({
    id_cita: pago.cita.idCita,
    nombres: pago.nombres,
    apellido_paterno: pago.apellidoPaterno,
    apellido_materno: pago.apellidoMaterno,
    dni: pago.dni,
    fecha_pago: pago.fechaPago,
    tipo_de_Pago: pago.tipoDePago,
    subtotal_pago: pago.subtotalPago,
    igv_pago: pago.igvPago,
    total_pago: pago.totalPago
});
exports.toPrismaPago = toPrismaPago;
//# sourceMappingURL=pagoMapper.js.map
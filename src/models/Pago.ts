import { ICita } from "./Cita";

export interface IPago {
    idPago: number;
    cita: ICita;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    dni: string;
    fechaPago:Date;
    tipoDePago: string;
    subtotalPago: number;
    igvPago:number;
    totalPago:number;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
import { IMedico } from "./Medico";

export interface IHorario {
    idHorario: number;
    medico:IMedico;
    diaSemana:string;
    horaInicio:string;
    horaFin:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
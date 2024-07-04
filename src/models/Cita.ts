import { IMedico } from "./Medico";
import { IPaciente } from "./Paciente";
import { IServicio } from "./Servicio";

export interface ICita {
    idCita:number;
    paciente:IPaciente;
    servicio:IServicio;
    medico:IMedico;
    fechaCita:Date;
    horaCita:string;
    estadoCita:string;
    notasAdicionales:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
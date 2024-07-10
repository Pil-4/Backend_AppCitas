import { IUsuario } from "./Usuario";

export interface INotificacion {
    idNotificacion: number;
    usuario:IUsuario;
    mensaje: string;
    fechaNotificacion: Date;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
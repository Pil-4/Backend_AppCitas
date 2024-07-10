import { IPerfil } from "./Perfil";

export interface IUsuario {
    idUsuario: number;
    perfil: IPerfil;
    nombres: string;
    nombreUsuario:string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    contrasena: string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
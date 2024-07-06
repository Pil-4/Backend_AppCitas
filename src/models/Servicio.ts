import { ICategoria } from "./Categoria";

export interface IServicio {
    idServicio:number;
    categoria:ICategoria;
    nombreServicio:string;
    precio:number;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
export interface IMedico {
    idMedico: number;
    dni: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    sexo: string;
    especialidad:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
export interface IMedico {
    idMedico: number;
    tipoDocumento: string;
    numeroDocumento: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    sexo: string;
    especialidad:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
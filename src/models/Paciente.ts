export interface IPaciente {
    idPaciente: number;
    tipoDocumento: string;
    numeroDocumento: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;
    celular:string;
    fechaNacimiento: Date;
    sexo: string;
    direccion:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}
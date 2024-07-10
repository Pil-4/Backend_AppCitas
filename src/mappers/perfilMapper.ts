import { perfil} from "@prisma/client"
import { IPerfil } from "../models/Perfil"

export const fromPrismaPerfil = (perfil: perfil): any=> ({
    idPerfil: perfil.id_perfil,
    descripcion: perfil.descripcion
});
export const toPrismaPerfil = (perfil: IPerfil): any => ({
    descripcion: perfil.descripcion
})
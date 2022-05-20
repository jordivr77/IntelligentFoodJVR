import { ConsumicionDia } from "./consumicionDia.interface";
import { Usuario } from "./usuario.interface";

/**
 * Entidad que mapea la información obtenida del microservicio dia
 */
export interface Dia {
    /**
     * Identificador del dia
     */
    id: number;

    /**
     * Fecha 
     */
    fecha: Date;

    /**
     * Usuario que tiene un día
     */
    usuario: Usuario;

    /**
     * Las consumicionesDia que tiene un dia
     */
    consumiciones_dia: ConsumicionDia[];
}
import { ConsumicionDia } from "./consumicionDia.interface";
import { Usuario } from "./usuario.interface";

/**
 * Entidad que mapea la información obtenida del microservicio dia
 */
export class Dia {
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

    constructor() {};

    totalCalorias(): number {
        let total: number;
        if (this.consumiciones_dia) {
            this.consumiciones_dia.forEach(consumicion => {
                if (consumicion.alimento) {
                    total = total + (consumicion.alimento.kcalorias/100) * consumicion.gramos_aliento;
                } else {
                    total = total + (consumicion.receta.kcalorias/100) * consumicion.gramos_receta;
                }
            });
        } else {
            total = 0;
        }
        return total;
    };
}
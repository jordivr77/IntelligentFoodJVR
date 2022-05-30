import { Alimento } from "./alimento.interface";
import { Dia } from "./dia.interface";
import { Receta } from "./receta.interface";

/**
 * Entidad que mapea la información obtenida del microservicio consumiciónDia
 */
export class ConsumicionDia {
    /**
     * Identificador de la consumicionDia
     */
    id: number;

    /**
     * Gramos del alimento de la ConsumicionDia
     */
    gramos_aliento: number;

    /**
     * Gramos de la receta de la consumiciondia
     */
    gramos_receta: number;

    /**
     * Receta de una consumición dia
     */
    receta: Receta;

    /**
     * Alimento de una consumición Dia
     */
    alimento: Alimento;

    /**
     * Día de una consumición día
     */
    dia: Dia;


}
import { Categoria } from "./categoria.interface"
import { ConsumicionDia } from "./consumicionDia.interface"

/**
 * Entidad que mapea la información obtenida del microservicio alimento
 */
export class Alimento
{
    /**
     * Identificador del alimento
     */
    id: number;

    /**
     * Imagen del alimento
     */
    imagen: string;

    /**
     * Si es uno el alimento se considera ingrediente
     * Si es 0 el alimento No se considera ingrediente
     */
    ingrediente: number;

    /**
     * Kilocalorías que tiene un ingrediente
     */
    kcalorias: number;

    /**
     * Nombre del alimento
     */
    nombre: string;

    /**
     * categoría en la que se encuentra el alimento
     */
    categoria: Categoria;

    /**
     * consumicionesdia que tiene ese alimento
     */
    consumiciones_dia: ConsumicionDia[];

    constructor() {};
    
}
import { Categoria } from "./categoria.interface";
import { ConsumicionDia } from "./consumicionDia.interface";
import { Usuario } from "./usuario.interface";

/**
 * Entida que mapea la información obtenida del microservicio Receta
 */
export class Receta {
    /**
     * Identificador de la receta
     */
    id: number;

    /**
     * Nombre de la receta
     */
    nombre: string;

    /**
     * Kilocalorías de la receta
     */
    kcalorias: number;

    /**
     * Usuario que tiene una receta
     */
    usuario: Usuario[];

    /**
     * Categoría que tiene una receta
     */
    categoria: Categoria;

    /**
     * ConsumicionDia que tiene una receta
     */
    consumiciones_dia: ConsumicionDia[];

    constructor() {};
    
}
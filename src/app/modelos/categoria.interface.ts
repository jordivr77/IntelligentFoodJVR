/**
 * Entidad que mapea la información obtenida del microservicio categoría
 */

import { Alimento } from "./alimento.interface"
import { Receta } from "./receta.interface";

export class Categoria {

    /**
     * Identidficador de la Categoría
     */
    id: number;

    /**
     * Nombre de la categoría
     */
    nombre: string;

    /**
     * imagen de la categoría
     */
    imagen: string;

    /**
     * Loa alimentos que tiene una categoría
     */
    alimentos: Alimento[];

    /**
     * Las recetas que tienen esa categoría
     */
    recetas: Receta[];

    constructor() {};
    
}
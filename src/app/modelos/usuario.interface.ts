import { Dia } from "./dia.interface";
import { Receta } from "./receta.interface";

/**
 * Entidad que mapea la información del microservicio Usuario
 */
export class Usuario {
    /**
     * Identificador del usuario
     */
    id: number;

    /**
     * nombre del usuario
     */
    nombre: string;

    /**
     * Apellidos del usuario
     */
    apellidos: string;

    /**
     * Email del usuario
     */
    email: string;

    /**
     * Password del usuario
     */
    password: string;

    /**
     * Edad del usuario
     */
    edad: number;

    /**
     * Peso del usuario
     */
    peso: number;

    /**
     * Altura del usuario
     */
    altura: number;

    /**
     * Sexo del usuario
     */
    sexo: string;

    /**
     * tipo del usuario--> USER/ADMIN
     */
    tipo: string;

    /**
     * Días que tiene el usuario
     */
    dias: Dia[];

    /**
     * Las recetas que tiene el usuario
     */
    recetas: Receta[];
    
}
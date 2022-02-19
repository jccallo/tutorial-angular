export class Persona {
    // propiedades
    nombre:string;
    apellido:string;

    // incializamos los valores por defalut de las pripiedades
    constructor(nombre: string = "", apellido: string = "") {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
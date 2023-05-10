import { Equipo } from "./Equipo.js";
 
 export class Disco extends Equipo{
    constructor(serial, marca, modelo, tipo_disco, capacidad){
        super(serial, marca, modelo);
        this.tipo_disco = tipo_disco;
        this.capacidad = capacidad;
    }

    mostrarDatosEquipo(){
        console.log(`El disco es de tipo ${this.tipo_disco} y su capacidad ${this.capacidad}`);
    }
}
export class Equipo {
    constructor(serial, marca, modelo) {
        this.serial = serial;
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarDatosEquipo(){
        console.log(`Este equipo tiene el serial ${this.serial}, marca ${this.marca}, modelo ${this.modelo}`);
    }
}
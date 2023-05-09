// Clase equipo Ecmascript5
// function Equipo(serial, marca, modelo) {
//     this.serial = serial;
//     this.marca = marca;
//     this.modelo = modelo;
// }

// Clase equipo Ecmascript6
class Equipo {
    constructor(serial, marca, modelo) {
        this.serial = serial;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo, idioma) {
        super(serial, marca, modelo);
        this.tipo = tipo;
        this.idioma = idioma;
    }

}

const equipo1 = new Equipo("38978344", "Lenovo", "Microsoft", "MT001")

console.log(equipo1);

const teclado1 = new Teclado("999999", "Genius", "Generic", "Inalambrico", "Español");
console.log(teclado1);
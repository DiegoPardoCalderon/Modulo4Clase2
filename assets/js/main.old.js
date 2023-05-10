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

    mostrarDatosEquipo(){
        console.log(`Este equipo tiene el serial ${this.serial}, marca ${this.marca}, modelo ${this.modelo}`);
    }
}

class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo, idioma) {
        super(serial, marca, modelo);
        this.tipo = tipo;
        this.idioma = idioma;
    }

}

class Disco extends Equipo{
    constructor(serial, marca, modelo, tipo_disco, capacidad){
        super(serial, marca, modelo);
        this.tipo_disco = tipo_disco;
        this.capacidad = capacidad;
    }

    mostrarDatosEquipo(){
        console.log(`El disco es de tipo ${this.tipo_disco} y su capacidad ${this.capacidad}`);
    }
}

// const equipo1 = new Equipo("38978344", "Lenovo", "MT001")

// console.log(equipo1);
// equipo1.mostrarDatosEquipos();


// const equipo2 = new Equipo("3897", "Compaq", "001")
// equipo2.mostrarDatosEquipos();

const teclado1 = new Teclado("999999", "Genius", "Generic", "Inalambrico", "Español");
teclado1.mostrarDatosEquipo();

const disco1 = new Disco("2839", "Seagate", "SGT01", "SSD", "1TB")
console.log(disco1);
disco1.mostrarDatosEquipo();


// ~~~~~~~~~~~~~~~~~~~~~~~~~Ejemplo Generadores~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function* mostrarInformacion() { 
    yield console.log("Primer Mensaje");
    console.log("Mensaje intermedio");
    yield console.log("Segundo Mensaje");
    yield console.log("Tercer Mensaje");
}

const generador = mostrarInformacion()

setTimeout(() => {
    generador.next();
}, 2000);

setTimeout(() => {
    generador.next();
}, 5000);

setTimeout(() => {
    generador.next();
}, 10000);

import { Teclado } from "./clases/Teclado.js";
import { Disco } from "./clases/Disco.js";



const teclado1 = new Teclado("999999", "Genius", "Generic", "Inalambrico", "Español");
teclado1.mostrarDatosEquipo();

const disco1 = new Disco("2839", "Seagate", "SGT01", "SSD", "1TB")
console.log(disco1);
disco1.mostrarDatosEquipo();



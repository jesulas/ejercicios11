import { isValidIBAN, extractIBAN} from "ibantools"
import { dividirDatos} from "./creacionHTML"

const listado = document.getElementById("resultado")

//regex1.exec

const cheque = (evento: Event) => {
    // Borramos el resultado anterior, sea este correcto o incorrecto
const error = document.getElementById("deleteme")
if (error != null && error != undefined){
    error.remove()
}
const anterior = document.getElementById("response")
if (anterior != null && anterior != undefined){
    anterior.remove()
}
evento.preventDefault();
let text = obtenerValorCampo("search")

    
    if (isValidIBAN(text)){
        console.log(isValidIBAN(text));
        console.log("IBAN Correcto")
        let info = extractIBAN(text)
        console.log(info)
        dividirDatos(text)
        
    }
    else {
    let fail = document.createElement("h4")
    fail.innerHTML="IBAN In-correcto"
    fail.id="deleteme"
    if (listado != null && listado != undefined && listado instanceof HTMLDivElement){
        listado.appendChild(fail)
    }
    console.log
}
} 
//hacer que aparezca un error si el iban no es valido



const obtenerValorCampo = (nombre: string): string => {
const elementoCampo = document.getElementById(nombre);
if (
(elementoCampo && elementoCampo instanceof HTMLInputElement) ||
elementoCampo instanceof HTMLTextAreaElement
) {
return elementoCampo.value;
} else {
throw new Error("No se ha encontrado el campo");
}
}

const formulario = document.getElementById("busqueda")

if (formulario && formulario instanceof HTMLFormElement) {
formulario.addEventListener("submit", cheque);
} else {
throw new Error("No se ha encontrado el formulario");
}

// partir codigo en distintos ficheros..
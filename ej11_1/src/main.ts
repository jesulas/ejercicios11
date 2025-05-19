import { isValidIBAN, extractIBAN} from "ibantools"
import { enseñarDatos } from "./creacionHTML"
const regex1 = /^ES\d{2}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{2}[-\s]?\d{10}$/
const listado = document.getElementById("resultado")

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
let equal = text.match(regex1)
if(equal != null){
    
    if (isValidIBAN(text)){
        console.log(isValidIBAN(text));
        console.log("IBAN Correcto")
        let info = extractIBAN(text)
        console.log(info)
        enseñarDatos(info, text)
    }

} 
else {
    let fail = document.createElement("h4")
    fail.innerHTML="IBAN In-correcto"
    fail.id="deleteme"
    if (listado != null && listado != undefined && listado instanceof HTMLDivElement){
        listado.appendChild(fail)
    }
    console.log(equal)
}
}

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
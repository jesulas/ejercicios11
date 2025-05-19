const regex1 = /<img src="(.*?.)" \/>/g
const textbox = document.getElementById("textbox")
const areaImagenes = document.getElementById("areaImagenes")

const searchImagenes = () => {
if (textbox != null && textbox != undefined && textbox instanceof HTMLTextAreaElement){
const array = [...textbox.value.matchAll(regex1)];
for (let i=0; i < array.length; i++){
showImagenes(array[i])
}
}
}

const showImagenes = (texto: string[]) => {
const imagen = document.createElement("img");
imagen.src = texto[1];
if (areaImagenes != null && areaImagenes != undefined && areaImagenes instanceof HTMLDivElement){
areaImagenes.appendChild(imagen)
}
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    let imagenesBoton = document.getElementById("imagenesBoton")
    if (imagenesBoton != null && imagenesBoton != undefined && imagenesBoton instanceof HTMLButtonElement){
    imagenesBoton.addEventListener("click", searchImagenes)
    }
})

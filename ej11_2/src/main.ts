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

const showImagenes = (texto: Array<string>) => {
const imagen = document.createElement("img");
imagen.src = texto[1];
areaImagenes?.appendChild(imagen)
}

document.getElementById("imagenesBoton")?.addEventListener("click", searchImagenes)
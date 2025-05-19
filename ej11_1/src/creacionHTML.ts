import { ExtractIBANResult } from "ibantools";
const listado = document.getElementById("resultado")

const bancosArray = [

"2080 Abanca Corporación Bancaria",

"0061 Banca March",

"0188 Banco Alcalá",

"0182 Banco Bilbao Vizcaya Argentaria",

"0130 Banco Caixa Geral",

"0234 Banco Caminos",

"2105 Banco Castilla-La Mancha",

"0240 Banco de Crédito Social Cooperativo",

"0081 Banco de Sabadell",

"0487 Banco Mare Nostrum",

"0186 Banco Mediolanum",

"0238 Banco Pastor",

"0075 Banco Popular Español",

"0049 Banco Santander",

"3873 Banco Santander Totta",

"2038 Bankia",

"0128 Bankinter",

"0138 Bankoa",

"0152 Barclays Bank PLC",

"3842 BNP Paribas Paris",

"3025 Caixa de Credit del Enginyers",

"2100 Caixabank",

"2045 Caja de Ahorros y Monte de Piedad de Ontinyent",

"3035 Caja Laboral Popular CC",

"3081 Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural",

"2000 Cecabank",

"1474 Citibank Europe PLC",

"3821 Commerzbank AG",

"3877 Danske Bank A/S",

"0019 Deutsche Bank SAE",

"0239 EVO Banco",

"2085 Ibercaja Banco",

"1465 ING Bank NV",

"2095 Kutxabank",

"2048 Liberbank",

"0131 Novo Banco",

"0073 Open Bank",

"0108 Société Générale",

"2103 Unicaja Banco"
]


export const enseñarDatos = (info: ExtractIBANResult, completo: string) => {
    
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    contenedor.id ="response"
    if(listado != null && listado != undefined && listado instanceof HTMLDivElement){
    listado.appendChild(contenedor)
    }
    if (info.bankIdentifier != null && info.bankIdentifier != undefined){
    let nombre = buscarBanco(info.bankIdentifier)
    if (nombre != null && nombre != undefined){
    let nombreFile = crearDato("Numero de banco: " + nombre)
    if (nombreFile != null && nombreFile != undefined && nombreFile instanceof HTMLHeadingElement){
    contenedor.appendChild(nombreFile)
    }
    }
    }
    let branch = info.branchIdentifier
    if (branch != null && branch != undefined){
    let branchID = crearDato("Codigo de secuersal: " + branch)
    if (branchID != null && branchID != undefined && branchID instanceof HTMLHeadingElement){
    contenedor.appendChild(branchID)
    }
    }
    let digito = completo.substring(12,14)
    if (digito != null && digito != undefined){
    let digitoID = crearDato("Digito de control: " + digito)
    if (digitoID != null && digitoID != undefined && digitoID instanceof HTMLHeadingElement){
    contenedor.appendChild(digitoID)
    }
    }
   let cuenta = info.accountNumber
    if (cuenta != null && cuenta != undefined){
    let cuentaID = crearDato("Numero de cuenta: " + cuenta)
    if (cuentaID != null && cuentaID != undefined && cuentaID instanceof HTMLHeadingElement){
    contenedor.appendChild(cuentaID)
    }
    }
}

const buscarBanco = (numero: string)=> {
for (let i = 0; i < bancosArray.length; i++) {
    if (bancosArray[i].includes(numero)){
        return bancosArray[i]
    }
}
return null;
}

const crearDato = (dato: string) =>{
    const nombr = document.createElement("h4");
    nombr.innerHTML = dato;
    return nombr
}


/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*--------------*/
/*FUNCIONES - JS*/
/*--------------*/

//REUTILIZAR BLOQUES DE CODIGO PARA ESO SIRVEN LAS FUNCIONES 

/*
function nombreDeLaFuncion(PARAMETRO/ARGUMENTO){
    /CODIGO A EJECUTAR
}

nombreDeLaFuncion()
*/

//FUNCION SIN PARAMETROS INICIALES 

function saludoPersonalizado(){
    console.log('Hola Milton, te ganaste un petuche 8====D')
}

saludoPersonalizado()

console.log('----------------------------------------')
//FUNCION CON PARAMETROS INICIIALES

function saludoAutomatico(nombreDeUsuario){
    console.log(`Hola! ${nombreDeUsuario}, ganaste dos petuches 🍆, felicidades`)
}

saludoAutomatico('Grace')
saludoAutomatico('Milton')
saludoAutomatico('Pablo')

console.log('----------------------------------------')

function sumaDeDosNumeros(numeroUno,numeroDos){
    return numeroUno + numeroDos 

}

console.log(sumaDeDosNumeros(50,78))
console.log(sumaDeDosNumeros(5,7))
console.log(sumaDeDosNumeros(7.5,6.7))

//funciones puras e impuras consultar

console.log('----------------------------------------')

let numeroSumableUno = 87
let numeroSumableDos = 45
let resultado = numeroSumableUno + numeroSumableDos
console.log(resultado)

console.log('----------------------------------------')

function gastosFijosMensuales(arriendo,servicios,mercado,transporte,cenar,
perrateo, suscripciones){
    return arriendo + servicios + mercado + transporte + cenar + perrateo + suscripciones
}

console.log(gastosFijosMensuales(1500000, 300000, 500000, 300000, 300000, 300000, 150000))
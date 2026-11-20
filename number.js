/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*----------------------------------*/
/*NUMEROS Y OPERACIONES ARITMETRICAS*/
/*----------------------------------*/

//1. TIPO ENTERO Y DECIMAL
const numeroEntero = 787 //NUMBER
const numeroDecimal = 787.787

//2. NOTACION CIENTIFICA
const cientifica = 5e3//5000 Y ES NUMBER
console.log(cientifica, typeof cientifica) 

//3.INFINITOS & NAN
const numeroInfinito = Infinity //NUMBER
console.log(numeroInfinito, typeof numeroInfinito) 

const numeroNaN = NaN //NUMBER
console.log(numeroNaN, typeof numeroNaN)

/*--------------------------------*/
/*OPERACIONES MATEMATICAS BASICAS*/
/*------------------------------*/

let suma = 2 + 2 //4
let resta = 10 - 5 //5
let multiplicacion = 5 * 2 //10
let division = 50 / 10 //5
let potencia = 2 ** 5 //32
let modulo = 5 % 2 //1

console.log('OPERACIONES BASICAS')
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(potencia)
console.log(modulo)

/*--------------------------*/
/*OPERACIONES AVANZADAS MATH*/
/*--------------------------*/

const raizCuadrada = Math.sqrt(25)//5
const valorAbsoluto = Math.abs(-7)//7
const numeroAleatorio = Math.random()// [0,1]

console.log('OPERACIONES AVANZADAS')
console.log(raizCuadrada) 
console.log(valorAbsoluto)
console.log(numeroAleatorio)

/*---------------*/
/*PRESISION EN JS*/
/*---------------*/

let resultado = 0.1 + 0.2 //0.3
console.log('PRESISION JS')
console.log(resultado)
console.log(resultado.toFixed(1))

/*---------------------------------*/
/*TYPE CASTING Ó CONVERSION DE TIPO*/
/*         COHERCIÓN Ó PASREO       */ 
/*---------------------------------*/

//EXPLICITO
let numeroSting = '42'
numeroNumber = parseInt(numeroSting)
console.log('PARSEO EXPLICITO')
console.log(numeroSting, numeroNumber)
console.log( typeof numeroSting, typeof numeroNumber)

let numeroFloat = '3.4'
numeroToFloat = parseFloat(numeroFloat)
console.log(numeroToFloat, typeof numeroToFloat)

let numeroBinario = '1111'
numeroToNumero = parseInt(numeroBinario, 2)
console.log(numeroBinario, numeroToNumero)

//INPLICITO - PELIGROSO
const sumaNumeros = '5' + 4 //9
console.log('PARSEOS INPLICITOS')
console.log(sumaNumeros)
                        //SI HAY STRING, JS CONCATENA!
const sumBooleano = '8' + true //9
console.log(sumBooleano)
                        //SI NO HAY STRING, JS OPERA!
const sumNumber = 5 + true //6
console.log(sumNumber) 

const sumaNull = 5 + null
console.log(sumaNull)

console.log('-------------------------------------')

let resultadoImpreciso = 0.1 + 0.2
let resultadoFixed = resultadoImpreciso.toFixed(1)

console.log('RESULTADO:',resultadoImpreciso)
console.log('ARREGLADO:',resultadoFixed)

resultadoParseo = parseFloat(resultadoFixed)
console.log('RESULTADO REAL:',resultadoParseo)

const sumString = '25'
const sumNumero = 25
const sumBoolean = true 

console.log('----------------------')
console.log(sumString + sumString) //CONCATENA
console.log(sumString + sumNumero) //CONCATENA
console.log(sumString + sumBoolean) //CONCATENA
console.log('----------------------')

console.log(sumNumero + sumNumero) //OPERA
console.log(sumNumero + sumString) //CONCATENA
console.log(sumNumero + sumBoolean) //OPERA
console.log('----------------------')

console.log(sumBoolean + sumBoolean) //OPERA
console.log(sumBoolean + sumString) //CONCATENA
console.log(sumBoolean + sumNumero) //OPERA
console.log('----------------------')


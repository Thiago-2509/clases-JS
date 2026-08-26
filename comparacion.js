/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*-------------------------------*/
/*OPERADORES DE COMPARACION - JS*/
/*-----------------------------*/

/*
==    -> COMPARA SI ES ABSTRCTA MENTE IGUAL QUE -> VALORES
===   -> COMPARA SI ES ESTRICTAMENTE IGUAL QUE -> VALORES & TIPO DE DATO
!=    -> COMPARA SI ES ABSTRACTAMENTE DIFERENTE -> VALOR
!==   -> COMPARA SI ES ESTRICTAMENTE DIFERENTE -> VALOR & TIPO DE DATO
>     -> COMPARA SI ES MAYOR QUE -> VALOR
<     -> COMPARA SI ES MENOR QUE -> VALOR
>=    -> COMPARA SI ES MAYOR O IGUAL QUE -> VALOR
<=    -> COMPARA SI ES MENOR O IGUAL QUE -> VALOR
*/

const numeroUno = 10
const numeroDos = '10'
const numeroTres = 20
const numeroCuatro = '20'
const numeroCinco = 30
const numeroSeis = 40
const numeroSiete = 10

console.log(numeroUno == numeroDos)//true
console.log(numeroTres === numeroCuatro)//false 
console.log('----------------------------')
console.log(numeroSeis != numeroUno)//true
console.log(numeroTres !== numeroCuatro)//true
console.log(numeroSiete !== numeroUno)//false
console.log(100 !== 100)//false
console.log('50' !== 50)//true
console.log('3.14' != 3.14)//flase
console.log('----------------------------------')
console.log(numeroSeis > numeroSiete)//true
console.log(numeroTres < numeroSeis)//true
console.log(numeroCuatro >= numeroTres)//true
console.log(numeroSeis <= numeroDos)//false
console.log('----------------------------------')
console.log(-7 < 10)//true
console.log(-5.3 > -10.45246854321578)//ture


/*------------------------*/
/*OPERADORES LOGICOS - JS*/
/*----------------------*/

/* 
&& -> AND Ó Y -> PARA OBTENER UN TRUE TODAS LAS COMPARACIONES TIENEN QUE SER VERDADERAS
|| -> OR u O -> PARA OBTENER TRUE SOLO SE TIENE QUE CUMPLIR ALMENOS UNA COMPARACION DEBE DE SER VERDADERA
!  -> NOT Ó NEGACION -> NIEGA LA SALIDA 
*/
// EJEMPLOS



const numeroA = 10
const numeroB = '10'
const numeroC = 20
const numeroD = '20'
const numeroE = 30
const numeroF = 40

//OPERADOR LOGICO AND (&&) -- true, TODOS SE DEBEN CUMPLIR
console.log('----------------------------------')
console.log(numeroA == numeroB && numeroE < numeroF)//true
console.log(numeroA < numeroB && numeroA == numeroB && numeroE < numeroF)//flase

//OPERADOR LOGICO OR (||) -- true, ALMENOS UNO SE DEBEN CUMPLIR
console.log('----------------------------------')
console.log(numeroE !== numeroD || numeroF < numeroA || numeroC ===  numeroD)//true
console.log(numeroE == numeroF || numeroF < numeroA || numeroC ===  numeroD || numeroA === numeroB )//false
//OPERADOR LOGICO NOT (!) -- !true = flase !false = true
console.log('----------------------------------')
console.log(!(numeroA == numeroB))
//          !(true) = false 
//   EL RESULTADO SE VUELVE LO CONTRARIO
console.log('----------------------------------')

console.log(!(!(numeroA > numeroB) && numeroA == numeroB && !(numeroE < numeroF)))//true
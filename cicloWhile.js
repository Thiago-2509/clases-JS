/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*-------------------*/
/*CICLOS WHILE - LOOP*/
/*-------------------*/

/*
while(CONDICION){
    //CODIGO A EJECUTAR
    //VONTADOR
}
*/

let contador = 0 

while(contador < 10){
    console.log('valor:', contador)
    contador++
}

//DECREMENTO
console.log('----------------------------------')
let numero = 5
console.log(numero--)//VARIABLE+--:PRIMERO MUESTRA EL NUMERO Y LUEGO LO DECREMENTA. --+VARIABLE: DECEMENTA Y LUEGO MUESTRA  
console.log(numero)

//LIMITE DE SEGURIDAD 
console.log('----------------------------------')

let limiteDeSeguridad = 3


while(limiteDeSeguridad-- > 0){
    console.log('valor actual:',limiteDeSeguridad)
    //contador++
}
console.log('----------------------------------')


let limiteDeSeguridadDos = 11
let contadosDos = 0

while(contadosDos < 10 && limiteDeSeguridadDos-- > 0){
    console.log('Valor actual:',contadosDos)
    contadosDos++
}

//la diferencia de un ciclo while y un for es que en el for usted conoce la cantidad de iteraciones o vueltas que da cunado no se sabe se utiliza el while

/*-------------------*/
/*CICLOS WHILE - LOOP*/
/*-------------------*/

/*
do {
    /CODIGO A EFECUTAR
    /INCREMENTO
}while(condicon)
*/

console.log('-------------------')
let contadorTres = 0

do{
    console.log('Valor',contadorTres)
    contadorTres++
}while(contadorTres > 10)
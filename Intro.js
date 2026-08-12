//INPRIMIR EN PANTALLA O CONSOLA


console.log("Hola mundo.") 



//DEFINIR VARIABLES & BUENAS PRACTICAS 

//UNA VARIABLE ES UNA CAJITA DONDE SE GUSARDAN COSAS RELACIONADAS CON EL NOMBRE DE LA CAJITA

let cofreDeAndy = "Rex"
//  DECLARACION = ASIGNACION 

//NO ESTA PERMITIDO 
let c = "Rex"
let cda = "Rex"
let cdaAndy = "Rex" // NO ABREVIACIONES NI SOLO LETRAS PORQUE NO SE SABE QUE SE PUEDE ASIGNAR 

// SI ESTA PERMITIDO
let primerJugueteDeAndy = "Woody" 
let urlPerfilInstagramProfeNestor // ENTRE MAS ESPECIFICA SEA LA DECLARACION EN MAS FACIL SU ASIGNACION  

//LET -->  Variable para cositas que pueden cambiar en el tiempo 
let conteoUsuarioInterado = 0 

//CONST --> Varaible para cositas que NO pueden cambiar en el tiempo 
const valorDescargaDesfribilador = 10000

/*--------------------------------------*/
/*TIPOS DE DATO - PRIMITIVOS & COMPLEJOS*/ 
/*--------------------------------------*/

/*
PRIMITIVOS:
1.NUMBER
2.STRING
3.BOOLEAN
4.NULL
5.UNDEFINED
6.SYMBOL
7.BIGINT

COMPLEJOS:
1.ARRAY
2.OBJECT
3.FUNCTION
*/ 

//PRIMITIVO
let edadDeUsuario = 17//NUMBER
let nombreDeUsuario = 'Santaigo' //STRING   
let esMayorDeEdad = false //BOOLEAN
let valorNulo = null //null REPRESENTA LA AUSENCIA DE VALOR INTENCIONAL
let valorIdefinido = undefined //UNDEFINED
let valorUnico = Symbol('Unico')//SYMBOL    
let numerGrande = 2n //BIGINT

console.log('------------------------------------')
console.log(edadDeUsuario, typeof edadDeUsuario)
console.log('------------------------------------')
console.log(nombreDeUsuario, typeof nombreDeUsuario)
console.log('------------------------------------')
console.log(esMayorDeEdad, typeof esMayorDeEdad)
console.log('------------------------------------')
console.log(valorNulo, typeof valorNulo)
console.log('------------------------------------')
console.log(valorIdefinido, typeof valorIdefinido)
console.log('------------------------------------')
console.log(valorUnico, typeof valorUnico)
console.log('------------------------------------')
console.log(numerGrande, typeof numerGrande)

//COMPLEJOS
let listaDeFrutas = ['Mango','Uva','Banano','Piña','Manzana'] //ARRAY   ES UN LISTA DE ELEMENTOS ORDENADA DE FORMA SECUENCIAL  

let superProfeNestor = {
    //PROPIEDADES O (CLAVES): VALORES   SON UN CONJUNTO DE PROPIEDADES A LOS CUALES SE LE ASIGNAN VALORES
    nombre: 'Nestor',
    superpoder: 'Volar',
    fuerza: -1
}

let saludarUsuario = function(){} //FUNCTION

console.log('------------------------------------')
console.log(listaDeFrutas, typeof listaDeFrutas)
console.log('------------------------------------')
console.log(superProfeNestor, typeof superProfeNestor)
console.log('------------------------------------')
console.log(saludarUsuario, typeof saludarUsuario)

/*----------------------------*/
/*MANIPULACION DE STRINGS - JS*/ 
/*----------------------------*/

let stringUno = 'El viernes'
let stringDos = "es festivo"
let stringTres = `full recocha` //AltGr + }} ó Alt + 96 

//CONCATENAR

console.log('--------------------------------------------')
console.log(stringUno + ' ' + stringDos + ' ' + stringTres)
console.log(stringUno, stringDos, stringTres)
console.log(`${stringUno} ${stringDos} only +18 ${stringTres} -18 pa la casa a dormir amor`)
console.log('--------------------------------------------')

console.log('--------------------------------------------')
let frase = 'Si hay sol, hay playa, hay ALCOHOL, hay gUaYaBO.'
console.log('Tamaño: ', frase.length) //TAMAÑO 
console.log('Minus:', frase.toLowerCase())//MINUSCULA
console.log('Mayus:', frase.toUpperCase())//MAYUSCULA 
console.log('Segmento:', frase.substring(0, 2))//SEGMENTO
console.log('Segmento:', frase.substring(7, 10))
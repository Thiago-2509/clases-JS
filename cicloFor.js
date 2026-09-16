/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*----------------------------------------------*/
/*CICLOS FOR CLASICO - INTERACION DE LISTAS - JS*/
/*----------------------------------------------*/

//ITERACION => RECORRER, QUE? => UNA LISTA
//ITERACION => DE FORMA SECUENCIAL 

/* 
ESTRUCTURA

for(INICIALIZACION; CONDICION; INCREMENTO){
    /CODIGO A EJECUTAR
}
*/

const nombresCulitosDePablo = ['Ana']
//TAMAÑO: 4
//POSICION: i
for(i = 0; i < nombresCulitosDePablo.length; i++){
    console.log(`${nombresCulitosDePablo[i]} Descansa, sueña bonito. Te envio desde la distancia, un besito de bunas noches 😘`)
}



/*---------------*/
/*CICLOS FOR - OF*/
/*---------------*/

//FOR OF => SE UTILIZA PARA COSAS ITERABLES
//FOR OF => Array, strings /UNICOS DATOS RECORIBLES 

/* 
ESTRUCTURA

for(VARIABLE OF ARRAY/STRING A ITERAR){
    /CODIGO A EJECUTAR
}
*/

console.log('-------------------------------------------')

const listaDeColores = ['rojo','verde','azul','amarillo','naranja']

for(colores of listaDeColores){
    console.log(colores)
}

/*---------------*/
/*CICLOS FOR - IN*/
/*---------------*/

//FOR IN => SIRVE PARA COSAS ENUMERABLES 
//FOT IN => object 

/*
ESTRUCTURA

for(VARIABLE in OBJECT){
    /CODIGO A EJECUTAR}
*/

console.log('-------------------------------------------')

const tiendaDeCelulares = {
    samsung: 100,
    iphone: 50 ,
    xiaomi: 300,
    nokia: 20000 
} 

for(c in tiendaDeCelulares){
    console.log(`${c}: ${tiendaDeCelulares[c]}`)
}

//c => PROPIEDADES DEL object 
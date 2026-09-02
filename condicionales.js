/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*-------------------------------*/
/*OPERADORES DE COMPARACION - JS*/
/*-----------------------------*/

/*--------------------*/
/*IF - ELSE IF - ELSE*/
/*------------------*/

/*
if(Condicion){
    /CODIGO A EJECUTAR
}else{
    /CODIGO A EJECUTAR
    }
*/

/*
if(Condicion){
    /CODIGO EJECUTAR
}else if(Condicion){
    /CODIGO A EJECUTAR
}else if(Condicion){
    /CODIGO A EJECUTAR
}else{
    /CODIGO A EJECUTAR
}
*/

//Ejemplo

const edadDeUsuarioDulcinea = 21
const generoDeUsuarioDulcinea = 'femenino'
if(generoDeUsuarioDulcinea === 'femenino' && edadDeUsuarioDulcinea >= 18){
    console.log('Bienvenida no pagas cover, disfruta de tu coktel de beinvenida')
}else if(generoDeUsuarioDulcinea === 'masculino' && edadDeUsuarioDulcinea >= 18){
    console.log('Bienvenido a Dulcinea, 50k cover💴')
}else{
    console.log('Paila papi para afuera 🤷‍♂️')
}

console.log('-------------------------------')

/*----------------*/
/* SWITCH - CASE se utiliza cuando se teien que comparar UNA SOLO COSA CONTRA MUCHAS OTRAS COSAS */
/*--------------*/

/* 
switch(OPCION){

    case VALOR:
        /CODIGO A EJECUTAR
        /break;
    case VALOR:
        /CODIGO A EJECUTAR
        /break;
    case VALOR:
        /CODIGO A EJECUTAR
        /break;
    default:
        /codigo a ejecutar
        break;
}
*/

//Ejemplo 

const canastaDeFrutas = 'Banano'


switch(canastaDeFrutas.toLowerCase()){
    case 'mandarina':
        console.log(`La ${canastaDeFrutas} cuesta $100 el kilo`)
        break;
    case 'banano':
        console.log(`El ${canastaDeFrutas} cuesta $250 el kilo`)
        break;
     case 'piña':
        console.log(`La ${canastaDeFrutas} cuesta $300 el kilo`)
        break;
    case 'papaya':
        console.log(`La ${canastaDeFrutas} cuesta $150 el kilo`)
        break;
    default:
        console.log(`No esta disponible ${canastaDeFrutas}`)
        break
}

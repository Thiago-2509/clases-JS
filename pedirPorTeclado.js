/*-------------------------------------*/
/*SANTIAGO UPEGUI YEPES - APRENDIZ SENA*/
/*-------------------------------------*/

/*---------------------------------*/
/*PEDIR POR TECLADO EN TERMINAL- JS*/
/*---------------------------------*/

const readline = require('readline')                          

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* 
rl.question('PreguntaAlUsuario', (Variable) => {
    /CODIGO A EJECUTAR
    /rl.close
})
*/
/*
rl.question('Ingrese su nombre: ', (nombreDeUsuario) => {
    console.log(`Hola ${nombreDeUsuario} quieres ver gas o ver gotas?`)
    rl.close()
})
*/
//Cuando se hace un rl no se puede hacer un while 
/*
rl.question('Ingrese su edad: ', (edadDeUsuario) => {
    console.log(`Hola, tienes ${parseInt(edadDeUsuario)+10} años`)
    rl.close()
}) 
*/
//Pedir nombre edad y que diga hola usuario y tienes tantos años 

rl.question('Ingrese su nombre: ', (nombreUsuario) => {
    rl.question('Ingrese su edad: ', (edadUsuario) => {
        let edadnumber = parseInt(edadUsuario)
        console.log(`Hola ${nombreUsuario}, tienes ${edadnumber} años`)
        rl.close()
    })
})
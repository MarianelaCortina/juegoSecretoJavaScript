let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales(); 

















/* //DESAFIOS
//Desafio 1
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//Desafio 2
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes 
// elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Klotin', 'Python'];

//Desafio 3
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

//Desafio 4
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementosLista(){
    console.log(lenguajesDeProgramacion);
}

mostrarElementosLista();

//Desafio 5
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarElementosListaInverso(){
    console.log(lenguajesDeProgramacion.reverse());
}

mostrarElementosListaInverso();

//Desafio 6
//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaDeNumeros = [4,7,10];
let suma = 0;
listaDeNumeros.forEach((numero) => {
    suma += numero;
    //console.log(suma);
    let promedio = suma / listaDeNumeros.length;
    console.log(promedio);
});

//Desafio 7
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
console.log(Math.max(...listaDeNumeros));
console.log(Math.min(...listaDeNumeros));

//Desafio 8
//Crea una función que devuelva la suma de todos los elementos en una lista.
let listaDeNumeros2 = [5,1,6];
let suma2 = 0;
listaDeNumeros2.forEach((num) => {
    let sumaTotal = suma2 += num;
    console.log(sumaTotal);
});

//Desafio 9
//Crea una función que devuelva la posición en la lista donde se encuentra 
// un elemento pasado como parámetro, o -1 si no existe en la lista.
let listaDeNumeros3 = [9,8,10,6,3];

function posicionNumero(num){
    let posicion = 0;
    if(listaDeNumeros3.includes(num)){
        posicion = listaDeNumeros3.indexOf(num);    
    console.log(posicion);
    } else {    
        console.log('El número no se encuentra en la lista');
    }
}
let numeroUnico = 3;
posicionNumero(numeroUnico);

//desafio 10
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
// con la suma de los elementos uno a uno.
//Código original en papel, para que no me spoilee copilot je je

let listaSumaTotal = [];
let suma3 = 0;
let suma4 = 0;

function sumarListas(lista1, lista2){
    lista1.forEach((num) => {
        suma3 += num;
    });
    lista2.forEach((num) => {
        suma4 += num;
    });
    let sumaTotal = suma3 + suma4;
    console.log(sumaTotal);
    listaSumaTotal.push(sumaTotal); //55
    console.log(listaSumaTotal); // [55]
}

let listaDeNumeros4 = [1,2,3,4,5];//15
let listaDeNumeros5 = [6,7,8,9,10];//40

sumarListas(listaDeNumeros4, listaDeNumeros5);

//Desafio 11
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
//Código original en papel, para que no me spoilee copilot je je

let listaAlCuadrado = [];
let cuadrado = 0;   

function numeroAlCuadrado(listaOriginal){
    listaOriginal.forEach((num) => {
        cuadrado = num * num;
        listaAlCuadrado.push(cuadrado);
    });
    console.log(listaAlCuadrado);
}   

let listaNumOriginal = [2,4,6,8];
numeroAlCuadrado(listaNumOriginal); // [4,16,36,64] */
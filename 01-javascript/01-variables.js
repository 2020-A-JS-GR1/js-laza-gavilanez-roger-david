//Mutables e Inmutables
//Mutables
var numeroUno=1;
let numeroDos=2;
numeroUno=5;
numeroDos=8;
numeroUno=false;
numeroDos=true;
//Inmutables
const configuracionArchivo="PDF";
//configuracionArchivo="XML";
const numero=1;//number
const sueldo=1.1;
const texto="Adrian";//string
const booleanooo="false";//boolean
const hijos=null;//object
const zapatos=undefined;//undefine
const apellido='laza';
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);

if(true==true){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}
if(""){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}
if("Hola Wey"){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}
if(-1){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}
if(0){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}
if(1){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}
if(null){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}

if(undefined){
    console.log('es verdadero');
}else{
    console.log('es Falso');
}

//Ordenes de importancia
//1) "const"
//2) "let"
//3) var nunca le vamos a ocupar

//Objetos Js (JSON) Arreglos
const laza ={
    nombre:"Roger",// llave : valor,
    apellido:'Laza',
    edad: 21,
    hijos: null,
    zapatos: undefined,
    ropa: {
        color:'plomo',
        talla:'40'
    }
    mascotas:['Cachetes','Pequitas','Nalguitas']

}; //object
laza.nombre;
laza.apellido;
const arreglodenumeros =[

]; //object
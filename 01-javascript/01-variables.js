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
    },
    mascotas:['Cachetes','Pequitas','Nalguitas'],

}; //object
// acceder a las propiedades del objeto
laza.nombre;
laza.apellido;
laza["nombre"];
laza.nombre="Juanito";
laza["nombre"]="Pedro";
console.log(laza);
console.log(laza.sueldo);//undefine
laza.sueldo=1.23;
console.log(laza.sueldo);//undefine
laza["gastos"]="0.8";
laza.nombre=undefined;// asi se elimina
console.log(laza.nombre);//undefine
//console.log(Object.keys(laza));
console.log(Object.values(laza));
delete laza.nombre;
//console.log(laza);//undefine
//CLASE OBJECT
//console.log(Object.keys(laza));// obtener la llaves de un objeto
console.log(Object.values(laza));
// const arreglodenumeros =[
//
// ]; //object
//////////////////////////////
// lista variables por valor en JS
//numer
//string
//boolean
//undefine
let edadlaza=22;
let edadRoger= edadlaza;
console.log(edadlaza);
console.log(edadRoger);
edadlaza=edadlaza+1;
console.log(edadlaza);
console.log(edadRoger);
//Variables por referencia OJO

// let kevin =ronald;
// console.log(kevin);
// console.log(ronald);
// kevin.nombre="kevin";
// console.log(kevin);
// console.log(ronald);
// //delete ronald.nombre;
// console.log(kevin);
// console.log(ronald);
/// con esto le hacemos por diferente
let ronald ={
    nombre:"rata"
};
let kevins = Object.assign({},ronald);
console.log(kevins);
console.log(ronald);
delete ronald.nombre;
kevins.nombre="Kathe";
console.log(kevins);
console.log(ronald);




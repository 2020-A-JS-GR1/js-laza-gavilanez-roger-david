// 04-funciones.js NO TIPADO
function soloNumero(a,b,c) {
    return a-b+c;
}
function sololetras(a,b,c) {
    console.log(a,b,c);
}
soloNumero('v',true,[1,2,3]);
soloNumero();
soloNumero(1,2,3,4,5,6,7);
//existe funciones que devuelve nada
sololetras();
////////// Funciones nombradas
function funcionnombrada() {
}
/////////Anonimas
const funcionNombradaCinco =(x)=>{
    return x+1;

};
const funcionNombradaSeis =(x)=>x+1;
const funcionNombradaSiete =x=>x+1;
const funcionNombradaOcho =(x,y,z)=>x+y+z;
let total=0;
function sumarNumeros(numeroInicial,//1 valor inicial
                      ...otrosNumeros){//parametros Inf al poner ...
    otrosNumeros.forEach(
        (valorActual)=>{
            total=total+valorActual;
        }
    );
    return numeroInicial + otrosNumeros.reduce((a,v)=>a+v,0);

}
sumarNumeros(1,2,3,4,5,6,7,8,9,10);
// funciones arreglos
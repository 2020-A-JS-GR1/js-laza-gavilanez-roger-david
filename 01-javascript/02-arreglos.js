const arreglo=[1,2,4,9,7,8];
const arregloTodo=[1,2.3,"Roger",undefined,null,{},[1,2,true]];
//arreglo=1;
let cual="ASD";
cual=1;
cual=true;
cual=undefined;
cual=null;
cual={};

////fin


////// for of

for (let numero of arreglo){
   // console.log('numero',numero)
}

///// for in
for (let numero in arreglo){
    //console.log('numero',numero)
}
//posiciones in
// valor of
console.log('Operaciones');
////const arreglo=[1,2,4,6,7,8];
arreglo.push(11);// añade al final de un elemento
arreglo.push(); // elimina al final de un elemento
///////
arreglo.unshift(5);// añade al principio del arreglo
console.log(arreglo);
/////
arreglo.splice(0,1);
console.log(arreglo);
//queremos empezar desde , eliminar elelemtos , agregar items
arreglo.splice(0,0,10,11,12);
console.log(arreglo);
////////////////
const indice= arreglo.indexOf(9);
console.log('indice',indice);
arreglo.splice(indice,1);
console.log(arreglo);
////////////////////

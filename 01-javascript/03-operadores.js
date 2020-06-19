const arreglo = [
    {
        id:1,
        nombre: 'Roger',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];
//Funciones con parametros

//FIND
//devolver respuestaFind TRUTY FALSY
// const respuestaFind=arreglo.
//     find(
//         function (valoractual,indiceactual,arreglocompleto) {
//             console.log('valorActual',valoractual);
//             console.log('indiceactual',indiceactual);
//             console.log('arreglocompleto',arreglocompleto);
//             return valoractual.nombre==="Cristian";
//         }
// );
// console.log('respuestaFind',respuestaFind);

//FINDINDEX
const respuestaINDEX=arreglo.
findIndex(
    function (valoractual,indiceactual,arreglocompleto) {
        console.log('valorActual',valoractual);
        console.log('indiceactual',indiceactual);
        console.log('arreglocompleto',arreglocompleto);
        return valoractual.nombre==="Cristian";
    }
);
console.log('respuestaFind',respuestaINDEX);
//////
const respuestaForEach=arreglo.
forEach(
    function (valoractual,indiceactual,arreglocompleto) {
        console.log('valorActual',valoractual);
        console.log('indiceactual',indiceactual);
        console.log('arreglocompleto',arreglocompleto);
        return valoractual.nombre==="Cristian";
    }
);
console.log('respuestaForEach',respuestaForEach);
////////////////// MODIFICANDO EL ARREGLO
//MAP DEVUELVE UN NUEVO ELEMNTO
const respuestaMap=arreglo.
map(
    function (valoractual,indiceactual,arreglocompleto) {
        valoractual.nota=valoractual.nota+1;
        return valoractual;
    }
);
console.log('respuestaMap',respuestaMap);
/////LO QUE HACE EL MAP CREA UN NUEVO ARREGLO , LA RESPUESTA QUE RECIBE ES UN NUEVO ARREGLO
//console.log('arreglo',arreglo);

const respuestaMapNuevo=arreglo.
map(
    function (valoractual,indiceactual,arreglocompleto) {
        return valoractual.nota;
    }
);
console.log('respuestaNuevo',respuestaMapNuevo);
/////LO QUE HACE EL MAP CREA UN NUEVO ARREGLO , LA RESPUESTA QUE RECIBE ES UN NUEVO ARREGLO
//console.log('arreglo',arreglo);

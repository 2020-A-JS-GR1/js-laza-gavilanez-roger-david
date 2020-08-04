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
console.log(typeof arreglo);
let nuevoElemento;
let primarynote=0;
const resultado= arreglo.
    map((valorActual,valorIndice,arreglo)=> {
    const nombre =  valorActual.nombre.split("");
    nombre.forEach(element =>{
        if(element==="a" || element ==="e" || element==="i" || element ==="o" || element==="u"){
            primarynote=primarynote+10;
        }
        else{
           primarynote=primarynote+5;
        }
        //console.log(primarynote);
    });
        nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota+(primarynote/100)
        };
    return nuevoElemento;
}).filter(
    (valoractual,indiceactual,nuevoElemento)=>{
        return valoractual.nota>14;
    });
// .map(
//     ((valorActual,valorIndice,arreglo)=>{
//         return valorActual.nombre
//     })
// );
console.log('Lista de estudiantes\n',arreglo);
console.log('Pasados el semestre\n',resultado);
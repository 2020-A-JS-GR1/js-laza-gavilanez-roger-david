const roger={
    nombre:'Roger',

};
const kevin={
    apellido:'Tipantiza',

};
const arregloUno=[1,2,4,5];
const arregloDos=[1,2,3,4];
const superArreglo=[
    ...arregloUno,
    ...arregloDos
];
superArreglo[0]=100;
console.log('superArreglo',superArreglo);
console.log('arregloUno',arregloUno);
const rogerkevin={
    ...roger,
    ...kevin,
};
rogerkevin.nombre='kathe';
console.log('rogerKevin',rogerkevin);
console.log('roger',roger);

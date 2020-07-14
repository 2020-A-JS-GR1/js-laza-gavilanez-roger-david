function sumamrNumero(
    numeroinicial:number,
    ...numerosASumarse:number[]
): number{
    return numeroinicial;
}
sumamrNumero(1,2,3,4,5,6,7);
function  imprimir(mensaje:string): void {
    console.log('Hola '+mensaje);
}
const arregloNumero:number[]=[2,3,4];
const arregloNumeroDos:Array<number>=[2,3,4];
const arregloNumeroTres:(number|string|boolean)[]=["a",true,4];
const arregloNumeroCuatro:Array<number|string|boolean>=["a",3,false];

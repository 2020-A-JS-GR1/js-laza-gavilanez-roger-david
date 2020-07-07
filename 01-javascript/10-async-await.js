const promesaLeerArchivo = ()=> {
    return new Promise(
        (res, rej) => {
            res('CONTENIDO LEER ARCHIVO');
        }
    );
};
    const promesaEscribirArchivo = ()=>{
    return new Promise(
        (res, rej) => {
            //res('CONTENIDO LEER ARCHIVO');
            rej('Error :(')
        }
    );
};
async function ejercicio() {
    console.log('1');
    try{
        console.log('2');
        const contenidoArchivoActual=await  promesaLeerArchivo();
        console.log("Archivo Actual"+contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log('NUEVO CONTENIDO '+nuevoContenido);
        console.log('5');
    }
    catch (e) {
            console.log(e)

    }
    console.log('6');
    console.log('7');
}
const respuestaEjercicio=ejercicio();
//console.log('respuesta Ejercicio'+respuestaEjercicio);
//console.log('promesa Escribir Archivo'+promesaLeerArchivo());
//console.log('promesa Escribir Archivo'+promesaEscribirArchivo());
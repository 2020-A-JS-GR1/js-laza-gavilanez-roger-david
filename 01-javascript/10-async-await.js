const promesaLeerArchivo =new Promise();
const promesaEscribirArchivo = new Promise();
async function ejercicio() {
    console.log('1');
    try{
        const contenidoArchivoActual=await  promesaLeerArchivo();
        await promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
    }
    catch (e) {
            console.log(e)

    }
}
const fs = require('fs');
function promesaLeerArchivo(locacion) {
    const contenido=new Promise(
        (resolve,reject)=>{
            fs.readFile(
                locacion,
                'utf-8',
                (error,contenido)=>{
                    if(error){
                        reject(error);
                        console.error('Hubo error',error);
                    }else{
                        resolve(contenido);
                    }
                }
            );
        });
    return contenido;
}
function escribeEnArchivo(path,contenido,contenidoNuevo){
    const escribir=new Promise(
        (resolve,reject)=>{
            fs.writeFile(path, contenido +"\n"+ contenidoNuevo ,'utf-8',
                (error)=>{
                    if(error){
                        console.error('Hubo error',error);
                    }else{

                        resolve();
                    }
                }

            );
        });
    return escribir;
}
async function ejercicio(contenidoNuevo) {
    try{
        const contenidoArchivoActual=await  promesaLeerArchivo('./02-deber.txt');
        await escribeEnArchivo('./02-deber.txt',contenidoArchivoActual,contenidoNuevo);
        const contenidoFinal=await  promesaLeerArchivo('./02-deber.txt');
        console.log(contenidoFinal);
    }
    catch (e) {
        console.log(e);
    }
}
ejercicio('uy primero un cafesito');

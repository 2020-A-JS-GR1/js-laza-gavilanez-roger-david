const fs = require('fs');

function leerArchivo(locacion) {
    const contenido=new Promise(
        (resolve,reject)=>{
           // try{
                fs.readFile(// callback
                    locacion,
                    'utf-8',
                    (error,contenido)=>{
                        if(error){
                            reject(error);
                            console.error('Hubo error',error);
                        }else{
                           // console.log(contenido);
                           resolve(contenido);
                        }
                    }
                );
            // }
            // catch (e) {
            //     reject('Error',e);//catch
            // }
        });
     return contenido;
}
function escribirArchivo(path,contenido,contenidoNuevo){
    const escribir=new Promise(
        (resolve,reject)=>{
         //   try{
                fs.writeFile(path, contenido +"\n"+ contenidoNuevo ,'utf-8',
                    (error)=>{
                        if(error){
                            console.error('Hubo error',error);
                        }else{
                            resolve();
                        }
                    }

                );
            // }
            // catch (e) {
            //     reject('Error',e);//catch
            // }
        });
    return contenido;
}
leerArchivo('./09-ejercicio-lec-esc-promesas.txt')
    .then(
        (escribir)=>{
            //console.log('Contenido then', numeroPar);
            //NO PONER ADENTRO
            return escribirArchivo('./09-ejercicio-lec-esc-promesas.txt',escribir,'que sexy');// SOLO SE PUEDE USAR PROMESA
        }
    )
    .then(
        (lectura)=>{
            console.log('Contenido\n'+lectura);
            return leerArchivo('./09-ejercicio-lec-esc-promesas.txt');
        }
    )
    .catch(
        (error)=>{
            console.error('Contenido catch', error)
        }
    );

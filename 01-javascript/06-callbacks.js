const fs = require('fs');
console.log('Primero');

// fs.readFile(// callback
//    './06-ejemplo.txt',
//    'utf-8',
//     (error,contenido)=>{
//        if(error){
//            console.error('Hubo error',error);
//        }else{
//            console.log(contenido);
//        }
//     }
// );

fs.readFile(// callback
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{
        if(error){
            console.error('Hubo error',error);
        }else{
            console.log(contenido);
        }
    }
);
console.log('Final');

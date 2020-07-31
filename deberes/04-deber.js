const fs = require('fs');
const inquirer = require('inquirer');
/////////////PERSONA
async function main() {
    console.log('************Bienvenido Seleciona Una Opcion Guap@*****************');
    let menu='';
    try {
        menu = await inquirer.prompt([
            {
                type: 'rawlist',
                name: 'selecionado',
                message: 'Menu',
                choices:['Personas Registradas',
                    'Ingresar Nuevo Usuario',
                    'Mascotas',
                    'Eliminar Usuario',
                    'Modificar',
                    'Salir']
            },
        ]);
        console.log('',Object.values(menu).toString());
        if(Object.values(menu).toString()==='Personas Registradas'){
            console.log('******Personas Registradas***********');
            let personas=await promesaLeerArchivo('04-deber-persona.txt');
            console.log(await JSON.parse(personas));
            main();
        }
        if(Object.values(menu).toString()==='Ingresar Nuevo Usuario'){
            console.log('******Ingresar Nuevo Usuario***********');
            ingresarPersona();
            //main();
        }
        if(Object.values(menu).toString()==='Eliminar Usuario'){
            console.log('******Eliminar Usuario Papu***********');
            try{
                const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-persona.txt');
                await eliminarUsuario(contenidoArchivoActual)
            }
            catch (e) {
                console.log(e);
            }
           // eliminarUsuario();
            //main();
        }
        if(Object.values(menu).toString()==='Modificar'){
            console.log('******Modificar Usuario Papu***********');
            try{
               const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-persona.txt');
               modificarUsuario(contenidoArchivoActual)
            }
            catch (e) {
                console.log(e);
            }
            // eliminarUsuario();
            //main();
        }
        if(Object.values(menu).toString()==='Mascotas'){
            await nombrePersonas();
        }
        if(Object.values(menu).toString()==='Salir'){
            console.log('******Muchas Gracias***********');
        }

    }catch (e) {
        console.log(e);
    }
}
async function ingresarPersona(){
    try {
        const persona = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa Tu Nombre'
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa Tu Apellido'
            },
            {
                type: 'number',
                name: 'edad',
                message: 'Ingresa tu edad'
            },
            {
                type: 'confirm',
                name: 'estado',
                message: 'Soltero?'
            },
            {
                type: 'number',
                name: 'cedula',
                message: 'Ingrese Cedula'
            }
        ]);
        console.log('**************Datos de Persona*************');
        registrar(persona);
        console.log('**************Persona Registrada*************');
    }catch (e) {
        console.log(e);
    }
}
async function registrar(contenidoNuevo) {
    console.log(contenidoNuevo);
    try{
        const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-persona.txt');
        await escribeEnArchivo('./04-deber-persona.txt',contenidoArchivoActual.replace(']',''),JSON.stringify(contenidoNuevo)+']');
    }
    catch (e) {
        console.log(e);
    }
}
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
async function eliminarUsuario(contenido){
    let menuEliminar='';
    const obj=JSON.parse(contenido);
    const nombredDePersonas= await obj
        .map((valorActual,valorIndice,obj)=> {
                const nuevoElemento = valorActual.nombre;
                return nuevoElemento;
        });
        nombredDePersonas.push('Salir');
        // console.log(nombredDePersonas);
        try {
            menuEliminar = await inquirer.prompt([
                {
                    type: 'rawlist',
                    name: 'selecionado',
                    message: 'Eliminar Usuario',
                    choices: nombredDePersonas
                },
            ]);
         const usuarioSelecionado = await Object.values(menuEliminar).toString();
        if(Object.values(menuEliminar).toString()==='Salir'){
            console.log('******Muchas Gracias***********');
        }
        else {
            obj
                .map((valorActual,valorIndice,obj)=> {
                    //const  = valorActual.nombre;
                    if(valorActual.nombre===usuarioSelecionado){
                        //console.log(valorActual);
                        obj.splice(valorIndice,1);
                        //console.log("YA ELIMINADO ",obj);
                        escribeEnArchivoMascota('./04-deber-persona.txt',JSON.stringify(obj));
                        console.log('******************ELIMINADO******************');
                        main();
                    }
                });
        }
    }catch (e) {

    }

}
async function modificarUsuario(contenido){
    let menuModificar='';
    const obj=await JSON.parse(contenido);
    const nombredDePersonas= await obj
        .map((valorActual,valorIndice,obj)=> {
            const nuevoElemento = valorActual.nombre;
            return nuevoElemento;
        });
    nombredDePersonas.push('Salir');
    // console.log(nombredDePersonas);
    try {
        menuModificar = await inquirer.prompt([
            {
                type: 'rawlist',
                name: 'selecionado',
                message: 'Eliminar Usuario',
                choices: nombredDePersonas
            },
        ]);
        const usuarioSelecionado = await Object.values(menuModificar).toString();
        if(Object.values(menuModificar).toString()==='Salir'){
            console.log('******Muchas Gracias***********');
        }
        else {
            await obj
                .map((valorActual,valorIndice,obj)=> {
                    //const  = valorActual.nombre;
                    if(valorActual.nombre===usuarioSelecionado){
                        //console.log(valorActual);
                       const num=modificarPersona(valorActual);
                       // obj.splice(valorIndice,1);
                        //console.log("YA ELIMINADO ",obj);
                       // escribeEnArchivoMascota('./04-deber-persona.txt',JSON.stringify(obj));

                       // main();
                    }

                });
           // console.log('******************Modificando******************');
        }
    }catch (e) {

    }
}
async function modificarPersona(obj){
    try {
        const persona = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa Tu Nombre'
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa Tu Apellido'
            },
            {
                type: 'number',
                name: 'edad',
                message: 'Ingresa tu edad'
            },
            {
                type: 'confirm',
                name: 'estado',
                message: 'Soltero?'
            },
            {
                type: 'number',
                name: 'cedula',
                message: 'Ingrese Cedula'
            }
        ]);

        try{
            const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-persona.txt');
          //  const objBD=await JSON.parse(contenidoArchivoActual);
          //  const datoPersonaMascota= await datosPersonaMascota(objBD,dueno);
          //  const nuevoDatoPersonaMascota= await datosPersonaMascota(objBD,dueno);
            console.log('**************Datos de Persona Antes de  Modificar*************');
            console.log(obj);
            const transformar=JSON.stringify(obj);
            await escribeEnArchivoMascota('./04-deber-persona.txt',await contenidoArchivoActual.replace([transformar],'+'));
            obj.nombre=persona.nombre;
            obj.apellido=persona.apellido;
            obj.edad=persona.edad;
            obj.estado=persona.estado;
            obj.cedula=persona.cedula;
            console.log('**************Datos de Persona Modificada*************');
            console.log(obj);
            const contenidoArchivoDespues=await  promesaLeerArchivo('./04-deber-persona.txt');
            await escribeEnArchivoMascota('./04-deber-persona.txt',await contenidoArchivoDespues.replace(['+'],JSON.stringify(obj)));
            //await verMascotaDePersona(dueno);
            console.log('*************Usuario Modificado********************');
            //nombrePersonas();

        }
        catch (e) {
            console.log(e);
        }

    //     obj.nombre=persona.nombre;
    //      obj.apellido=persona.apellido;
    //      obj.edad=persona.edad;
    //      obj.estado=persona.estado;
    //      obj.cedula=persona.cedula;
    //
    //
    //     console.log('**************Persona Modificada*************');
    // }catch (e) {
    //     console.log(e);
     //}
}
catch (e) {
    //     console.log(e);
    }
    main();
}
/////////////MASCOTA
async function mascotasMenu(nombreDePersonas) {
    console.log('************Bienvenido Menu de Macotas Guap@*****************');
    console.log('************Seleciona Un Usuario*****************');
    let menuUsuario='';
    try {
        menuUsuario = await inquirer.prompt([
            {
                type: 'rawlist',
                name: 'selecionado',
                message: 'Menu',
                choices:nombreDePersonas
            },
        ]);
        if(Object.values(menuUsuario).toString()==='Salir'){
            console.log('******Muchas Gracias***********');
        }
        if(Object.values(menuUsuario).toString()==='Regresar Al Menu Personas'){
            main();
        }else{
            console.log('************Que Quieres Hacer Guap@?*****************');
            const usuarioSelecionado = await Object.values(menuUsuario).toString();
            let menu='';
            try {
                menu = await inquirer.prompt([
                    {
                        type: 'rawlist',
                        name: 'selecionado',
                        message: 'Para este Usuario',
                        choices:['Ver las Mascotas','Ingresar una Nueva Mascota',
                        'Modificar Datos Mascota','Eliminar Mascota','Salir']
                    },
                ]);
                if(Object.values(menu).toString()==='Salir'){
                    console.log('******Muchas Gracias***********');
                }else{
                    if(Object.values(menu).toString()==='Ingresar una Nueva Mascota'){
                        console.log('******Ingresar una Nueva Mascota***********');
                        ingresarMacota(usuarioSelecionado);
                        return 0;
                    }
                    if(Object.values(menu).toString()==='Ver las Mascotas'){
                        console.log('******Ver Las mascotas***********');
                        await verMascotaDePersona(usuarioSelecionado);
                        await nombrePersonas();
                        return 0;
                    }
                    if(Object.values(menu).toString()==='Modificar Datos Mascota'){
                        console.log('******Muchas Gracias***********');
                    }
                    if(Object.values(menu).toString()==='Eliminar Mascota'){
                        console.log('******Muchas Gracias***********');
                    }
                }
            }catch (e) {
                console.log(e);
            }
        }
    }catch (e) {
        console.log(e);
    }
}
async function ingresarMacota(personaSelecionada){
    try {
         const mascota = await inquirer.prompt([
            {
                type: 'input',
                name: 'tipo',
                message: 'Ingresa El Tipo'
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa El Nombre'
            },
            {
                type: 'input',
                name: 'dice',
                message: 'Ingresa Lo que dice'
            },
             {
                 type: 'number',
                 name: 'edad',
                 message: 'Edad de la Mascota'
             },
             {
                 type: 'confirm',
                 name: 'crias',
                 message: 'Con crias?'
             }
        ]);
        const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-mascota.txt');
        const objBD=await JSON.parse(contenidoArchivoActual);
        await objBD.map((valorActual,valorIndice,objDB)=> {
                if(valorActual.Dueno===personaSelecionada){
                    console.log('**************Datos de la Mascota*************\n');
                    registrarMascota(mascota,personaSelecionada);
                    console.log('\n*************Fin de Datos*************');
                    return 0;
                }
                else{
                    //mascota["Dueno"]=personaSelecionada;
                    console.log('**************Datos de la Mascota*************\n');
                    registrarMascotaYUsuario(mascota,personaSelecionada);
                    //console.log(mascota);
                    console.log('\n*************Fin de Datos*************');
                    return 0;
                }
            });

    }catch (e) {
        console.log(e);
    }
}
async function registrarMascotaYUsuario(mascota,persona){
    const nuevoRegistro= new Object({
        Dueno:persona,
        mascota:[{
            tipo:mascota.tipo,
            nombre:mascota.nombre,
            dice:mascota.dice,
            edad:mascota.edad,
            crias:mascota.crias
        }]
    });
    console.log(nuevoRegistro);
    try{
        const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-mascota.txt');
        await escribeEnArchivo('./04-deber-mascota.txt',contenidoArchivoActual.replace(']}]',']}'),JSON.stringify(nuevoRegistro)+']');
        nombrePersonas();
    }
    catch (e) {
        console.log(e);
    }
}
async function registrarMascota(mascotaYDueno,dueno) {
    console.log(mascotaYDueno);
    try{
        const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-mascota.txt');
        const objBD=await JSON.parse(contenidoArchivoActual);
        const datoPersonaMascota= await datosPersonaMascota(objBD,dueno);
        const nuevoDatoPersonaMascota= await datosPersonaMascota(objBD,dueno);
        const transformar=JSON.stringify(datoPersonaMascota);
        await escribeEnArchivoMascota('./04-deber-mascota.txt',await contenidoArchivoActual.replace([transformar],'+'));
        await nuevoDatoPersonaMascota.mascota.push({
            tipo:mascotaYDueno.tipo.toString(),
            nombre:mascotaYDueno.nombre.toString(),
            dice:mascotaYDueno.dice.toString(),
            edad:mascotaYDueno.edad.toString(),
            crias:mascotaYDueno.crias.toString()
        });
        const contenidoArchivoDespues=await  promesaLeerArchivo('./04-deber-mascota.txt');
        await escribeEnArchivoMascota('./04-deber-mascota.txt',await contenidoArchivoDespues.replace(['+'],JSON.stringify(nuevoDatoPersonaMascota)));
        //await verMascotaDePersona(dueno);
        console.log('*************Mascota Del Usuario ',dueno,' Registrada Exitosamente Guap@********************');
        nombrePersonas();

    }
    catch (e) {
        console.log(e);
    }

}
async function datosPersonaMascota(objBD,dueno) {
    //console.log(objBD);
    let encontrado;
    const selecionarPersonassMascota=await objBD
        .map((valorActual,valorIndice,objBD)=> {
            if(valorActual.Dueno===dueno){
               encontrado = valorActual;
                //return encontrado;
            }
            else{
              //  return;
            }

        });
   return encontrado;

}
function escribeEnArchivo(path,contenido,contenidoNuevo){
    const escribir=new Promise(
        (resolve,reject)=>{
            fs.writeFile(path, contenido +","+ contenidoNuevo ,'utf-8',
                (error)=>{
                    if(error){
                        console.error('Hubo error',error);
                    }else{

                        resolve();
                    }
                }

            );
        });
    main();
    return escribir;
}
async function nombrePersonas() {
    try{
        const contenidoArchivoActual=await  promesaLeerArchivo('./04-deber-persona.txt');
        obtenerNombre(contenidoArchivoActual)
    }
    catch (e) {
        console.log(e);
    }
}
async function obtenerNombre(contenido) {
    const obj=JSON.parse(contenido);
    const nombredDePersonas= obj
        .map((valorActual,valorIndice,obj)=> {
            const nuevoElemento = valorActual.nombre;
            return nuevoElemento;
        });
    nombredDePersonas.push('Regresar Al Menu Personas');
    nombredDePersonas.push('Salir');
    mascotasMenu(nombredDePersonas);
}
async function verMascotaDePersona(usuario) {
    try{
        const mascotasDelUsuario= await promesaLeerArchivo('./04-deber-mascota.txt');
        const objBD=await JSON.parse(mascotasDelUsuario);
        const datoPersonaMascota= await datosPersonaMascota(objBD,usuario);
        console.log(datoPersonaMascota);
    }
    catch (e) {
        console.log(e);
    }
}
async function escribeEnArchivoMascota(path,contenido){
    const escribir= await new Promise(
        (resolve,reject)=>{
            fs.writeFile(path,contenido,'utf-8',
                (error)=>{
                    if(error){
                        console.error('Hubo error',error);
                    }else{

                        resolve();
                    }
                }

            );
        });
    // nombrePersonas();
    return escribir;
}
require('events').EventEmitter.defaultMaxListeners = 100;
main();
const fs = require('fs');
const inquirer = require('inquirer');
async function ingresarPersona(){
    console.log('***************Registro Usuario*************');
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
                message: 'Ingresa Tu Nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad'
            },
            {
                type: 'input',
                name: 'estado',
                message: 'Estado Civil'
            },
            {
                type: 'input',
                name: 'anime',
                message: 'Anime'
            }
        ]);
        console.log('Persona',persona);
    }catch (e) {
        console.log(e);
    }
}
async function iniciar() {
    console.log('Selecciona una opcion\n -1 Ingresar al menu \n-Cualquier tecla Continuar');
    let menu='';
    let selecion=0;
    while(selecion!=3){
   // while(Object.values(menu).toString()!='Salir'){
        try {
            menu = await inquirer.prompt([
                {
                    type: 'rawlist',
                    name: 'selecionado',
                    message: 'Menu',
                    choices:['Personas Registradas',
                        'Ingresar Nuevo Usuario',
                        'Salir']
                },
            ])
                .then(answers => {
                     //while(Object.values(answers).toString()!='Salir'){
                         if(Object.values(answers).toString()==='Personas Registradas'){
                             selecion=1;
                             console.log('Persona Registrada')
                         }
                         if(Object.values(answers).toString()==='Ingresar Nuevo Usuario'){
                             selecion=2;
                             ingresarPersona();
                             console.log('Ingresa Nuevo Usuario')
                         }
                    if(Object.values(answers).toString()==='Salir'){
                        selecion=3;
                              console.log('******Muchas Gracias***********');
                    }
                    // }

                    // console.log(Object.values(answers).toString());
                 });

           // console.log('',Object.values(menu).toString());
           //  if(Object.values(menu).toString()==='Personas Registradas'){
           //      console.log('ya');
           //  }
           //  if(Object.values(menu).toString()==='Ingresar Nuevo Usuario'){
           //      ingresarPersona();
           //  }
           //  if(Object.values(menu).toString()==='Salir'){
           //      console.log('******Muchas Gracias***********');
           //      //ingresarPersona();
           //  }
        }catch (e) {
            console.log(e);
        }
    }
}
iniciar();
console.log('ya');
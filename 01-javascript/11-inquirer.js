const inquirer = require('inquirer');
async function main(){
    try {
        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa Tu Nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad'

            }
        ]);
        console.log('Respuesta',respuesta);

    }catch (e) {
        console.log(e);
    }

}
main();
//CRUD --> CON ESTO ENTIDADES5 DATOS TRING INT BOOL
//UNO A MUCHOS GUUARDADOS
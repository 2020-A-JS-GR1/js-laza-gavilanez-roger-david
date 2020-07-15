class Persona{
    public nombre:string;
    public  apellido:string;
    static nombreReferencial:string='Humano';
    private nombreYApellido:string='';
    constructor(
        nombreParametro: string,
        apellidoParametro:string,
    ) {
        this.nombre=nombreParametro;
        this.apellido=apellidoParametro;
        this.nombreYApellido=this.nombre+' '+this.apellido;
    }
    private mostrarNombreApellido(){
        return this.nombreYApellido;

    }
}
class Usuario extends Persona {
    constructor(
        nombreParametro:string,
        apellidoParametro:string,
        public cedula:string,
        public estadoCivil:string,
    ) {
        super(nombreParametro,apellidoParametro);
    }
}
const roger=new Usuario(
    'Roger',
    'Laza',
    '13',
    'soltero'
);
console.log(roger.nombre);
console.log(roger.apellido);
console.log(roger.cedula);
console.log(roger.estadoCivil);
console.log('Hola')

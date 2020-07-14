class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreReferencial = 'Humano';
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const roger = new Usuario('Roger', 'Laza', '13', 'soltero');
console.log(roger.nombre);
console.log(roger.apellido);
console.log(roger.cedula);
console.log(roger.estadoCivil);

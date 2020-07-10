interface Usuario{
    nombre: string;
    apellido:string;
    edad?: number;//opcional
    sueldo: number;//opcional
    casado: boolean;
    estadoo: 'AC' | 'IN' | 'BN';
    imprimirUsuario:(mensaje:string)=>string;
    calcularImpuesto:(impuesto:number)=>number;
    estadoActual:()=>'AP'|'AF'|'AT';


}
const adrian: Usuario={

    nombre:'Roger',
    apellido:'Laza',
    casado: false,
    estadoo:"AC",
    sueldo: 100,
    imprimirUsuario: (mensaje : string)=>{

        return'El mensaje es:' + mensaje;
    },
    calcularImpuesto:(impuesto:number) => {
        return this.sueldo+this.sueldo*impuesto;
    },
    estadoActual:()=>{
        switch (this.estadoo) {
            case "AC":
                return "AP";
            case "IN":
                return "AF";
            case "BN":
                return "AT";

        }
    }
};
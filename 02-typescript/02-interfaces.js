var _this = this;
var adrian = {
    nombre: 'Roger',
    apellido: 'Laza',
    casado: false,
    estadoo: "AC",
    sueldo: 100,
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es:' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estadoo) {
            case "AC":
                return "AP";
            case "IN":
                return "AF";
            case "BN":
                return "AT";
        }
    }
};

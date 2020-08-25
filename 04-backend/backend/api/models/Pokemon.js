/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required:true,
    },
    //relaciones
    usuario:{
      model:'Usuario',//Modelo el cual relacionamos
      required:true,//Requerida 1 -0
      // false     //Opcional 0 -N
    },
    batallas:{
      collection:'Batalla',// Modelo  a relacionarce
      via:'pokemon'//NOMBRE ATRIBUTO FK en el modelo relacion
    }

  },

};


/**
 * Batalla.js
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
    pokemon:{
      model:'Pokemon',//Modelo el cual relacionamos
      required:true,//Requerida 1 -0
      // false     //Opcional 0 -N
    }

  },
};

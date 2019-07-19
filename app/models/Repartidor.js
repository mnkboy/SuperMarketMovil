const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const RepartidorSchema = new Schema({
	nombre:{
		type: String,
		require: true
	},
	apellido:{
		type: String,
		required:true
	},
	correo:{
		type:String,
		required:true,
		unique:true
	},
	nombre_usuario:{
		type:String,
		required:true,
		unique:true
	},
	contrasena:{
		type:String,
		required:true,
		unique:true
	},
	activo:{
		type:Boolean,
		default:true,
	}

});

module.exports = mongoose.model('repartidor', RepartidorSchema);
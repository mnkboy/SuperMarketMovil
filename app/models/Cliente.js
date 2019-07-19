const mongoose  =  require('mongoose');
const Schema =  mongoose.Schema;

const ClienteSchema = new Schema({
	nombre:{
		type:String,
		required:true
	},
	apellido:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	}

}, {collection:"clientes",timestamps:true} );

module.exports =  mongoose.model('clientes',ClienteSchema);
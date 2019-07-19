const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Vendedor = new Schema({
	longitud:{
		type:String,
		required:true
	},	
	latitud:{
		type:String,
		default:false
	},	
}, {collection:'vendedores', timestamps:true} );

module.exports = mongoose.model('vendedores', Vendedor);
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Venta = new Schema({
	Descripcion:{
		type:String,
		required:true
	},	
	Entregado:{
		type:Boolean,
		default:false
	},
	Pagado:{
		type:Boolean,
		default:false
	},
	Finalizado:{
		type:Boolean,
		default:false
	}
}, {collection:'ventas', timestamps:true} );

module.exports = mongoose.model('ventas', Venta);
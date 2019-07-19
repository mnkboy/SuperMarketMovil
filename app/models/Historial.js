const mongoose =  require('mongoose');
const Schema =  mongoose.Schema

const HistorialSchema =  new Schema({	
	ventaHistorica:{
		type:String,
		required:true
	},
	cliente:{
		type:Schema.Types.ObjectId,
		ref:'clientes'
	}	
	
}, { collection:"historiales", timestamps:true } )

module.exports = mongoose.model('historiales',HistorialSchema);
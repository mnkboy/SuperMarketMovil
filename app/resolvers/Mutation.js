//============== Imports ==============
const VentaModel =  require('../models/Venta');
const RepartidorModel =  require('../models/Repartidor');
const VendedorModel =  require('../models/Vendedor');
const ClienteModel =  require('../models/Cliente');
const HistorialModel =  require('../models/Historial');

//============== Ventas ==============
const createVenta =  async(root,params,context,info) => {
	const newRol =  await VentaModel.create(params.data)
		.catch( e => {throw new Error('Ocurrio un problema'); } );
	if(!newRol) throw new Error('Fallo al crear venta');
	return newRol.toObject();
};

const deleteVenta =  async(root,params,context,info) => {
	const rol = await VentaModel.findById(params.id);
	if(!rol) throw new Error('Venta no existe');
	rol.Finalizado = true;
	await rol.save({new:true});
	return 'Venta eliminada';
};

//============== Repartidor ==============
const createRepartidor =  async(root,params,context,info) => {
	const newRepartidor =  await RepartidorModel.create(params.data)
		.catch( e => {throw new Error('Ocurrio un problema'); } );
	if(!newRepartidor) throw new Error('No se creo el \'repartidor\'');
	return newRepartidor.toObject();
};

//============== Vendedor ==============
const createVendedor =  async(root,params,context,info) => {
	const newRol =  await VendedorModel.create(params.data)
		.catch( e => {throw new Error('Ocurrio un problema'); } );
	if(!newRol) throw new Error('Fallo al crear vendedor');
	return newRol.toObject();
};

const deleteVendedor =  async(root,params,context,info) => {
	const rol = await VendedorModel.findById(params.id);
	if(!rol) throw new Error('Vendedor no existe');
	rol.Finalizado = true;
	await rol.save({new:true});
	return 'Vendedor eliminada';
};

//============== Cliente ==============
const createCliente =  async(root,params,context,info) => {
	const newRol =  await ClienteModel.create(params.data)
		.catch( e => {throw new Error('Ocurrio un problema'); } );
	if(!newRol) throw new Error('Fallo al crear cliente');
	return newRol.toObject();
};

const deleteCliente =  async(root,params,context,info) => {
	const rol = await ClienteModel.findById(params.id);
	if(!rol) throw new Error('Cliente no existe');
	rol.Finalizado = true;
	await rol.save({new:true});
	return 'Cliente eliminada';
};

//============== Historial ==============
const createHistorial = async(root,params,context,info) =>{
	const {user} = context;
	params.data.cliente = user
	
	const historial = await HistorialModel.create(params.data)
								.catch( e => {throw new Error("Error al crear historial")} )
	const newHistorial = await HistorialModel.findOne({_id:historial._id}).populate('cliente');
	await ClienteModel.findByIdAndUpdate(user.id,{$push:{historiales:historial}})
	return newHistorial;
}

const deleteHistorial = async(root,params,context,info) => {
	const {id} = params;
	const {user} = context;
	await HistorialModel.findOneAndUpdate({_id:id,cliente:user._id},{$set:{is_active:false}})
	return "Historial eliminado"
}

//============== Export Modules ==============
module.exports = {
	createVenta,
	deleteVenta,
	createRepartidor,
	createVendedor,
	deleteVendedor,
	createCliente,
	deleteCliente,
	createHistorial,
	deleteHistorial
};

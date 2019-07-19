//============== Imports ==============
const VentaModel =  require('../models/Venta');
const RepartidorModel =  require('../models/Repartidor');
const VendedorModel =  require('../models/Vendedor');

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

//============== Export Modules ==============
module.exports = {
	createVenta,
	deleteVenta,
	createRepartidor,
	createVendedor,
	deleteVendedor
};

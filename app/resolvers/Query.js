const VentaModel =  require('../models/Venta');

const listVentas =  async(root,params,context,info) => {
	const rols = await VentaModel.find().populate('rols');
	console.log(rols);
	return rols;
};

const singleVenta  =  async(root,params,context,info) => {

	const rol =  await VentaModel.findById(params.id);
	if (!rol) throw new Error('Venta no existe');

	return rol.toObject();
};


// eslint-disable-next-line no-unused-vars
const listaRepartidor =  async(root,params,context,info) => {
	const repartidores = await RepartidorModel.find().populate('repartidor');
	console.log(repartidores);
	return repartidores;
};

// eslint-disable-next-line no-unused-vars
const singleRepartidor  =  async(root,params,context,info) => {

	const repartidor =  await RepartidorModel.findById(params.id);
	if (!repartidor) throw new Error('Repartidor no existe');

	return repartidor.toObject();
};

const loginRepartidor = async(root,params,context,info) => {

	const repartidor =  await RepartidorModel.find({correo:params.correo, contrasena:params.contrasena});
	if (!repartidor) throw new Error('Usuario o contraseña incorrectos 1');
	return {message:'Success'};
};


module.exports = {
	listVentas,
	singleVenta,
        listaRepartidor, 
	singleRepartidor,
	loginRepartidor
};

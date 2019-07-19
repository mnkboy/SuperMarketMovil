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



module.exports = {
	listVentas,
	singleVenta
};
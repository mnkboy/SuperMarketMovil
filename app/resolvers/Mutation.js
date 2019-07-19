const VentaModel =  require('../models/Venta');

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

// const updateVenta = async(root,params,context,info) => {

// 	const {id,data} = params;

// 	const updatedVenta = await VentaModel.findOneAndUpdate({_id:id},{$set:{...data}},{new:true});

// 	return updatedVenta.toObject();

// };

module.exports = {
	createVenta,
	deleteVenta
	//updateVenta
};
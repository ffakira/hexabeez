const Sequelize = require('sequelize');

module.exports = function(sequelize) {
	const Product = sequelize.define('product', {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		quantity: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});
	return Product;
}
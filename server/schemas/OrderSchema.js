const Sequelize = require('sequelize');


module.exports = function(sequelize) {
	const Order =	sequelize.define('order', {
		ref_id: {
			type: Sequelize.STRING,
			allowNull: false
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		quantity: {
			type: Sequelize.STRING,
			allowNull: false
		},
		date_ordered: {
			type: Sequelize.DATE,
			defaultValue: new Date()
		},
		expected_arrival: {
			type: Sequelize.DATE,
			allowNull: true
		},
		order_status: {
			type: Sequelize.INTEGER,
			defaultValue: 0
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	});
	return Order;
}
const express = require('express');
const router = express.Router();


module.exports = function(db) {
	const Order = require('../schemas/OrderSchema')(db);
	
	router.get('/', (req, res) => {
		res.render('admin/index');
	});

	router.get('/orders', (req, res) => {
		// Order.findAll().then(order => console.log(JSON.stringify(order)));
		res.render('admin/order');
	});

	// @TODO: create products table
	router.get('/products', (req, res) => {
		res.render('admin/product');
	});

	router.get('/api/orders/all', (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		Order.findAll({attributes: ['name', 'quantity', 'date_ordered', 'expected_arrival', 'order_status']}).then(order => res.json(order));
	});

	router.post('/orders/create', (req, res) => {
		console.log(`Product: ${req.body.product}, Quantity: ${req.body.quantity}, Date ordered:  ${req.body.dateOrdered}`);
		Order.sync({force: true}).then(() => {
			Order.create({
				ref_id: 'abc123',
				name: req.body.product,
				quantity: req.body.quantity,
				expected_arrival: req.body.expectedArrival,
				user_id: 1
			});
		});
		res.redirect('/admin/orders');
	});
	return router;
}

// module.exports = router;
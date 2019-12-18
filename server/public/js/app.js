const app = new Vue({
	el: '#app',
	data: {
		products: null
	},

	mounted() {
		axios.get('http://localhost:3000/admin/api/orders/all').then(res => (this.products = res));
	},

	methods: {
		formatTime: function(time) {
			return `${moment(time).format("MMM DD, YYYY")} at ${moment().format("HH:mm:ss")}`;
		},
		formatDate: function(time) {
			return `${moment(time).format("MMM DD, YYYY")}`;
		},
		orderStatus: function(status) {
			switch(status) {
				case 0:
					return 'Pending';
					break;
				case 1:
					return 'Not delivered';
					break;
				case 2:
					return 'Delivered';
					break;
			}
		}
	}
});
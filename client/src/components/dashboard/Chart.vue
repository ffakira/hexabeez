<script>
import { Pie } from "vue-chartjs";
import { mapState } from 'vuex';

export default {
	extends: Pie,
	computed: {
		...mapState([
			'products',
			'colors'
		])
	},

	methods: {
		getProductQuantity() {
			let tempDate = [];
			this.products.forEach(val => tempDate.push(val.qty));
			return tempDate;
		},
		getProductName() {
			let tempDate = [];
			this.products.forEach(val => tempDate.push(val.name));
			return tempDate;
		}
	},

	mounted() {
		this.renderChart({
			labels: this.getProductName(),
			datasets: [{
				backgroundColor: this.colors,
				data: this.getProductQuantity()
			}]
		}, {legend: {display: false}});
	}
}
</script>
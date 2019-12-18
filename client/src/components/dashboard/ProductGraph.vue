<script>
import { Bar } from 'vue-chartjs';


export default {	
	extends: Bar,
	props: ['productName', 'dataHistory'],
	methods: {
		getQuantity() {
			let tempArr = [];
			this.dataHistory.forEach(val => tempArr.push(val.qty));
			return tempArr;
		},

		getDate() {
			let tempArr = [];
			this.dataHistory.forEach(val => tempArr.push(val.date));
			return tempArr;
		}
	},

	mounted() {
		console.log(this.getDate());
		this.renderChart({
			labels: this.getDate(),
			datasets: [{
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				data: this.getQuantity()
			}]
		}, 
		{
			legend: {display: false},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
		);
	}
}
</script>
<template>
	<div class="product-graph">
		<!-- Trigger the modal with a button -->
		<button type="button" class="btn btn-info" data-toggle="modal" :data-target="'#myModal' + id">Graph</button>

		<!-- Modal -->
		<div :id="'myModal' + id" class="modal fade" role="dialog">
			<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title"> {{ productName }} </h4>
				</div>
				
				<div class="modal-body">
					<ProductGraph :dataHistory="getData(id)" :productName="productName" />
				</div>
				
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

			</div>
		</div>
	</div>
</template>

<script>
	import ProductGraph from '@/components/dashboard/ProductGraph.vue';
	export default {
		data() {
			return {
				data: []
			}
		},

		props: [
			'productName',
			'id',
			'productHistory'
		],

		components: {
			ProductGraph
		},
		methods: {
			getData() {
				return this.productHistory.data;
			}
		}
	}
</script>
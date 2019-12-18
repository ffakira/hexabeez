<template>
	<div class="product-table">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Inventory Name</th>
					<th>Quantity</th>
					<th>Updated At</th>
					<th></th>
				</tr>
			</thead>
			
			<tbody>
				<tr v-bind:key="index" v-for="(product, index) in products">
					<td>{{ product.name }}</td>
					<td>{{ product.qty }}</td>
					<td>{{ product.orderedAt }}</td>
					<td>
						<ProductModal :id="index" :productHistory="productHistory[index]" :productName="product.name" />
					</td>
				</tr>
				<tr>
					<td colspan=4>
						<strong>Last updated: </strong> Nov 17, 2019 (3d ago) by Akira F.
					</td>
				</tr>
			</tbody>
		</table>


	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import ProductModal from '@/components/dashboard/ProductModal.vue'

	export default {
		computed: {
			...mapState([
				'products',
				'productHistory'
			])
		},
		components: {
			ProductModal
		}
	}
</script>
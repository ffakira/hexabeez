<template>
	<div class="orders">
		<div class="container">
			<h1>Dashboard</h1>

			<form action="">
				<div class="form-group">
					<label for="product">Product</label>
					<select class="form-control" name="product">
						<option v-for="product in products" :value="product">
							{{product}}
						</option>
					</select>
				</div>

				<div class="form-group">
					<label for="quantity">Quantity</label>
					<input class="form-control" type="text" name="quantity">
				</div>

				<div class="form-group">
					<label for="expected_arrival">Expected Arrival</label>
					<input class="form-control" type="date">
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: ["Product 1", "Product 2", "Product 3", "Product 4"]
			}
		}
	}
</script>
<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
	    <div class="row">
		    <div class="col-xs-4">
		    	<Chart />
		    </div>
		    <div class="col-xs-8">
		    	<Table />
		    </div>
	    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/dashboard/Chart.vue';
import Table from '@/components/dashboard/Table.vue'

export default {
  name: 'home',
  components: {
    Chart,
    Table
  }
}
</script>

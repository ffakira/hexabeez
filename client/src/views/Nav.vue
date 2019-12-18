<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		    <span class="sr-only">Toggle navigation</span>
		    <span class="icon-bar"></span>
		    <span class="icon-bar"></span>
		    <span class="icon-bar"></span>
		  </button>
		  <a class="navbar-brand" href="/admin">Project BeEz</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		  <ul class="nav navbar-nav">
		    <li class="active">
		    	<router-link to="/admin/dashboard">Dashboard</router-link>
		    </li>
		    <li><a href="#">Inventory</a></li>
		    <li>
		    	<router-link to="/admin/orders">Orders <span class="badge">3</span></router-link>
		    </li>
		  </ul>

		  <ul class="nav navbar-nav navbar-right">
		    <li class="dropdown">
		      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Welcome back, Akira F. <span class="caret"></span></a>
		      <ul class="dropdown-menu">
		        <li><a href="#">Pending orders <span class="badge">3</span></a></li>
		        <li><a href="#">Delivered orders <span class="badge">0</span></a></li>
		        <li role="separator" class="divider"></li>
		        <li><a href="#">Logout</a></li>
		        <li><a href="#">Change password</a></li>
		      </ul>
		    </li>
		  </ul>
		</div>
		</div>
	</nav>
</template>

<style scoped>
	.navbar {
		border-radius: 0;
		border-color: #f8f8f8;
	}

	ul li {
		padding: 0;
		margin-bottom: 0;
		background: none;
	}
</style>
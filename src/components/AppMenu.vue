<script>
import request from 'superagent';

export default {
	data () {
		return {
			categories: []
		}
	},

	methods: {
		getCategories: function() {
			var self = this;
			request.get('http://localhost:3000/api/categories')
				.end(function(err, res){
					self.categories = res.body;
				});
		}
	},
	created: function(){
		this.getCategories();
	}
}
</script>

<template>
	<div>
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<ul class="nav navbar-nav">
					<li v-for="category in categories">
						<a href="#">{{category.name}}</a>
					</li>
				</ul>
				
			</div>
		</nav>
	</div>
</template>

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
		<div class="pure-menu pure-menu-horizontal">
		    <ul class="pure-menu-list">
		        <li class="pure-menu-item" v-for="category in categories">
					<a href="#" class="pure-menu-link">{{category.name}}</a>
				</li>

		    </ul>
		</div>
	</div>
</template>

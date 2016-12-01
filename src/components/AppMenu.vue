<script>
import request from 'superagent';
import store from '../vuex/store'


export default {
	data () {
		return {
			categories: []
		}
	},

	methods: {
		fetchCategories: function() {
			var self = this;
			request.get('http://localhost:3000/api/categories')
				.end(function(err, res){
					self.$store.dispatch('updateCategories', res.body)
				});
		},
		filterByCategory: function (id) {
			this.$store.dispatch('changeCategory', id)
		}
	},
	computed: {
		categories() {
            return this.$store.getters.getCategories
        }
	},
	created: function(){
		this.fetchCategories();
	}
}
</script>

<template>
	<div>
		<ul class="nav navbar-nav">
			<li v-for="category in categories">
				<a href="#" v-on:click="filterByCategory(category.id)">{{category.name}}</a>
			</li>
		</ul>
	</div>
</template>

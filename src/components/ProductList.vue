<script>
import request from 'superagent';
import Product from './Product.vue';

export default {
    data () {
        return {
            products: [],
			categories: []
        }
    },
	methods: {
		getProducts: function() {
			var self = this;
			request.get('http://localhost:3000/api/products')
				.end(function(err, res){
					self.products = res.body;
				});
		},
		getCategories: function() {
			var self = this;
			request.get('http://localhost:3000/api/categories')
				.end(function(err, res){
					self.categories = res.body;
				});
		}
	},
	created: function(){
		this.getProducts();
	},
	components: {
        Product
    }
}
</script>

<template>
	<div>
		<span v-html="title"></span>
		<br>
		<input type="text" v-model="title">
		<div class="products">
			<product v-for="product in products" :product="product"></product>
			<div v-if="products.length == 0" class="error">
				Sorry, but this list is empty at the moment :(
			</div>
		</div>
	</div>
</template>

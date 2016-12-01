<script>
import request from 'superagent';
import store from '../vuex/store'
import Product from './Product.vue';
import AppMenu from './AppMenu.vue';

export default {
    data () {
        return {
            searchString: "",
            products: [],
			categories: [],
        }
    },
	methods: {
		fetchProducts: function() {
			var self = this;
			request.get('http://localhost:3000/api/products')
				.end(function(err, res){
					self.$store.dispatch('updateProducts', res.body)
					//self.products = res.body;
				});
		},
		// fetchCategories: function() {
		// 	var self = this;
		// 	request.get('http://localhost:3000/api/categories')
		// 		.end(function(err, res){
		// 			self.$store.dispatch('updateCategories', res.body)
		// 		});
		// },
		
	},
    computed: {
		productsFiltered: function () {
			var products_array = this.products,
				searchString = this.searchString;

			if(!searchString){
				return products_array;
			}

			searchString = searchString.trim().toLowerCase();

			products_array = products_array.filter(function(product){
				if(product.title.toLowerCase().indexOf(searchString) !== -1){
					return product;
				}
			})

			return products_array;
		},
		products() {
            return this.$store.getters.getProducts
        },
		// categories() {
        //     return this.$store.getters.getCategories
        // }
	},
	created: function(){
		this.fetchProducts();

		setInterval(this.fetchProducts, 30000);

	},
	components: {
        Product,
        AppMenu
    }
}
</script>

<template>
	<div>
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<app-menu></app-menu>
				<div class="navbar-form navbar-left">
					<div class="form-group">
			            <input class="form-control" placeholder="Search for product" v-model="searchString">
			        </div>
				</div>
			</div>
		</nav>

		<div class="row">
			<product v-for="product in productsFiltered" :product="product"></product>
			<div v-if="products.length == 0" class="alert alert-info">
				Sorry, but this list is empty at the moment
			</div>
		</div>
	</div>
</template>

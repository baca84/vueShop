<script>
import request from 'superagent';
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

			// Return an array with the filtered data.
			return products_array;
		}
	},
	created: function(){
		this.getProducts();
	},
	components: {
        Product,
        AppMenu
    }
}
</script>

<template>
	<div>
        <app-menu></app-menu>
        <div class="form-group">
            <input class="form-control" placeholder="Search for product" v-model="searchString">
        </div>
		<div class="row">
			<product v-for="product in productsFiltered" :product="product"></product>
			<div v-if="products.length == 0" class="error">
				Sorry, but this list is empty at the moment :(
			</div>
		</div>
	</div>
</template>

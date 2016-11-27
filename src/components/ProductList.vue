<script>
import request from 'superagent';
import Product from './Product.vue';

export default {
    data () {
        return {
            products: [],
			title: ''
        }
    },
	methods: {
		getProducts: function() {
			var self = this;
			request.get('/data.json')
				.end(function(err, res){
					self.products = res.body;
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

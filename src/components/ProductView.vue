<template>
<div>
	<div class="loading" v-if="loading">Loading...</div>
	<div v-if="error" class="error">
		{{ error }}
	</div>
	<div v-if="product" class="content" :key="product.id">
		<div class="row">
			<div class="col-sm-6 col-md-6">
				<div class="thumbnail">
					<img :src="product.image" :alt="product.title">
				</div>
			</div>
			<div class="col-sm-6 col-md-6">
				<div class="page-header">
					<h1>{{ product.title }}</h1>
				</div>
				<p>{{ product.shortDescription }}</p>
				<p>{{product.price}}</p>
			</div>
		</div>
		<div class="row">
			{{ product.fullDescription}}
		</div>

	</div>
</div>
</template>

<script>
import request from 'superagent';
import store from '../vuex/store';

export default {
	data() {
		return {
			loading: false,
			product: [],
			error: null
		}
	},
	watch: {
		'$route': 'fetchProduct'
	},
	methods: {
		fetchProduct: function() {
			var self = this;
			request.get('http://localhost:3000/api/product/' + this.$route.params.id)
				.end(function(err, res) {
					self.$store.dispatch('updateProduct', res.body)
				});
		}
	},
	computed: {
		product() {
			return this.$store.getters.getProduct
		}
	},
	created: function() {
		this.fetchProduct();
	}
}
</script>

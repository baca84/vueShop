<template>
	<div>
		test
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
			request.get('http://localhost:3000/api/product/1')
				.end(function(err, res) {
					self.product = res.body
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

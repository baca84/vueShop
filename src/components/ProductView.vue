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
				<h2>{{product.price}} €</h2>
			</div>
		</div>
		<div class="row" v-html="product.fullDescription" v-if="product.fullDescription">
			{{ product.fullDescription }}
		</div>
		<div class="row" v-if="product.reviews">
			<h4>Reviews:</h4>
			<div class="media" v-for="review in product.reviews">
				<div class="media-left media-middle">
					<img class="media-object img-circle" :src="review.authorImage">
				</div>
				<div class="media-body">
					<h4 class="media-heading">
						{{review.authorName}}
					</h4>
					<div class="cearfix">
						<template v-for="i in 5">
							<template v-if="i <= review.rating">
								<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
							</template>
							<template v-else>
								<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
							</template>
						</template>
					</div>
					<p>{{review.description}}</p>
				</div>
			</div>

		</div>

	</div>
</div>
</template>

<script>
import request from 'superagent';
import store from '../vuex/store';
import AppMenu from './AppMenu.vue';


export default {
	data() {
		return {
			categories: [],
			searchString: "",
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
		productsFiltered: function() {
			var products_array = this.products,
				searchString = this.searchString;

			if (!searchString) {
				return products_array;
			}

			searchString = searchString.trim().toLowerCase();

			products_array = products_array.filter(function(product) {
				if (product.title.toLowerCase().indexOf(searchString) !== -1) {
					return product;
				}
			})

			return products_array;
		},
		product() {
			return this.$store.getters.getProduct
		}
	},
	created: function() {
		this.fetchProduct();
	},
	components: {
		AppMenu
	}
}
</script>

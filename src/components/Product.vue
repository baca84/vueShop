

<template>
<div class="col-sm-6 col-md-4" v-if="category == 0 || product.category == category">
	<div class="thumbnail">
		<router-link :to="{ path: 'product/'+product.id}">
			<img :src="product.image" :alt="product.name" class="img-responsive">
		</router-link>
		<div class="caption">
			<h3>
				<router-link :to="{ path: 'product/'+product.id}">
					{{ product.title }}
				</router-link>
			</h3>
			<h4>{{ product.price }} €</h4>
			<p>
				{{getReviews}}
			</p>
			<p>
				<router-link :to="{ path: 'product/'+product.id}" class="btn btn-default">
					More
				</router-link>
			</p>
		</div>
	</div>
</div>
</template>

<script>
import store from '../vuex/store'

export default {
	store,
	props: ['product'],
	computed: {
		getReviews() {
			const reviewsCount = this.product.reviews && this.product.reviews.length || 0;
			return `Reviews: ${reviewsCount}`;
		},
		category() {
			return this.$store.getters.getCurrentCategory
		}
	}
}
</script>

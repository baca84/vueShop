

<template>
<div class="col-sm-6 col-md-4" v-if="category == 0 || product.category == category">
	<div class="thumbnail">
		<a :href="'#/product/'+product.id">
			<img :src="product.image" :alt="product.name" class="img-responsive">
		</a>
		<div class="caption">
			<h3>
					<a :href="'#/product/'+product.id">
						{{ product.title }}
					</a>
				</h3>
			<h4>{{ product.price }} Euro</h4>
			<p>
				{{ product.shortDescription}}
			</p>
			<p>
				{{getReviews}}
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

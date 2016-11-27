<script>
export default {
    props: ['product'],
	computed: {
		getReviews () {
			const reviewsCount = this.product.reviews && this.product.reviews.length || 0;
			return `Reviews: ${reviewsCount}`;
		}
	}
}
</script>

<template>
	<div class="product">
        <img :src="product.image" :alt="product.name" class="product-image">
        <div class="product-description">
          <h5>{{ product.title }}</h5>
          <span>€{{ product.price }}</span>
  			<span class="reviews">
				{{getReviews}}
  			</span>
        </div>
    </div>
</template>

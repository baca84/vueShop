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
	<div class="col-sm-6 col-md-4">
        <div class="thumbnail">
            <img :src="product.image" :alt="product.name" class="img-responsive">
            <div class="caption">
                <h3>{{ product.title }}</h3>
                <h4>€{{ product.price }}</h4>
                <p>
                    {{getReviews}}
                </p>
            </div>
        </div>
    </div>
</template>

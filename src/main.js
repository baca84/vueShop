import Vue from 'vue';
import store from './vuex/store';

import ProductList from './components/ProductList.vue';

const VueApp = new Vue({
	el: '#app',
	store,
	components: {
		ProductList
	}
});

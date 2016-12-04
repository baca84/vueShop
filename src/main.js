import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';

import ProductList from './components/ProductList.vue';
import ProductView from './components/ProductView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	base: __dirname,
	routes: [
		{ path: '/', component: ProductList },
		{ path: '/product/:id', component: ProductView }
	]
});

const app = new Vue({
  router,
  store
}).$mount('#app');

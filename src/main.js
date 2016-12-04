import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';

import ProductList from './components/ProductList.vue';
import ProductView from './components/ProductView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: ProductList },
		{ path: '/product/:id', component: {template: '<div>product</div>'} }
	]
});

const app = new Vue({
  router,
  store
}).$mount('#app');

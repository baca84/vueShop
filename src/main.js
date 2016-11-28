import Vue from 'vue';

// Import components
import ProductList from './components/ProductList.vue';
import AppMenu from './components/AppMenu.vue';

const VueApp = new Vue({
    el: '#app',
    components: {
		AppMenu: AppMenu,
        ProductList: ProductList
    }
});

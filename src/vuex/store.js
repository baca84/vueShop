import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
	product: [],
    products: [],
    categories: [],
    currentCategory: []
  },
  mutations: {
	  product_update: function(state, product){
        store.state.product = product;
      },
  	products_update: function(state, products){
      store.state.products = products;
    },
    categories_change: function(state, category){
      store.state.currentCategory = category;
    },
    categories_update: function(state, categories){
      store.state.categories = categories;
    }
  },
  getters: {
	  getProduct: function(){
        return store.state.product;
      },
    getProducts: function(){
      return store.state.products;
    },
    getCategories: function(){
      return store.state.categories;
    },
    getCurrentCategory: function(){
      return store.state.currentCategory;
    }
  },
  actions: {
	 updateProduct ({ commit }, product) {
      	commit('product_update', product);
    },
  	updateProducts ({ commit }, products) {
    	commit('products_update', products);
  	},
    updateCategories ({ commit }, categories) {
      commit('categories_update', categories);
    },
    changeCategory({ commit }, category) {
      commit('categories_change', category );
    }
  }
});

export default store;

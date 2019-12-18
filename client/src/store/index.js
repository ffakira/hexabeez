import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	title: 'hello there',
  	links: [
  		1, 2, 3
  	],
    products: [
      {name: "Product 1", qty: 8, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: true},
      {name: "Product 2", qty: 10, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: false},
      {name: "Product 3", qty: 5, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: true},
      {name: "Product 4", qty: 2, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: true},
      {name: "Product 5", qty: 20, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: false},
      {name: "Product 6", qty: 30, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: false},
      {name: "Product 7", qty: 45, orderedAt: "Nov 19, 2019 (2d ago)", stockLow: false}
    ],
    
    productHistory: [
      {name: "Product 1", data: [
        {date: "16 Nov, 2019", qty: 19, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 23, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 26, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 11, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 8, updatedAuthor: "Akira F"}
      ]},

      {name: "Product 2", data: [
        {date: "16 Nov, 2019", qty: 14, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 11, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 23, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 16, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 10, updatedAuthor: "Akira F"}
      ]},

      {name: "Product 3", data: [
        {date: "16 Nov, 2019", qty: 15, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 9, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 3, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 10, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 5, updatedAuthor: "Akira F"}
      ]},

      {name: "Product 4", data: [
        {date: "16 Nov, 2019", qty: 27, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 13, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 16, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 9, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 2, updatedAuthor: "Akira F"}
      ]},

      {name: "Product 5", data: [
        {date: "16 Nov, 2019", qty: 13, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 22, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 9, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 25, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 20, updatedAuthor: "Akira F"}
      ]},

      {name: "Product 6", data: [
        {date: "16 Nov, 2019", qty: 30, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 26, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 40, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 31, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 40, updatedAuthor: "Akira F"}
      ]},

      {name: "Product 7", data: [
        {date: "16 Nov, 2019", qty: 65, updatedAuthor: "Akira F"},
        {date: "22 Nov, 2019", qty: 54, updatedAuthor: "Akira F"},
        {date: "24 Nov, 2019", qty: 50, updatedAuthor: "Akira F"},
        {date: "27 Nov, 2019", qty: 47, updatedAuthor: "Akira F"},
        {date: "29 Nov, 2019", qty: 45, updatedAuthor: "Akira F"}
      ]},
    ],

    colors: [
      'rgba(246, 0, 0, 0.4)', 
      'rgba(255, 140, 0, 0.4)',
      'rgba(255, 238, 0, 0.4)',
      'rgba(77, 233, 76, 0.4)',
      'rgba(38, 150, 38, 0.4)',
      'rgba(55, 131, 255, 0.4)',
      'rgba(72, 21, 170, 0.4)'
    ]
  },
  getters: {
  	countLinks: state => {
  		return state.links.length;
  	}
  },
  mutations: {
  	ADD_LINK: (state, link) => {
  		state.links.push(link);
  	},
  	REMOVE_LINK: (state, link) => {
  		state.links.splice(link, 1);
  	},
  	REMOVE_ALL: (state) => {
  		state.links = [];
  	},
    PRODUCT_QUANTITY: (state) => {
      let tempData = [];
      state.products.forEach(product => tempData.push(product.qty));
      console.log(tempData);
      return tempData;
    }
  },
  actions: {
  	removeLink: (ctx, link) => {
  		ctx.commit('REMOVE_LINK', link);
  	},
  	removeAll({commit}) {
  		return new Promise((resolve, reject) => {
  			setTimeout(() => {
  				commit('REMOVE_ALL');
  				resolve();
  			}, 1500);
  		})
  	}
  },
  modules: {
  }
})

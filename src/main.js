import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue,  BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from "vue-router";
import { createPopper } from '@popperjs/core';
// const popcorn = document.querySelector('#popcorn');
// const tooltip = document.querySelector('#tooltip');
// createPopper(popcorn, tooltip, {
//   placement: 'right',
// });


import store from "./assets/store.js"
import Start from "./components/Start";
import Menu from "./components/Menu"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Start },
    { path: '/Menu', component: Menu },
  ]
})



new Vue({
  router,
  store,
  createPopper,
  render: h => h(App),
}).$mount('#app')

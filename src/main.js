import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import VueRouter from "vue-router";
import Login from "./pages/Login.vue";
import Admin from "./pages/Admin.vue";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(VueRouter)
const routes=[
  { path: '/', component: Admin },
  { path: '/login', component: Login }
]
const router=new VueRouter({routes})
Vue.config.productionTip = false;
Vue.prototype.$axios=axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

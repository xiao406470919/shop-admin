import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import VueRouter from "vue-router";
import Login from "./pages/Login.vue";
import Admin from "./pages/Admin.vue";
import GoodsList from "./pages/GoodsList.vue";
import GoodsAdd from "./pages/GoodsAdd.vue";
import GoodsEdit from "./pages/GoodsEdit.vue";
import CategoryList from "./pages/CategoryList.vue";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: 'admin/goods-list', meta: '首页' },
  { path: '/login', component: Login, meta: "登录" },
  {
    path: '/admin', component: Admin, meta: "后台管理", children: [
      { path: 'goods-list', component: GoodsList, meta: "商品列表" },
      { path: 'goods-add', component: GoodsAdd, meta: "新增商品" },
      { path: 'goods-edit/:id', component: GoodsEdit, meta: "编辑商品" },
      { path: 'category-list', component: CategoryList, meta: '栏目列表' }
    ]
  },
]
const router = new VueRouter({ routes })
Vue.config.productionTip = false;
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Petshop from '../views/Petshop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/petshop',
    name: 'Petshop',
    component: Petshop,
    meta: {
      title: 'E-commerce - Petshop',
    },
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Main from "../components/Main";
import Boutique from "../components/Boutique";
import SingleProduct from "../components/SingleProduct";
import Signup from "../components/Connection/Signup";
import Signin from "../components/Connection/Signin";
import Cart from "../components/Cart/Cart";
import Validation from "../components/Cart/Validation";
import Profil from "@/components/Connection/Profil";
import Orders from "@/components/Connection/Orders";
import SingleOrders from "@/components/Connection/SingleOrders";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: App
  },
  {
    path: '/',
    component: Main
  },
  {
    path: '/boutique',
    component: Boutique
  },
  {
    path: '/boutique/:id',
    component: SingleProduct
  },
  {
    path: '/panier',
    component: Cart
  },
  {
    path: '/validation',
    component: Validation
  },
  {
    path: '/inscription',
    component: Signup
  },
  {
    path: '/connexion',
    component: Signin
  },
  {
    path: '/compte',
    component: Profil
  },
  {
    path: '/compte/commandes',
    component: Orders
  },
  {
    path: '/compte/commandes/:id',
    component: SingleOrders
  },
]

const router = new VueRouter({
  routes
})

export default router

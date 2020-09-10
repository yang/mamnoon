import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)
Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/shop.vue")
  },
  {
    path: "/mamnoon",
    name: "mamnoon",
    component: () => import("../views/mamnoon.vue")
  },
  {
    path: "/mamnoonresults",
    name: "mamnoonresults",
    component: () => import("../views/mamnoonresults.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },
  {
    path: "/addproduct",
    name: "addproduct",
    component: () => import("../views/addproduct.vue")
  },
  {
    path: '/restaurant/:id',
    name: "restaurant",
    component: () => import("../views/restaurant.vue")
  }
];


const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

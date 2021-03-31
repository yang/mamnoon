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
    component: Home
  },
  {
    path: "/mamnoonff",
    name: "mamnoonff",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/retail.vue")
  },
  {
    path: "/retail",
    name: "retail",
    component: () => import("../views/retail.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/mamnoon",
    name: "mamnoon",
    component: () => import("../views/mamnoon.vue")
  },
  {
    path: "/mamnoonstreet",
    name: "mamnoonstreet",
    component: () => import("../views/mamnoonstreet.vue")
  },
  // {
  //   path: "/mbar",
  //   name: "mbar",
  //   component: () => import("../views/mbar.vue")
  // },
  {
    path: "/orderconfirmation",
    name: "orderconfirmation",
    component: () => import("../views/orderconfirmation.vue")
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
    path: "/addproduct",
    name: "addproduct",
    component: () => import("../views/addproduct.vue")
  },
  {
    path: '/transactions',
    name: "transactions",
    component: () => import("../views/transactions.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/newsletterarchive',
    name: "newsletterarchive",
    component: () => import("../views/newsletterarchive.vue"),
    meta: {
      requiresAuth: false
    }
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

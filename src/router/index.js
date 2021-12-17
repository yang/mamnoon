import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import AxiosPlugin from 'vue-axios-cors';

import Datepicker from 'vuejs-datepicker';

Vue.use(AxiosPlugin)
Vue.use(VueRouter);


Vue.use(Datepicker)


const routes = [
  {
    path: "/",
    name: "nadi",
    component: () => import("../views/nadi.vue")
  },
  {
    path: "/mamnoonff",
    name: "mamnoonff",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods",
    name: "finefoods",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/",
    name: "products",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/zaatar",
    name: "zaatar",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/babaganoush",
    name: "babaganoush",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/muhammara",
    name: "muhammara",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/pitachips",
    name: "pitachips",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/mamachips",
    name: "mamachips",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/hummus",
    name: "hummus",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/labneh",
    name: "labneh",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/fattoush",
    name: "fattoush",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/harrasauce",
    name: "harrasauce",
    component: () => import("../views/mamnoonff.vue")
  },
  {
    path: "/finefoods/products/shorbatadas",
    name: "shorbatadas",
    component: () => import("../views/mamnoonff.vue")
  },
    {
    path: "/finefoods/products/shorabatadas",
    name: "shorabatadas",
    component: () => import("../views/mamnoonff.vue")
  },
  // {
  //   path: "/shop",
  //   name: "shop",
  //   component: () => import("../views/retail.vue")
  // },
  // {
  //   path: "/retail",
  //   name: "retail",
  //   component: () => import("../views/retail.vue")
  // },
  {
    path: "/reports",
    name: "reports",
    component: () => import('../views/reports.vue'),
    meta: {
      requiresAuth: true
    }
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
    path: "/packages",
    name: "packages",
    component: () => import("../views/packages.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/mamnoontesting",
    name: "mamnoontesting",
    component: () => import("../views/mamnoontesting.vue")
  },
  {
    path: "/mamnoonstreettesting",
    name: "mamnoonstreettesting",
    component: () => import("../views/mamnoonstreettesting.vue")
  },
  {
    path: "/orderconfirmation",
    name: "orderconfirmation",
    component: () => import("../views/orderconfirmation.vue")
  },
  {
    path: "/upserveinfo",
    name: "upserveinfo",
    component: () => import("../views/upserveInfo.vue"),
    meta: {
      requiresAuth: true
    }
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
    path: "/loginauth",
    name: "loginauth",
    component: () => import("../views/loginauth.vue")
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
    path: '/todaystransactions',
    name: "todaystransactions",
    component: () => import("../views/todaystransactions.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: "about",
    component: () => import("../views/about.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: () => import("../views/restaurants.vue")
  },
  {
    path: "/:id/menu",
    component: () => import("../components/MenuTemplate.vue")
  },
  {
    path: "/:id",
    component: () => import("../views/restauranttemplate.vue"),
    meta: {
      title: 'facebook'
    }
  }

];


const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }}
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

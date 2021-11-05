import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewHome from "../views/NewHome.vue";
import AxiosPlugin from 'vue-axios-cors';

import Datepicker from 'vuejs-datepicker';

Vue.use(AxiosPlugin)
Vue.use(VueRouter);


Vue.use(Datepicker)


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/newhome",
    name: "newhome",
    component: NewHome
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
    path: "/mamnoon-order",
    name: "mamnoon",
    component: () => import("../views/mamnoonOlo.vue")
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
    path: "/mamnoonstreet-order",
    name: "mamnoonstreet",
    component: () => import("../views/mamnoonstreetOlo.vue")
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
  // {
  //   path: "/register",
  //   name: "register",
  //   component: () => import("../views/register.vue")
  // },
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
    path: '/newsletterarchive',
    name: "newsletterarchive",
    component: () => import("../views/newsletterarchive.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/featured',
    name: "featured",
    component: () => import("../views/featured.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/reservations',
    name: "reservations",
    component: () => import("../views/reservations.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/onlinemenu',
    name: "onlinemenu",
    component: () => import("../views/onlinemenu.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/newsletter',
    name: "newsletter",
    component: () => import("../views/newsletterarchive.vue"),
    meta: {
      requiresAuth: false
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
    path: '/landingdrawer',
    name: "landingdrawer",
    component: () => import("../views/LandingDrawer.vue"),
    meta: {
      requiresAuth: false
    }
  },


  {
    path: "/:id",
    component: () => import("../components/VirtualRestaurantTemplate.vue")
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

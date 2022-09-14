import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/SuccessView.vue"),
    },
  ],
});

export default router;

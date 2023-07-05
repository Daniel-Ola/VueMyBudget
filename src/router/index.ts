import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-in",
      name: "login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const user = useUserStore();
  if (to.name === "login" && user.isSignedIn) router.push({ name: "home" });

  if (!user.isSignedIn && to.name !== "login") router.push({ name: "login" });

  next();
});

export default router;

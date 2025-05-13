import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/dashboard",

          components: {
            main: () => import("../components/Dashboard.vue"),
          },
        },
        {
          path: "/payment",
          components: {
            main: () => import("../components/fees/TuitionFeesComponent.vue"),
          },
        },
        {
          path: "/prepare",
          components: {
            main: () => import("../components/prepare/Prepare.vue"),
          },
        },
        {
          path: "/teach",
          components: {
            main: () => import("../components/teach/Teach.vue"),
          },
        },
        {
          path: "/monitor",
          components: {
            main: () => import("../components/monitor/Monitor.vue"),
          },
        },
      ],
    },
  ],
});

export default router;

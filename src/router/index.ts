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
          path: "/schedule",
          components: {
            main: () => import("../components/schedule/ScheduleComponent.vue"),
          },
        },
      ],
    },
  ],
});

export default router;

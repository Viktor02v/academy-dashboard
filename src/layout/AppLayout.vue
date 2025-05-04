<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import { onBeforeUnmount, onMounted } from "vue";
import router from "@/router";

const topBarItems = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Access", to: "/access" },
  { label: "Prepare", to: "/prepare" },
  { label: "Teach", to: "/teach" },
  { label: "Monitor", to: "/monitor" },
];
const intervalId = ref<number>();
const currentDate = ref("");
const currentTime = ref("");

function updateTime() {
  const now = new Date();
  currentDate.value = now.toLocaleDateString();
  currentTime.value = now.toLocaleTimeString();
  console.log(currentTime.value);
}

// Update every second
onMounted(() => {
  intervalId.value = setInterval(updateTime, 1000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId.value);
});
</script>

<template>
  <section class="relative bg-white">
    <!-- TopBar -->
    <div
      class="fixed h-[4rem] px-10 flex items-center bg-white w-full top-0 z-50"
    >
      <div class="text-[1rem] font-[500]">KOGPA</div>

      <!-- TopBar Items -->
      <div class="w-full justify-center flex items-center space-x-[1.5rem]">
        <nav v-for="(item, index) in topBarItems" :key="item.label">
          <RouterLink
            :to="item.to"
            exact-active-class="text-gray-950 font-[600]
            "
            class="font-[500] text-[0.875rem] text-gray-400"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <!-- Time Section -->
      <div
        class="flex items-center justify-center gap-4 bg-gray-100 p-2 rounded-2xl w-[15rem]"
      >
        <div class="flex items-center justify-center text-md space-x-[1.5rem]">
          {{ currentDate }}
        </div>

        <div class="flex items-center justify-center text-md space-x-[1.5rem]">
          {{ currentTime }}
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div></div>

    <!-- Main Content -->
    <div class="w-full mt-[4rem] h-[calc(100vh-4rem)]">
      <router-view name="main" />
    </div>
  </section>
</template>

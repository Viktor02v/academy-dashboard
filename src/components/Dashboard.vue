<script setup lang="ts">
import DashboardHeader from './dashboard/DashboardHeader.vue'
import DashboardScoreCards from './dashboard/DashboardScoreCards.vue'
</script>

<template>
  <div
    class="w-full h-[calc(100vh-4rem)] rounded-t-[5rem] bg-[#F2F9FF] px-[5rem] py-[2rem]"
  >
    <!-- Dashboard Header -->
    <dashboard-header />

    <!-- Dashboard Score Cards -->
    <dashboard-score-cards />

  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="relative bg-gradient-to-r from-cyan-400 to-blue-500">
    <!-- TopBar -->
    <div
      class="fixed h-[3rem] px-5 flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 w-full border-b-1 border-blue-500 top-0 z-50"
    >
      <div class="text-[1rem] font-[500]">KOGPA</div>

      <div>
        <Button class="h-[1.5rem] w-[1.5rem] bg-white hover:bg-white/80">
          <Icon icon="lucide:menu" />
        </Button>

      </div>
    </div>

    <!-- Sidebar -->
    <div></div>

    <!-- Main Content -->
    <div class="w-full mt-[3rem] h-[calc(100vh-3rem)]">
      Something
      <router-view name="main" />
    </div>
  </section>
</template>

<style scoped></style>

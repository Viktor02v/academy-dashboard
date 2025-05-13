<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push('/dashboard')
}
</script>

<template>
  <section
    class="relative w-screen bg-gradient-to-b from-[#4F2C2C] to-[#a26666]"
  >
    <!-- TopBar -->
    <div
      class="fixed h-[6rem] px-10 bg-[#4F2C2C] flex items-center w-full top-0 z-50"
    >
      <div class="w-[11rem] h-[4rem]">
        <img src="/kogpa-logo.png" class="w-full h-full" alt="" />
      </div>

      <div class="text-center w-[calc(100%-21.25rem)]">
        <h1 class="text-white font-bold text-5xl [word-spacing:0.5em]">
          КОГПА ім. Т. Шевченка
        </h1>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full mt-[6rem] h-[calc(100vh-6rem)]">
      <router-view name="main" />
    </div>

    <!-- Navigation Buttons -->
    <div
      class="absolute h-[6rem] w-full flex items-center justify-center bottom-[2rem] z-50"
    >
      <div class="w-full px-[3rem] flex items-center justify-between h-full">
        <!-- <Button
          class="w-1/4 h-full bg-[#4F2C2C] hover:bg-[#4F2C2C] active:bg-[#4F2C2C]"
        >
          <Icon icon="grommet-icons:link-previous" class="w-full h-full" />
        </Button> -->

        <Button
          @click="
            router.currentRoute.value.path !== '/dashboard' ? goToDashboard() : ''
          "
          class="w-1/3 h-full mx-auto bg-[#4F2C2C] hover:bg-[#4F2C2C] active:bg-[#4F2C2C]"
        >
          <Icon
            v-if="router.currentRoute.value.path !== '/dashboard'"
            icon="material-symbols:home"
            class="w-1/3 h-full"
          />

          <div v-else class="text-[2rem] text-white font-bold">Time</div>
        </Button>

        <!-- <Button
          class="w-1/4 h-full bg-[#4F2C2C] hover:bg-[#4F2C2C] active:bg-[#4F2C2C]"
        >
          <Icon icon="grommet-icons:link-next" class="w-full h-full" />
        </Button> -->
      </div>
    </div>
  </section>
</template>

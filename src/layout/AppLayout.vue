<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { onUnmounted, ref, watch } from 'vue'
import { onMounted, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const date = ref<string | null>(null)
const time = ref<string | null>(null)

const goToDashboard = () => {
  router.push('/dashboard')
}

const getCurrentDateTime = () => {
  const datedate = new Date()

  date.value = datedate.toLocaleString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  time.value = datedate.toLocaleString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

watchEffect(() => {
  const interval = setInterval(() => {
    getCurrentDateTime()
  }, 1000)

  return () => clearInterval(interval)
})

onMounted(() => {
  getCurrentDateTime()
})

onUnmounted(() => {
  const interval = setInterval(() => {
    getCurrentDateTime()
  }, 1000)
  clearInterval(interval)
})
</script>

<template>
  <section
    class="relative w-screen bg-gradient-to-b from-[#020817] to-[#0E1629]"
  >
    <!-- TopBar -->
    <div
      class="fixed h-[6rem] px-10 bg-gradient-to-r from-[#020817] to-[#0E1629] flex items-center w-full top-0 z-50"
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
            router.currentRoute.value.path !== '/dashboard'
              ? goToDashboard()
              : ''
          "
          class="w-1/3 h-full mx-auto bg-gradient-to-b from-[#020817] to-[#0E1629] active:from-[#0E1629] active:to-[#0E1629] border border-[#202f46]"
        >
          <Icon
            v-if="router.currentRoute.value.path !== '/dashboard'"
            icon="material-symbols:home"
            class="w-1/3 h-full"
          />

          <div
            v-else
            class="text-[2rem] w-full px-[3rem] flex items-center justify-around text-white font-bold"
          >
            <div>{{ date }}</div>
            <Icon
              icon="svg-spinners:clock"
              class="w-[3.5rem] h-full"
            />
            <div class="w-[140px] overflow-auto">{{ time }}</div>
          </div>
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

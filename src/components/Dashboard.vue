<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import DashboardSidebar from './DashboardSidebar.vue'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import { leftSidebarItems, rightSidebarItems } from './sidebarItems'

const router = useRouter()

// images
const carouselIMgs = [
  { src: '/когпа1.jpeg' },
  { src: '/когпа2.jpeg' },
  { src: '/когпа3.jpeg' },
]

// current image
const currentImageIndex = ref(0)

// clip interval
let intervalId: ReturnType<typeof setInterval> | null = null

// go to next image
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % carouselIMgs.length
}

onMounted(() => {
  intervalId = setInterval(nextImage, 3000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="w-full h-[100%]">
    <div class="w-full flex h-[80%] items-start justify-between pt-[3rem]">
      <!-- Left Sidebar -->
      <DashboardSidebar :sidebar-items="leftSidebarItems" icon-position="right" />

      <!-- Slider -->
      <div class="w-full h-full p-[3rem] border border-[#202f46] rounded-md">
        <img
          :src="carouselIMgs[currentImageIndex].src"
          class="w-full h-full object-cover rounded"
        />
      </div>

      <!-- Right Sidebar -->
      <DashboardSidebar :sidebar-items="rightSidebarItems" icon-position="left" />
    </div>
  </div>
</template>

<style scoped>

</style>

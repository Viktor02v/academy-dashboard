<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { onBeforeUnmount, onMounted } from 'vue'

const topBarItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Access', to: '/' },
  { label: 'Prepare', to: '/' },
  { label: 'Teach', to: '/' },
  { label: 'Monitor', to: '/' },
]

const currentTime = ref<string>('')
let timer: ReturnType<typeof setInterval>

function updateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleString()
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="relative bg-white">
    <!-- TopBar -->
    <div
      class="fixed h-[4rem] px-10 flex items-center bg-white w-full border-b-1 border-blue-500 top-0 z-50"
    >
      <div class="text-[1rem] font-[500]">KOGPA</div>

      <!-- TopBar Items -->
      <div class="w-full justify-center flex items-center space-x-[1.5rem]">
        <nav v-for="(item, index) in topBarItems" :key="item.label">
          <RouterLink :to="item.to" class="font-[500] text-[0.875rem]">
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <!-- Time Section -->
      <div class="flex items-center justify-end space-x-[1.5rem]">
        {{ currentTime }}
      </div>
    </div>

    <!-- Sidebar -->
    <div></div>

    <!-- Main Content -->
    <div class="w-full mt-[4rem] h-[calc(100vh-4rem)]">
      Something
      <router-view name="main" />
    </div>
  </section>
</template>

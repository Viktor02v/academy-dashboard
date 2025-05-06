<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

interface IconPosition {
  left: string
  right: string
}

const props = defineProps<{
  sidebarItems: {
    label: string
    icon: string
    to: string
  }[]
  iconPosition: keyof IconPosition
}>()

const router = useRouter()
</script>

<template>
  <div class="w-2/4 h-full px-[3rem]">
    <div class="flex items-center justify-center h-full">
      <div class="w-full flex flex-col justify-between space-y-[4rem]">
        <div v-for="item in props.sidebarItems" :key="item.label">
          <div class="w-full relative h-[9.56rem]">
            <Button
              class="w-full h-full bg-[#492525d2] hover:bg-[#492525d2] active:bg-[#492525d8] border border-white text-3xl text-white"
              @click="router.push(item.to)"
            >
              {{ item.label }}
            </Button>

            <div
              :class="`absolute w-[4rem] h-[4rem] z-50 top-1/2 ${props.iconPosition}-[-1.8rem] translate-y-[-50%]`"
            >
              <div
                class="w-full h-full flex items-center justify-center bg-[#2f1a1a] border rounded border-white"
              >
                <Icon :icon="item.icon" class="w-[2rem] text-white h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

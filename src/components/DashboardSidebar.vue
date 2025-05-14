<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { computed, defineProps } from 'vue'
import { type SidebarItem } from '../components/sidebarItems'

const props = defineProps<{
  sidebarItems: SidebarItem[]
  iconPosition: 'left' | 'right'
}>()

const router = useRouter()
</script>

<template>
  <div class="w-2/4 h-full px-[3rem]">
    <div class="flex items-center justify-center h-full">
      <div class="w-full flex flex-col justify-between space-y-[4rem]">
        <div v-for="item in props.sidebarItems" :key="item.label">
          <div class="w-full relative h-[9.56rem] group">
            <a :href="item.src" target="_blank" rel="noopener noreferrer">
              <Button
                class="w-full cursor-pointer  h-full bg-gradient-to-b from-[#020817] to-[#0E1629] border border-[#202f46] active:from-[#0E1629] active:to-[#0E1629] text-3xl text-white"
                @click="item.to && router.push(item.to)"
              >
                {{ item.label }}
              </Button>
            </a>

            <div
              :class="{
                'right-[-1.8rem]': props.iconPosition === 'right',
                'left-[-1.8rem]': props.iconPosition === 'left',
              }"
              class="absolute w-[4rem] h-[4rem] z-50 top-1/2 translate-y-[-50%]"
            >
              <div
                class="w-full h-full flex items-center justify-center bg-[#0E1629] border rounded border-white"
              >
                <Icon
                  :icon="item.icon ?? ''"
                  class="w-[2rem] text-white h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
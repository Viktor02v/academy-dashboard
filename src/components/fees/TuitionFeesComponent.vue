<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { leftButtons, rightButtons } from './buttons'
</script>

<template>
  <div class="w-full h-full pt-[3rem]">
    <div class="w-full h-[627px] flex items-center justify-between px-[3rem]">
      <div class="flex flex-col w-1/3 space-y-12 px-[2rem]">
        <div v-for="button in leftButtons" :key="button.label">
          <a :href="button.src" target="_blank" rel="noopener noreferrer">
            <Button
              class="w-full cursor-pointer  h-[200px] bg-gradient-to-b from-[#020817] to-[#0E1629] border border-[#202f46] active:from-[#0E1629] active:to-[#0E1629] text-3xl text-white"
            >
              {{ button.label }}
            </Button>
          </a>
        </div>
      </div>

      <div class="w-1/3 border border-[#202f46]">
        <img
          src="https://kogpa.edu.ua/images/main_dir/docs/2024/photo_2023-09-26_11-51-17%20(2).jpg"
          alt=""
        />
      </div>

      <div class="flex flex-col w-1/3 space-y-12 px-[2rem]">
        <div v-for="button in rightButtons" :key="button.label">
          <a :href="button.src" target="_blank" rel="noopener noreferrer">
            <Button
              class="w-full cursor-pointer  h-[200px] bg-gradient-to-b from-[#020817] to-[#0E1629] border border-[#202f46] active:from-[#0E1629] active:to-[#0E1629] text-3xl text-white"
            >
              {{ button.label }}
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

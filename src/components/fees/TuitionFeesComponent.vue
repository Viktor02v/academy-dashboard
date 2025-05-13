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
              class="w-full cursor-pointer  h-[200px] bg-[#492525d2] hover:bg-[#492525d2] active:bg-[#2f1a1a] border border-white text-3xl text-white"
            >
              {{ button.label }}
            </Button>
          </a>
        </div>
      </div>

      <div class="w-1/3">
        <img
          src="https://kogpa.edu.ua/images/main_dir/docs/2024/photo_2023-09-26_11-51-17%20(2).jpg"
          alt=""
        />
      </div>

      <div class="flex flex-col w-1/3 space-y-12 px-[2rem]">
        <div v-for="button in rightButtons" :key="button.label">
          <a :href="button.src" target="_blank" rel="noopener noreferrer">
            <Button
              class="w-full cursor-pointer  h-[200px] bg-[#492525d2] hover:bg-[#492525d2] active:bg-[#2f1a1a] border border-white text-3xl text-white"
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

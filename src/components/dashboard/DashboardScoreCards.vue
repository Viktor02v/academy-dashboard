<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="w-full h-[300px]">
    <div class="flex w-full h-full items-center space-x-[2rem]">
      <!-- Left -->
      <div
        class="w-1/2 h-full flex items-center bg-white rounded-[2rem] p-[2rem]"
      >
        <div
          class="flex w-1/2 border-r flex-col h-full justify-between items-center"
        >
          <div class="w-full flex flex-col space-y-[0.5rem]">
            <Icon icon="noto:crown" class="w-[3rem] h-[3rem] mx-auto" />

            <div class="text-[1rem] font-[500] text-center text-wrap">
              Overall Class Score
            </div>
          </div>
          <div class="text-[2rem] font-[500] text-wrap">68%</div>

          <div class="w-full flex flex-col space-y-[0.5rem]">
            <div class="text-[0.75rem] text-center font-[500] text-wrap">
              Grade average
            </div>
            <div class="text-[0.75rem] font-[500] text-wrap text-center">
              71%
            </div>
          </div>
        </div>

        <div class="flex w-1/2 flex-col h-full justify-between items-center">
          <div class="w-full flex flex-col space-y-[0.5rem]">
            <Icon icon="unjs:knitwork" class="w-[3rem] h-[3rem] mx-auto" />

            <div class="text-[1rem] font-[500] text-center text-wrap">
              Work Assigned
            </div>
          </div>
          <div class="text-[2rem] font-[500] text-wrap">36</div>

          <div class="w-full flex flex-col space-y-[0.5rem]">
            <div class="text-[0.75rem] text-center font-[500] text-wrap">
              Grade average
            </div>
            <div class="text-[0.75rem] font-[500] text-wrap text-center">
              38%
            </div>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="w-1/2 h-full flex  items-center">
        <!-- 1 -->
        <div
          class="w-1/2 hover:scale-105 transition-all duration-300 max-w-1/2 p-[2rem] h-full relative bg-[#87D717] rounded-[2rem]"
        >
          <Avatar
            class="absolute top-[1rem] right-[1rem] w-[2.5rem] h-[2.5rem]"
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <div class="w-full h-full flex items-end">
            <div class="flex flex-col items-start">
              <div class="text-[2rem] font-[500] text-blue-950 text-wrap">5</div>
              <div class="font-[500] text-wrap text-blue-950">20% of class</div>

              <div class="text-gray-400">
                <div class="text-[1rem] font-[500] text-wrap">grade avg:</div>
                <div class="text-[1rem] font-[500] text-wrap">23%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div class="w-2/3 h-full hover:scale-105 transition-all duration-300 p-[2rem] relative bg-[#FFC328] rounded-[2rem]">
          <Avatar
            class="absolute top-[1rem] right-[1rem] w-[2.5rem] h-[2.5rem]"
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          
          <div class="w-full h-full flex items-end">
            <div class="flex flex-col items-start">
              <div class="text-[2rem] font-[500] text-blue-950 text-wrap">10</div>
              <div class="font-[500] text-wrap text-blue-950">40% of class</div>

              <div class="text-gray-400">
                <div class="text-[1rem] font-[500] text-wrap">grade avg:</div>
                <div class="text-[1rem] font-[500] text-wrap">50%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 -->
        <div class="w-1/2 h-full  hover:scale-105 transition-all duration-300 relative bg-[#FE8158] rounded-[2rem]">
          <Avatar
            class="absolute top-[1rem] right-[1rem] w-[2.5rem] h-[2.5rem]"
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <div class="w-full h-full p-[2rem] flex items-end">
            <div class="flex flex-col items-start">
              <div class="text-[2rem] font-[500] text-blue-950 text-wrap">3</div>
              <div class="font-[500] text-wrap text-blue-950">19% of class</div>

              <div class="text-gray-400">
                <div class="text-[1rem] font-[500] text-wrap">grade avg:</div>
                <div class="text-[1rem] font-[500] text-wrap">9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>


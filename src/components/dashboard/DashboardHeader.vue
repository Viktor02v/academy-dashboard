<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  { src: "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png" },
  { src: "https://www.w3schools.com/w3images/avatar2.png" },
  { src: "https://www.w3schools.com/w3images/avatar3.png" },
  { src: "https://www.w3schools.com/w3images/avatar4.png" },
  { src: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=SmileyUser" },
  { src: "https://www.w3schools.com/w3images/avatar5.png" },
  {
    src: "https://api.dicebear.com/6.x/micah/svg?seed=JaneDoe&size=150&backgroundColor=ffdfbf",
  },
  { src: "https://www.w3schools.com/w3images/avatar6.png" },
  { src: "https://www.w3schools.com/w3images/avatar1.png" },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJX12lqYhLPIlLqxNEpZT0kx8gqg1s2pzag&s",
  },
];
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-center gap-8">
        <p
          class="text-4xl flex items-center justify-center self-start font-semibold"
        >
          Dashboard
        </p>
        <div class="flex items-between gap-8">
          <div class="flex justify-around items-center">
            <div class="flex justify-around items-center gap-2">
              <div>
                <Icon icon="ph:student-thin" class="w-7 h-7 text-gray-500" />
              </div>
              <p>Class A</p>
              <div>
                <Icon
                  icon="typcn:arrow-sorted-down"
                  class="w-5 h-5 text-gray-500"
                />
              </div>
            </div>
            <!--  Header-->
          </div>
          <div class="flex items-center">
            <Avatar
              class="-mr-3 w-[35px] h-[35px] hover:scale-105"
              v-for="avatar in avatars"
              :key="avatar.src"
            >
              <AvatarImage :src="avatar.src" :alt="'error'" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div class="px-4">
              <div class="p-1 bg-gray-100 rounded-full">+8</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between gap-8">
        <div class="flex items-center justify-between gap-2">
          <div>
            <Icon
              icon="icon-park-outline:lightning"
              class="w-5 h-5 text-gray-500"
            />
          </div>
          <p>Alerts</p>

          <div
            class="w-5 h-5 p-2 bg-gray-500 text-white rounded-full flex items-center justify-center"
          >
            6
          </div>
          <div
            class="w-5 h-5 p-2 bg-red-500 text-white rounded-full flex items-center justify-center"
          >
            3
          </div>
        </div>

        <div class="p-2 bg-gray-100 rounded-full">
          <Icon icon="ph:circles-four-thin" class="w-7 h-7 text-gray-950" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted} from 'vue'
import { RouterLink, RouterView} from 'vue-router'
import { useRouter } from 'vue-router'

const route = useRouter();

onMounted(() => {
  route.push('/dashboard')
})
</script>

<template>
  <RouterView />
</template>


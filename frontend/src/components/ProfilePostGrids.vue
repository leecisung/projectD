<template>
  <div class="flex">
    <PostGrid v-for="post in 8" :class="{third: post % 3 === 0}" :key="post" />
  </div>
</template>

<script>
import PostGrid from './PostGrid.vue'
export default {
  components: { PostGrid },
  name: 'ProfilePostGrids'
}
</script>

<style scoped>
  .flex{display:flex;justify-content:flex-start;flex-wrap:wrap;}
</style>

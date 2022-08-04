<template>
  <div class="posts">
    <Post v-for="post in 8" :key="post" />
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: { Post },
  name: 'Posts'
}
</script>

<style scoped>
  .posts{display:flex;flex-wrap:wrap;}
</style>

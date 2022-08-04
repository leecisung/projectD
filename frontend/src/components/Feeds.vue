<template>
  <div class="feeds">
    <Stories/>
    <Posts />
  </div>
</template>

<script>
import Posts from './Posts.vue'
import Stories from './Stories.vue'
export default {
  components: { Posts, Stories},
  name: 'Feeds'
}
</script>

<style scoped>
  .feeds{max-width:820px;margin:0 auto;padding:20px 0;}
</style>

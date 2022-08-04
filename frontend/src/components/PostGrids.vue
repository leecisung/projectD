<template>
  <div class="post-grids flex">
    <div class="ctn">
      <PostGrid />
      <PostGrid />
    </div>
    <PostGrid size="x2" />
  </div>
</template>

<script>
import PostGrid from './PostGrid.vue'
export default {
  components: { PostGrid },
  name: 'PostGrids'
}
</script>

<style scoped>
  .flex{display:flex;justify-content:flex-start;flex-wrap:wrap;}
  .ctn {display:flex;flex-direction:column;justify-content:space-between;flex-basis:32.7%;margin-right:1.1%;transition:0.3s;}
  .ctn > div {margin-bottom:px;}
</style>

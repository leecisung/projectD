<template>
  <div class="posts">
    <Post v-for="(content, cId) in all_board_data"  v-bind:post_value="content" :contents_id="cId" />
  </div>
</template>

<script>
import axios from "axios"
import Post from './Post.vue'
export default {
  components: { Post },
  name: 'Posts',
  data: function(){
    return {
      all_board_data : []
    }
  },
  created: function(){
    axios
    .get("/api/board/content")
    .then(
      (res) => {
        console.log(JSON.stringify(res.data.content)+"나 지금 Posts.vue")
        console.log(res.data.content)
        this.all_board_data = res.data.content
      }
    )
  }
}
</script>

<style scoped>
  .posts{display:flex;flex-wrap:wrap;}
</style>

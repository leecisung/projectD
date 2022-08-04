<template>
  <div class="story-circle">
    <UserIcon class="circle"/>
    <div class="post">
      <p>찾아요/지갑</p>
    </div>
  </div>
</template>

<script>
import UserIcon from './UserIcon.vue'
export default {
  name: 'StoryCircle',
  components : {UserIcon},
}
</script>

<style scoped>
  .story-circle{position:relative;flex-direction:column;align-items:center;display:flex;margin:15px 10px;}
  .post{margin-top:5px;width:100px;text-align:center;font-size:12px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .post p{padding:2px 0;overflow:hidden;text-overflow:ellipsis;word-break:break-all;font-weight:600;color:#fff;border-radius:5px;background-color:#F16B6F;}
</style>
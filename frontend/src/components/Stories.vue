<template>
  <div class="stories">
    <P class="tit">최근 업데이트</P>
    <!-- 추후에 슬라이드/캐러셀로 업데이트-->
    <div class="stories-cnt">
      <StoryCircle v-for="content in all_board_data" :each_story="content" />
    </div>
  </div>
</template>

<script>
import StoryCircle from './StoryCircle'
import axios from 'axios'
export default {
  name: 'Stories',
  components: {
    StoryCircle,
  },
  data() {
    return {
      all_board_data : []
    }
  },
  created : function() {
    axios.get("/api/board/latest")
    .then(
      (res) => {
        // console.log(JSON.stringify(res.data.content)+"나 지금 stories.vue")
        // console.log(res.data.content)
        this.all_board_data = res.data.content
      }
    )
  }
}
</script>

<style scoped>
.tit{padding:10px 0 0 10px;font-size:15px;font-weight:600;color:#666;}
.stories{border:1px solid var(--border-color);border-radius:3px;}
.stories-cnt{display:flex;width:100%;overflow-x:scroll;}
</style>

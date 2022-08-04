<template>
  <div class="stories">
    <P class="tit">최근 업데이트</P>
    <!-- 추후에 슬라이드/캐러셀로 업데이트-->
    <div class="stories-cnt">
      <StoryCircle v-for="(circle, id) in 16" :key="id" />
    </div>
  </div>
</template>

<script>
import StoryCircle from './StoryCircle'
export default {
  name: 'Stories',
  components: {
    StoryCircle,
  },
}
</script>

<style scoped>
.tit{padding:10px 0 0 10px;font-size:15px;font-weight:600;color:#666;}
.stories{border:1px solid var(--border-color);border-radius:3px;}
.stories-cnt{display:flex;width:100%;overflow-x:scroll;}
</style>

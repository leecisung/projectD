<template>
  <HesaderSub :title="title"/>
  <div class="section">
    <div class="inner">
      <div class="map">
        <KakaoMap/>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import HesaderSub from '@/components/HesaderSub.vue'
import Footer from '@/components/Footer.vue'
import KakaoMap from '@/components/KakaoMap.vue'
export default {
  components: { HesaderSub, Footer, KakaoMap },
  name: 'Explore',
   data(){
    return{
      title : '근처탐색',
    }
  },
}
</script>

<style scoped>
  .section{width:100%;height:100%;overflow:hidden;}
  .inner{padding:50px 0;box-sizing:0;}
  .flex{display:flex;justify-content:flex-start;flex-wrap:wrap;}
  .map{}
  .map .img img{width:100%;height:100%;object-fit:contain;}
</style>

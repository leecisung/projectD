<template>
  <HesaderSub :title="title" />
  <div class="section">
    <div class="inner">
      <div class="box">
        <div class="img">
          <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
        </div>
        <HomeSuggestions class="post"/>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import HomeSuggestions from"@/components/HomeSuggestions.vue"
import HesaderSub from "@/components/HesaderSub.vue"
import Footer from '@/components/Footer.vue'
export default {
  name: 'Post',
  components: {
    HomeSuggestions,
    HesaderSub,
    Footer
},
data(){
    return{
      title : '지갑찾아요',
    }
  },
}
</script>

<style scoped>
  .section{padding:50px 0;box-sizing:border-box;}
  .box{display:flex;justify-content:center;flex-direction:column;background-color:#fff;}
  .box .img{vertical-align:baseline;text-align:center;}
  .box .img img{}
</style>

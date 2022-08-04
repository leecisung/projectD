<template>
  <div class="post-more-modal" @click.stop>
    <div class="bg-layer" @click="setNPModalVisible()"/>
    <div class="modal-cont">
      <div class="box">
        <div class="img">
          <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
        </div>
        <HomeSuggestions/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSuggestions from './HomeSuggestions.vue'
export default {
  name: 'PostMoreModal',
  components: {
    HomeSuggestions
},
  methods: {
    setNPModalVisible () {
      this.$store.commit('header/setNPModalVisible', false)
    }
  }
}
</script>

<style scoped>
  .post-more-modal{position:fixed;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%, -50%);z-index:11;}
  .bg-layer{position:fixed;inset:0;width:100%;height:100%;background:#000;opacity:0.18; z-index:11;}
  .modal-cont{position:fixed;top:50%;left:50%;width:100%;background:#fff;transform:translate(-50%,-50%); z-index:20;}
  .modal-cont .box{display:flex;justify-content:center;background-color:#000;}
  .modal-cont .box .img{vertical-align:baseline;}
  .modal-cont .box .img img{width:100%;height:100%;object-fit:contain;}
    @media (max-width:414px){
      .modal-cont .box .img{display:none;}      
    }
</style>
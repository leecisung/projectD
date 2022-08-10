<template>
  <div class="post-more-modal" @click.stop>
    <div class="bg-layer" @click="setNPModalVisible()"/>
    <div class="modal-cont">
      <div class="box">
        <div class="img">
          <img src="@\assets\images\bitmaps\profile-image.jpg" alt="">
        </div>
        <HomeSuggestions :suggestions_data="board_info"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeSuggestions from './HomeSuggestions.vue'
export default {
  name: 'PostMoreModal',
  components: {
    HomeSuggestions
  },
  props : ["modal_data"],
  data : function(){
    return {
      board_info : {
        title : '',
        cost : 0,
        category : '',
        content : '',
        writer : '',
        picture : '',
        location : ''
      }
    }
  },
  computed: {
    ...mapState({
      npModalVisible: state => state.header.npModalVisible
    })
  },
  methods: {
    setNPModalVisible () {
      this.$emit('setIndex')
      this.$store.commit('header/setNPModalVisible', false)
    }
  },
  mounted : function(){
    console.log(this.modal_data,"modal.vue")
    this.board_info = this.modal_data
    console.log("board info data", this.board_info)
  },
  watch : {
    npModalVisible: function(val) {
      if (val) {
        console.log(this.modal_data, ' ssss');
      }
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
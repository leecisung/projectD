<template>
  <!-- header-sub -->
  <HesaderSub :title="title"/>
  <!-- messages-wrap -->
  <div class="messages-wrap">
    <div class="inner">
      <!-- messages-cnt -->
      <div class="messages-cnt">
          <!-- 메시지목록 -->
          <div class="conversations">
            <router-link to='/messages/Messagesdetail'>
              <Conversation v-for="conversation in 20" :key="conversation" :even="conversation % 2 === 0" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  <!-- footer -->
  <Footer/>
</template>

<script>
import Conversation from "@/components/Conversation.vue";
import HesaderSub from "@/components/HesaderSub.vue";
import Footer from "../components/Footer";
export default {
  name: 'Messages',
  components:{
    Conversation,
    HesaderSub,
    Footer
  },
  data(){
    return{
      title : '메시지',
    }
  },
}
</script>

<style scoped>
  .messages-wrap{width:100%;height:100%;overflow:hidden;}
  .messages-wrap .inner{padding:50px 0;}
  .messages-cnt{width:100%;height:100%;}
</style>

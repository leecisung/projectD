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
              <Conversation v-for="conversation in all_chat_data" v-bind:post_value="conversation"/>
              <!-- <Conversation v-bind:post_value="all_chat_data" v-for="conversation in all_chat_data"  /> -->
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
import axios from 'axios'
export default {
  name: 'Messages',
  components:{
    Conversation,
    HesaderSub,
    Footer
  },
  
  data() {
    return {
      all_chat_data:[], //바깥에 리스트형이기 때문에 꼭 이렇게

    }
  },

  created : function(){

        // axios.get("/api/chat/list").then((res) => {
        // console.log(JSON.stringify(res.data.content))
        // this.all_chat_data = JSON.stringify(res.data.content)

    axios.get("/api/chat/list").then((response) => {
    
          this.all_chat_data = response.data.content
          console.log(this.all_chat_data,'in message')
      }
    )

  }
}

</script>

<style scoped>
  .messages-wrap{width:100%;height:100%;overflow:hidden;}
  .messages-wrap .inner{padding:50px 0;}
  .messages-cnt{width:100%;height:100%;}
</style>

<template>
  <!-- header-sub -->
  <HesaderSub :title="title"/>
  <!-- messages-wrap -->
  <div class="messages-wrap">
    <div class="inner">
      <!-- messages-cnt -->
      <div class="messages-cnt">
          <!-- 메지시가 없을 시 -->
          <MessagesEmptyState v-if="!messageSelected" />
          <!-- 메지시가 있을 시 -->
          <ConversationMessages v-if="messageSelected" />
      </div>
    </div>
  </div>
  <!-- footer -->
  <Footer/>
</template>

<script>
import ConversationMessages from "@/components/ConversationMessages.vue"
import MessagesEmptyState from"@/components/MessagesEmptyState.vue"
import HesaderSub from "@/components/HesaderSub.vue"
import Footer from "../components/Footer"
export default {
  name: 'MessagesDetail',
  components:{
    ConversationMessages,
    MessagesEmptyState,
    HesaderSub,
    Footer
  },
  data(){
    return {
      title : ' 이찬혁님과 대화', // 유저네임
      messageSelected: true
    }
  },
}
</script>

<style scoped>
  .messages-wrap{width:100%;height:100%;overflow:hidden;}
  .messages-wrap .inner{padding:50px 0;}
  .messages-cnt{width:100%;height:100%;}
</style>

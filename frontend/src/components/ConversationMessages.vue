<template>
  <!-- ConversationMessages -->
  <div class="conversation-messages">
    <div class="conversation-messages-cnt">

      <div class="message-cnt">
        <!-- user -->
        <UserIcon class="small"/>
        <!-- info-->
        <div class="message-user-info">
          <div class="message-notice">
            <div class="message-notice-top">
              <!-- 게시물 -->
              <span class="message-notice-post">지갑찾아요</span>
            </div>
            <div class="message-notice-bottom">
              <!-- 닉네임 -->
              <span class="message-notice-nickname">이찬혁</span>
              <!-- 등록지역 -->
              <span class="message-notice-local">신도림동</span>
              <!-- 등록시간 -->
              <span class="message-notice-time">1분전</span>
            </div>
          </div>
        </div>
      </div>

      <!-- tooltop-->
      <div class="tooltip" :class="{active: toolTipVisible}">
        <button type="button" @click="setToolTipVisibility(true)">
          <span class="tool-icon">
            <i class="fa-solid fa-circle-info"></i>
          </span>
          <span class="tit">Info Text</span>
        </button>
        <div v-show="toolTipVisible" class="view-box">
          <div class="text-box">
            Info Text Info Text Info Text Info Text Info Text Info Text Info Text Info Text Info Text Info Text Info Text
          </div>
        </div>
      </div>
    </div>

    <!--  메시지 -->
    <div class="messages">
      <Message v-for="message in 25" :sent="message % 2 === 0" :key="message" />
    </div>

    <!--  메시지 입력-->
    <div class="message-input-ctn">
      <div class="message-input">
        <div class="emoji-and-input">
          <button type="button" class="emoji-btn">
            <span>
              <i class="fa-regular fa-face-kiss-wink-heart"></i>
            </span>
          </button>
          <input v-model.trim="messageText" placeholder="Message..." type="text">
        </div>
        <div v-if="messageText.length === 0" class="msg-actions">
          <button type="button" class="photo-btn">
            <span>
              <i class="fa-solid fa-camera-retro"></i>
            </span>
          </button>
        </div>
        <button v-else :class="{'clear-btn': true, 'post-btn': true}" type="button">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Message from './Message.vue'
import UserIcon from './UserIcon.vue'
export default {
  name: 'ConversationMessages',
  components: { Message, UserIcon},
  data () {
      return {
      messageText: ''
    }
  },
  computed:{
    ...mapState({
      toolTipVisible: state => state.header.toolTipVisible
    }),
  },
  methods: {
    setToolTipVisibility () {
      this.$store.commit('header/setToolTipVisible', !this.toolTipVisible)
    },
  }
}
</script>

<style scoped>
  .conversation-messages{width:100%;height:100%;overflow-y:auto;}
  .conversation-messages-cnt{position:fixed;top:50px;left:0;display:flex;justify-content:space-between;align-items:center;padding:0 20px;width:100%;height:60px;border-bottom:1px solid var(--border-color);box-sizing:border-box;background-color:#fff;}
   
   /* info */
  .message-item{display:flex;padding:10px 15px;justify-content:space-between;border-top:1px solid var(--border-color);box-sizing:border-box;}
  .message-item:first-child{border-top:none;}
  .message-cnt{display:flex;align-items:center;overflow:hidden;}
  .message-user-info{margin-left:12px;margin-right:20px;font-size:13px;font-weight:500;}
  .message-notice-nickname{font-size:14px;color:#333;font-weight:600;}
  .message-notice-local,
  .message-notice-time{font-size:12px;color:#666;}
  .message-notice span + span{margin-left:5px;}
  .message-notice-commnet{font-size:13px;color:#666;}
  .message-notice-post{font-size:15px;color:#333;}
  .message-notice-bottom{width:100%;max-width:220px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .message-notice-bottom .message-notice-nickname{font-size:12px;}
  
  /* Tooltip */
  .tooltip{display:inline-block;position:relative;vertical-align:middle;z-index:2;}
  .tooltip.active button:after{color:var(--blue-text);}
  .tooltip button{position:relative;margin-bottom:7px;width:25px;height:25px;overflow:hidden;}
  .tooltip button:after{content:'\f05a';display:inline-block;width:25px;height:25px;font-size:20px;line-height:25px;color:#888;font-family:'Font Awesome 6 Free';font-weight:var(--fa-style, 900);}
  .tooltip button > *{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;}
  .tooltip .view-box{position:absolute;top:45px;right:0%;}
  .tooltip .text-box{position:relative;padding:10px 15px;width:200px;line-height:17px;color:#fff;font-size:11px;background:#858889;box-sizing:border-box;}
  .tooltip .text-box:after{content:'';position:absolute;top:-8px;right:4px;display:inline-block;width:15px;height:15px;background-color:#858889;transform:rotate(45deg);}
  .info{display:flex;align-items:center;padding:0 12px;height:100%;}

  /* messages */
  .messages{display:flex;flex-direction:column;padding:80px 10px 60px;height:calc(100% - 190px);box-sizing:border-box;overflow-y:scroll;-ms-overflow-style:none}
  .messages::-webkit-scrollbar{display:none;}
  .emoji-and-input {display:flex;align-items:center;width:92%;}
  .message-input-ctn{position:fixed;bottom:50px;left:0;display:flex;align-items:center;width:100%;height:60px;background-color:#fff;}
  .message-input{display:flex;justify-content:space-between;align-items:center;margin:0 auto;padding:0 10px;width:90%;height:45px;border:1px solid var(--border-color);border-radius:22px;}
  .message-input input{display:block;margin-left:8px;width:100%;height:40px;font-size:16px;}
  .message-input > input::placeholder{font-size:16px}
  .emoji-btn{font-size:25px;margin-left:10px;font-weight:400;}
  .photo-btn span{font-size:25px;}
  .post-btn{padding:0 8px;color:#0095F6;transition:0.3s;font-weight:600;font-size:14px;}

</style>

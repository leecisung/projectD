<template>
<!-- ConversationMessages -->
  <div class="message-item">
    <div class="message-cnt">
      <!-- user -->
      <UserIcon class="online"/>
      <!-- <UserIcon v-if="even" class="online"/>
      <UserIcon v-else class="offline" /> -->
      <!-- info-->
      <div class="message-user-info">
        <div class="message-notice">
          <div class="message-notice-top">
            <!-- 닉네임 -->
            <router-link to="/profile">
              <span class="message-notice-nickname">{{all_chat_data.room_creator}}</span>
            </router-link>
            <!-- 등록지역 -->
            <span class="message-notice-local">{{all_chat_data.address}}</span>
            <!-- 등록시간 -->
            <span class="message-notice-time">{{all_chat_data.time}}</span>
          </div>
          <div class="message-notice-bottom">
            <!-- 활동코멘트 -->
            <span class="message-notice-commnet">
               <em>{{all_chat_data.message}}</em>
              <!-- <em v-if="even">{{single_data.message}}</em>
              <em v-else >{{single_data.message}}</em> -->
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 메시지최신상황 -->
    <div class="new-message">
      <span></span>
      <!-- <span v-if="even"></span>
      <span v-else>New</span> -->
    </div>
  </div>


</template>

<script>
import axios from 'axios'

import UserIcon from './UserIcon.vue'
export default {
  name: 'Conversation',
  components :{ UserIcon },
  props: ["post_value"],
  data : function(){
      return {
        all_chat_data:{
          room_creator:'',
          paticipant:'',
          message:'',
          time:'',
          address:'',
          }
 
      }
    },
   

    mounted : function(){
      
      if(this.post_value){
        console.log(this.post_value,"in conversation")
        this.all_chat_data = this.post_value

      
      }
      // console.log(this.single_data)
    }
}
</script>

<style scoped>
  .message-item{display:flex;padding:10px 15px;justify-content:space-between;border-top:1px solid var(--border-color);box-sizing:border-box;}
  .message-item:first-child{border-top:none;}
  .message-cnt{display:flex;align-items:center;overflow:hidden;}
  .message-user-info{margin-left:12px;margin-right:20px;font-size:13px;font-weight:500;}
  .message-notice-nickname{margin-right:5px;font-size:14px;color:#333;font-weight:600;}
  .message-notice-local,
  .message-notice-time{font-size:12px;color:#666;}
  .message-notice span + span{margin-left:5px;}
  .message-notice-bottom{width:100%;max-width:220px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .message-notice-commnet{font-size:13px;color:#666;}
  .new-message span{display:inline-block;font-size:13px;color:var(--blue-text);font-weight:600;transform:translateY(100%);}
    @media (max-width:600px){
        .message-item{padding:5px;}
    }
</style>

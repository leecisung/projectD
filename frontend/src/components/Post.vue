<template>
  <div class="post">
    <!-- 등록한 게시물 이미지-->
    <div class="post-media">
      <PostImage :postimage_value="post_value"/>
    </div>
    <!-- 등록한 게시물 유저정보-->
    <div class="post-profile">
      <UserInfoIcon :userinfoicon_value="post_value"/>
      <button class="more-btn">
        <span>
          <i class="fa-solid fa-ellipsis"></i>
        </span>
      </button>
    </div>
    <div class="post-desc">
      <button class="post-more" @click="setNPModalVisible(true)">
        <span>자세히 보기</span>
      </button>
      <div class="post-users">
        <span>참여자4명</span>
      </div>
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
          <input v-model.trim="commentText" placeholder="Message..." type="text">
        </div>
        <div v-if="commentText.length === 0" class="msg-actions">
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
    <PostMoreModal v-if="npModalVisible && choiceId === contents_id" :modal_data="post_value" @setIndex="setIndex" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserInfoIcon from './UserInfoIcon.vue'
import PostImage from './PostImage.vue'
import PostMoreModal from './PostMoreModal.vue'
// import axios from 'axios'
export default {
  name: 'Post',
  components: { UserInfoIcon, PostImage, PostMoreModal },
  computed: {
    ...mapState({
      npModalVisible: state => state.header.npModalVisible
    })
  },
  props : ["post_value", "contents_id"],
  data() {
    return {
      commentText: '',
      choiceId: null
    }
  },
  methods: {
    setNPModalVisible () {
      this.choiceId = this.contents_id;
      this.$store.commit('header/setNPModalVisible', !this.npModalVisible)
    },
    setIndex () {
      this.choiceId = null
    }
  },
  mounted : function(){
    console.log(this.post_value, ' index: ', this.contents_id, 'POST.VUE')
  }
}
</script>

<style scoped>
  .post{margin-top:20px;padding-bottom:10px;width:33%;border:1px solid var(--border-color);}
  .post:last-child{border-right:1px solid var(--border-color);}
  .post-profile{display:flex;align-items:center;justify-content:space-between;padding:0 12px;height:65px;box-sizing:border-box;}
  .post-desc{position:relative;padding:0 12px;text-align:right;box-sizing:border-box;}
  .post-desc .post-more{font-size:12px;}
  .post-desc .post-users{font-size:10px;color:#888;}
  
  /* messages */
  .emoji-and-input {display:flex;align-items:center;width:92%;}
  .message-input-ctn{display:none;align-items:center;width:100%;height:60px;background-color:#fff;}
  .message-input{display:flex;justify-content:space-between;align-items:center;margin:0 auto;padding:0 10px;width:90%;height:36px;border:1px solid var(--border-color);border-radius:22px;}
  .message-input input{display:block;margin-left:8px;width:100%;height:36px;font-size:12px;}
  .message-input > input::placeholder{font-size:12px}
  .emoji-btn{font-size:15px;margin-left:0px;font-weight:400;}
  .photo-btn span{font-size:15px;}
  .post-btn{padding:0 8px;color:#0095F6;transition:0.3s;font-weight:600;font-size:12px;}

  @media (max-width:680px){
    .post{margin-top:20px;padding-bottom:0px;width:49.5%;}
    .message-input-ctn{display:flex;}
  }
  @media (max-width:414px){
    .post{width:100%;}
  }
</style>









<template>
  <div class="home-suggestions">
    <div>
      <P class="tit">등록정보</P>
      <div class="profile">
        <UserIcon class="small"/>
        <div class="about">
          <!-- 화면 분할 고민-->
          <div class="names">
            <!-- <p>이찬혁</p> -->
            <p>{{suggestions_data.writer}}</p>
            <p>힙합은 안 멋져</p>
          </div>
        </div>
      </div>
      <div class="txt-box">
        <P class="tit">상세정보</P>
        <p class="txt">
          <!-- <span>서울시강남구서초동</span> -->
          <span>분실 위치 : {{suggestions_data.location}}</span>
          <!-- <span>13분전</span> -->
        </p>
        <p class="txt">
          <span>분실물 : {{suggestions_data.category}}</span><br>
          <!-- <span>지갑</span> -->
          <!-- <span>{{suggestions_data.category}}</span><br> -->
          <span>사례금 : {{suggestions_data.cost}}</span>
        </p>
        <!-- <p class="txt">
          <span>01일 03일 37분 42초 남음</span>
        </p> -->
        <P class="tit mt-5">지갑찾아요</P>
        <textarea readonly v-model="suggestions_data.content">
        </textarea>
      </div>
    </div>
    <div class="main-suggestions">
      <div class="suggestions-head">
        <span class="tit">
          참여자목록
        </span>
        <span class="see-all">
          10명
        </span>
      </div>
      <div class="suggestions-body">>
        <FollowUserInfoIcon v-for="user in 10" :key="user" />
      </div>
    </div>
    <div class="link-site">
      <div class="link-list">
        <button class="link-btn">
          <span>경찰청분실물센터</span>
        </button>
        <button class="link-btn">
          <span>서울교통공사유실물센터</span>
        </button>
        <button class="link-btn">
          <span>지하철분실센터</span>
        </button>
        <button class="link-btn">
          <span>택시분실센터</span>
        </button>
        <button class="link-btn">
         <span>버스분실센터</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FollowUserInfoIcon from './FollowUserInfoIcon.vue'
import UserIcon from './UserIcon.vue'
export default {
  components: { FollowUserInfoIcon, UserIcon, },
  name: 'HomeSuggestions',
  props : ["suggestions_data"],
  mounted : function() {
    console.log(this.suggestions_data,'suggestions vue')
  }
}
</script>

<style scoped>
  .mt-5{margin-top:10px;}
  .home-suggestions{max-width:300px;padding:15px 10px 0; background-color: #fff;overflow:hidden;}
  .home-suggestions.post{margin:0 auto;max-width:680px;width:95%;}
  .tit{font-size:13px;font-weight:600;color:#666;}
  .profile{display:flex;align-items:center;padding:10px 0;box-sizing:border-box;}
  .profile .about {display:flex;align-items:center;color: var(--grey-text);}
  .profile .names{margin-left:16px;font-size:12px;color:#666;}
  .txt-box{margin-bottom:10px;width:100%;height:140px;overflow:hidden;}
  .txt-box .txt{font-size:11px;color:#888;}
  .txt-box textarea{width:100%;height:100%;color:#888;resize:none;}

  /* Main Suggestions */
  .suggestions-head{display:flex;justify-content:space-between;margin-bottom:5px;font-weight:600;font-size:12px;color:var(--grey-text);}
  .suggestions-head .see-all{font-size:12px;color:#333;}
  .suggestions-head .see-all:hover{color:#84B1ED;}
  .suggestions-body{max-height:200px;overflow-y:scroll;}
  
  /* Footer */
  .link-site{margin-top:10px;opacity:0.7;}
  .link-list button{margin-left:10px;}
  .link-list button span{font-size:10px;font-weight:600;color:#888;}
  .link-list button:hover span{color:#333;}
</style>

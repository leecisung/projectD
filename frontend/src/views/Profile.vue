<template>
  <HesaderSub :title="title" />
  <div class="section">
    <div class="user-info">
      <UserIcon class="lage"/>
      <div class="info">
        <div class="txt-box flex" style="align-items:baseline;">
          <div class="user-name">{{db_profile_data.name}}</div>
          <div class="txt" style="margin-left:5px;line-height:28px;">{{db_profile_data.address}}</div>
        </div>
        <div class="txt-box flex">
          <router-link class="edit-btn" to="#">Edit Profile</router-link>
          <button type="button" class="settings-btn">
            <span>
              <i class="fa-solid fa-gear"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
        
    <div class="user-info money">
      <P></P>
      <div class="txt-box flex" style="justify-content:space-evenly;">
        <div class="user-stat">
          <div class="ico" style="color:#3CCF4E;">
            <i class="fa-solid fa-money-bill-wave"></i>
          </div>
          <div>예치금</div>  
          <div class="num"><b>1</b></div>
        </div>
        <div class="user-stat">
          <div class="ico" style="color:#F2DF3A;">
            <i class="fa-brands fa-bitcoin"></i>
          </div>
          <div>토큰</div>  
          <div class="num"><b>88</b></div>
        </div>
        <div class="user-stat">
          <div class="ico" style="color:#F37878;">
            <i class="fa-solid fa-coins"></i>
          </div>
          <div>포인트</div>  
          <div class="num"><b>888</b></div>
        </div>
      </div>
    </div>
    
    <div class="user-info progress">
      <div class="flex" style="justify-content:space-between;">
        <div class="hand-icon">
          <i class="fa-solid fa-hand-holding-heart"></i>
        </div>
        <p class="tit t-right">
          지금 이렇게<br/>
          베풀고 있어요
        </p>
      </div>
      <div class="txt-box" style="margin-top:30px;">
        <dl>
          <dt class="tit">
            <div>&bull;&nbsp;게시글</div>  
          </dt>
          <dd class="txt">
            <div class="num">{{db_profile_data.write}}<b>건</b></div>
          </dd>
        </dl>
        <dl>
          <dt class="tit">
            <div>&bull;&nbsp;참여글</div>  
          </dt>
          <dd class="txt">
            <div class="num">{{db_profile_data.comment}}<b>건</b></div>
          </dd>
        </dl>
        <dl>
          <dt class="tit">
            <div>&bull;&nbsp;완료</div>  
          </dt>
          <dd class="txt">
            <div class="num">888<b>건</b></div>
          </dd>
        </dl>
      </div>
    </div>
    
    <Highlights />
    <div class="user-content">
      <div class="tab-layout">
        <router-link
          :class="{ 'clear-btn': true, active: $route.name === 'profile' }"
          to="/profile"
        >
          <span><i class="fa-solid fa-table-cells-large"></i></span>
          <span>게시글</span>
        </router-link>
        <router-link
          :class="{ 'clear-btn': true, active: $route.name.includes('profile-saved'),}"
          to="/profile/saved"
        >
          <span><i class="fa-regular fa-bookmark"></i></span>
          <span>참여글</span>
        </router-link>
        <router-link
          :class="{'clear-btn': true, active: $route.name.includes('profile-tagged'),}"
          to="/profile/tagged"
        >
          <span><i class="fa-solid fa-chart-line"></i></span>
          <span>완료</span>
        </router-link>
      </div>
      <ProfilePostGrids v-if="$route.name === 'profile'" />
    </div>
  </div>
  <Footer/>
</template>

<script>
import Highlights from "../components/Highlights.vue";
import ProfilePostGrids from "../components/ProfilePostGrids.vue";
import HesaderSub from "@/components/HesaderSub.vue";
import Footer from "@/components/Footer.vue";
import UserIcon from "@/components/UserIcon.vue";

import axios from 'axios'

export default {
  name: "ProfileDetail",
  components: { Highlights, ProfilePostGrids, HesaderSub, Footer, UserIcon },
  data(){
    return{
      title : '내 정보',
      db_profile_data : {
        name : '',
        id : '',
        address : '',
        write : 0,
        comment : 0
      }
    }
  },
  created : function(){
    axios.get('/api/profile/info')
    .then(
      (res) => {
        console.log(JSON.stringify(res.data),'I\"m in Profile.vue')
        this.db_profile_data = res.data.content[0]
      }
    )
  }
};
</script>

<style scoped>
  .flex{display:flex;}
  .section{padding:100px 0 50px;box-sizing:border-box;}
  .user-info{display:flex;align-items:flex-start;;margin:20px auto 60px;padding:0 20px;;max-width:680px;box-sizing:border-box;}
  .user-info .info{margin-left:20px;width:300px;}
  .user-info .txt-box{width:100%;font-size:13px;}
  .user-info .txt-box + .txt-box{margin-top:10px;}
  .user-info .user-name{font-size:20px;color:#333;}
  .user-info .edit-btn{display:grid;place-items:center;height:30px;width:80px;font-size:12px;font-weight:600;color:#333;border-radius:5px;border:1px solid var(--border-color);}
  .user-info .settings-btn{margin-left:15px;font-size:20px;color:#333;}
  .user-info .txt-box .txt,
  .user-info .user-stat div,
  .user-info .user-stat span{font-size:14px;color:#666;}
  .user-info .tit{font-size:24px;color:#666;}
  .user-info.money{max-width:680px;margin:0 auto;text-align:right;}
  .user-info.money .user-stat{position:relative;display:inline-block;width:33%;text-align: center;}
  .user-info.money .user-stat:after{content:'';display:inline-block;position:absolute;top:0;right:-15%;width:1px;height:100%;background-color:var(--border-color);}
  .user-info.money .user-stat:last-child::after{display:none;}
  
  .user-info.progress{display:block;max-width:680px;margin:20px auto 0;padding:30px 20px;}
  .user-info.progress .user-stat{position:relative;display:inline-block;width:33%;text-align: center;}
  .user-info.progress dl{clear:both;padding:30px 10px; width:100%;border-bottom:1px solid var(--border-color);}
  .user-info.progress dl dt{float:left;width:20%;}
  .user-info.progress dl dd{float:right;width:80%;text-align:right;overflow:hidden;}
  .user-info.progress dl dt div,
  .user-info.progress dl dd div{color:#666;overflow:hidden;text-overflow:ellipsis;}
  .user-info.progress dl dt div{font-size:14px;}
  .user-info.progress dl dd div{font-size:16px;font-weight:bold;}

  .hand-icon{width:80px;height:80px;font-size:35px;line-height:80px;text-align:center;vertical-align:baseline;color:#fff;border-radius:100%;background-color:#F37878;box-sizing:border-box;}
  .user-info .user-stat .ico{font-size:30px;}
  .user-stat{margin-right:40px;}
  .user-stat div.num{position:relative;overflow:hidden;text-overflow:ellipsis;}

  

/* User Content */
.user-content{width:100%;}
.tab-layout{display:flex;justify-content:center;width:100%;border-top:1px solid var(--border-color);}
.tab-layout .clear-btn{position:relative;bottom:1px;display:flex;justify-content:space-around;align-items:center;height:50px;width:80px;margin-right:60px;font-size:12px;font-weight:600;transition:0.3s;}
.tab-layout .clear-btn:active{opacity:0.5;}
.tab-layout .clear-btn.active{color:#333;border-top:1px solid #333;}
.tab-layout .clear-btn:nth-last-child(1){margin-right:0;}
@media (max-width:680px){
  .user-stat {margin-right:20px;}
}
</style>

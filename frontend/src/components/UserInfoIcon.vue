<template>
  <div class="user-info-icon">
    <UserIcon class="small"/>
    <div class="not-image">
      <router-link to="/profile" class="username">
        <span>이찬혁</span>
      </router-link>
      <div class="info">
        <p>
          <span>서울 종로구 평창동</span>
          <span>13분전</span>
        </p>
        <p>
          <span>분실물/지갑</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from './UserIcon.vue';
export default {
    name: "UserInfoIcon",
    components: { UserIcon }
}
</script>

<style scoped>
  .user-info-icon{display:flex;align-items:center;}
  .not-image{margin-left:12px;font-size:11px;font-weight:500;}
  .username{color:#000;}
  .info{margin-top:2px;font-size:11px;color:var(--grey-text);}
  .info p{display:flex;}
  .info p span{display:inline-block;}
    @media (max-width:480px){
      .info p,
      .info p span{display:block;}
    }
    @media (max-width:414px){
      .info p{display:flex;}
      .info p span{display:inline-block;}
    }
  
</style>

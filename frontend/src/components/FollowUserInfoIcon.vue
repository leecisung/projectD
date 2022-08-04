<template>
  <div class="follow-ctn">
    <UserInfoIcon class="small" />
    <div class="btn-box">
      <button class="like-btn">
        <span><i class="fa-regular fa-heart"></i></span>
      </button>
      <button class="report-btn">
        <span><i class="fa-regular fa-heart"></i></span>
      </button>
    </div>
  </div>
</template>

<script>
import UserInfoIcon from "./UserInfoIcon.vue"

export default {
  name: 'FollowUserInfoIcon',
  components: { UserInfoIcon },
}
</script>

<style scoped>
  .follow-ctn{display:flex;justify-content:space-between;align-items:center;margin:12px 0;}
  .btn-box{display:flex;}
  .btn-box button{margin-left:4px;}
  .btn-box button:first-child{margin-left:0;}
  .btn-box button span{display:inline-block;font-size:12px;font-weight:600;color:#333;}
  .btn-box button:hover span{color:#84B1ED;}
</style>

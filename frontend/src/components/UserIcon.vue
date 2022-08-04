<template>
  <div class="user-img">
    <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
  </div>
</template>

<script>
export default {
  name : 'ProfileIconUser',
}
</script>

<style>
  .user-img{position:relative;display:grid;place-items:center;min-height:56px;min-width:56px;border-radius:100%;background:#84B1ED}
  .user-img img{width:48px;height:48px;border:2px solid #fff;object-fit:cover;border-radius:50%;}
  .user-img:after{content:'';display:none;position:absolute;right:0;bottom:0;width:17px;height:17px;border:3px solid #fff;border-radius:50%;box-sizing:border-box;}  
  .user-img.online:after{content:'';display:block;background-color:#78DE45;}
  .user-img.offline:after{content:'';display:block;background-color:#F16B6F;}

  .user-img.small{min-height:40px;min-width:40px;}
  .user-img.small img{width:32px;height:32px;}
  .user-img.small.online:after,
  .user-img.small.offline:after{content:'';width:12px;height:12px;border:2px solid #fff;}
  .user-img.lage{min-height:80px;min-width:80px;}
  .user-img.lage img{width:70px;height:70px;}
  .user-img.circle{min-height:65px;min-width:65px;}
  .user-img.circle img{width:55px;height:55px;}
  
</style>
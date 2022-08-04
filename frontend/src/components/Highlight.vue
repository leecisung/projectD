<template>
  <button class="highlight-circle">
    <div class="img-box">
      <span class="img">
        <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
      </span>
    </div>
    <div class="txt-box">
        <p class="txt">NFT</p>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Highlight'
}
</script>

<style scoped>
  .highlight-circle{position:relative;display:flex;flex-direction:column;align-items:center;margin:15px 20px;}
  .img-box .img{border-radius:100%;display:grid;place-items:center;width:80px;height:80px;background:#84B1ED;}
  .img-box .img img{width:68px;height:68px;border:4px solid #FFFFFF;object-fit:cover;border-radius:100%}
  .txt-box{margin-top:5px;}
  .txt-box .txt{font-size:14px;color:#666;font-weight:600;}
</style>
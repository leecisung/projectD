<template>
  <div :class="{'post-grid': true, 'bigger-grid': size === 'x2' }">
    <!-- 이미지 -->
    <div class="image">
      <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
    </div>
    <!-- 이미지 오버레이 -->
    <div class="image-overlay">
      <div class="post-count">
        <div class="likes">
          <span>
            <i class="fa-regular fa-heart"></i>
          </span>
          <span>
            6,500
          </span>
        </div>
        <div class="comments">
          <span>
            <i class="fa-regular fa-comment"></i>
          </span>
          <span>
            124
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostGrid',
  props: {
    size: {
      type: String,
      default: () => 'x1'
    }
  }
}
</script>

<style scoped>
  .post-grid{position:relative;flex-basis:32.0%;margin-right:2%;margin-bottom:20px;transition:0.3s;}
  .post-grid.bigger-grid{flex-basis:66.2%;margin-right:0;}
  .post-grid.third{margin-right:0;}
  .image{width:100%;height:100%;cursor:pointer;z-index:999;}
  .image > img{display:block;width:100%;height:100%;object-fit:cover;cursor:pointer;}
  
  .image-overlay:hover{display:grid;}
  .image-overlay{position:absolute;inset:0;bottom:3px;display:none;cursor:pointer;color:#FFFFFF;place-items:center;background:#00000044;transition:1000s;opacity:0;}
  .image:hover + .image-overlay {display:grid;opacity:1;}
  .post-grid.bigger-grid .image-overlay {bottom:3px;}
  
  .post-count{display:flex;}
  .post-count > div {display:flex;align-items:center;}
  .post-count > div > span:nth-child(1) {margin-right:4px;}
  .likes{margin-right:20px;font-size:15px;}
  .comments{font-size:15px;}
</style>

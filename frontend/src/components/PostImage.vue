<template>
  <!-- 이미지 등록-->
  <div class="post-image">
    <img :src="img_url" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostImage',
  props:["postimage_value"],
  data (){
    return {
      img_name : '',
      img_url : ''
    }
  },
  created : function(){
    console.log(this.postimage_value.picture, "나 여기 postimage")
    this.img_name = "/api/board/get_image?picture_name=" + this.postimage_value.picture
    console.log(this.img_name, " 나  여기 img_name 출력")
    axios.get(this.img_name)
    .then(
      (res) => {
        this.img_url = res.data
        console.log(res.data)
      }
    )
  }
}
</script>

<style scoped>
  img {width:100%;}
</style>

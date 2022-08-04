<template>
  <!-- header-sub-->
  <div class="header-sub">
    <div class="inner">
      <router-link to="/" class="back">
        <h2>
          <span class="icon"><i class="fa-solid fa-angle-left"></i></span>
          <span>{{title}}</span>
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSub',
  props: {
    title: {
      type: String,
    },
  }
}
</script>

<style scoped>
  .header-sub{position:fixed;top:0;left:0;width:100%;background-color:#fff;z-index:5;}
  .header-sub .inner{padding:10px 15px;height:50px;border-bottom: 1px solid var(--border-color);}
  .header-sub .back h2{display:inline-block;font-size:20px;color:#333;letter-spacing:-0.02em;box-sizing:border-box;}
  .header-sub .back .icon{display:inline-block;margin-right:10px;}
</style>
<template>
  <div id="footer">
    <div class="inner">
      <div class="footer-cnt">
        <div class="quick-box">
            <router-link to="/">
              <span class="home-icon">
                <i class="fa-solid fa-house"></i>
              </span>
            </router-link>
            <router-link to="/search">
              <span class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </router-link>
            <router-link to="/registration">
              <span class="post-icon">
                <i class="fa-regular fa-square-plus"></i>
              </span>
            </router-link>
            <router-link to="/explore">
              <span class="explore-icon">
                <i class="fa-regular fa-compass"></i>
              </span>
            </router-link>
            <router-link to="/about">
              <span class="info-icon">
                <i class="fa-regular fa-bars"></i>
              </span>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  },
  methods: {
  },
}
</script>

<style scoped>
/* header */
#footer{position:fixed;bottom:0;left:0;width:100%;background-color:#fff;z-index:10;}
.footer-cnt{display:none;justify-content:space-between;align-items:center;padding:15px;height:50px;border-top:1px solid var(--border-color);box-sizing:border-box;background-color:#fff;}

/* quick-box */
.quick-box{position:relative;display:flex;justify-content:space-between;align-items:center;width:100%;height:100%;}
span.home-icon,
span.search-icon,
span.explore-icon,
span.post-icon,
span.info-icon{display:inline-block;width:30px;height:30px;text-align:center;color:#333;font-size:20px;line-height:30px;}
span.home-icon:hover,
span.home-icon:active,
span.home-icon:focus,
span.search-icon:hover,
span.search-icon:active,
span.search-icon:focus,
span.post-icon:hover,
span.post-icon:active,
span.post-icon:focus,
span.explore-icon:hover,
span.explore-icon:active,
span.explore-icon:focus,
span.info-icon:hover,
span.info-icon:active,
span.info-icon:focus{color:var(--blue-text);}

@media (max-width:680px){
  .footer-cnt,
  .quick-box{display:flex;}
}
</style>
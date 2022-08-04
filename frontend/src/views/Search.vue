<template>
  <!-- header-sub-->
  <div class="header-sub">
    <div class="inner">
      <router-link to="/" class="back">
        <h2>
          <span class="icon"><i class="fa-solid fa-angle-left"></i></span>
        </h2>
      </router-link>
      <div class="search-bar">
          <input type="text" title="search" placeholder="물건이나 동네를 검색해보세요"/>
          <button type="button" class="btn-cancel">
            <span>
              <i class="fa-solid fa-circle-xmark"></i>
            </span>
          </button>
      </div>
    </div>
  </div>

  <!-- section -->
  <div class="section">
    <div class="inner">
      <PostGrids />
      <div class="flex">
        <PostGrid v-for="post in 9" :class="{third: post % 3 === 0}" :key="post" />
      </div>
      <PostGrids />
      <div class="flex">
        <PostGrid v-for="post in 8" :class="{third: post % 3 === 0}" :key="post" />
      </div>
    </div>
  </div>

  <Footer/>
</template>

<script>
import PostGrid from '../components/PostGrid.vue'
import PostGrids from '../components/PostGrids.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { PostGrid, PostGrids, Footer },
  name: 'Search',
}
</script>

<style scoped>
  .section{padding:60px 0;box-sizing:border-box;}
  .flex{display:flex;justify-content:flex-start;flex-wrap:wrap;}
  .header-sub{position:fixed;top:0;left:0;width:100%;background-color:#fff;z-index:5;}
  .header-sub .inner{padding:10px 15px;height:50px;border-bottom: 1px solid var(--border-color);}
  .header-sub .back h2{display:inline-block;font-size:20px;color:#333;letter-spacing:-0.02em;box-sizing:border-box;}
  .header-sub .back .icon{display:inline-block;margin-right:10px;}
  /* search */
  .search-bar{position:fixed;top:8px;right:10px;width:calc(100% - 50px);}
  .search-bar:hover:before,
  .search-bar:active:before,
  .search-bar:focus:before{color:#9aa1a4;}
  .search-bar:before{content:'\f002';position:absolute;left:0;top:3px;display:block;width:30px;height:30px;text-align:center;line-height:30px;color:#5d6365;font-size:15px;font-family:'Font Awesome 6 Free';font-weight:var(--fa-style, 900);}
  .search-bar input{width:100%;height:36px;padding:0 25px 0 30px;color:#333;font-size:1rem;border-radius:10px;background-color:#e8e8e8;box-sizing:border-box;cursor:text;}
  .search-bar input::placeholder {color:#888;font-weight:300;}
  .search-bar button.btn-cancel{display:none;position:absolute;right:7px;top:10px;}
  .search-bar:hover button.btn-cancel,
  .search-bar:active button.btn-cancel,
  .search-bar:focus button.btn-cancel{display:block;}

</style>

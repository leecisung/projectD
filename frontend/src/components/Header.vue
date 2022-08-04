<template>
  <div id="header">
    <div class="inner">
      <div class="header-cnt">
        <!-- logo-->
        <router-link class="logo" to="/">
          <img src="@/assets/images/bitmaps/logo.png" alt="">
        </router-link>
        <!-- web search -->
        <div class="search-bar">
            <input type="text" title="search" placeholder="물건이나 동네를 검색해보세요"/>
            <button type="button" class="btn-cancel">
              <span>
                <i class="fa-solid fa-circle-xmark"></i>
              </span>
            </button>
        </div>
        <!-- mobile quick-box -->
        <div class="quick-box">
          <router-link to="/messages">
            <span class="messages-icon">
              <i class="fa-brands fa-facebook-messenger"></i>
            </span>
          </router-link>
          <router-link to="/activity">
            <span class="activity-icon">
              <i class="fa-solid fa-bolt-lightning"></i>
            </span>
          </router-link>
          <div class="profile">
            <button class="profile-btn" @click="setProfileModalVisibility(true)">
              <span :class="{ active: profileModalVisible }">
                <img src="@/assets/images/bitmaps/profile-image.jpg" alt="">
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ProfileModal v-show="profileModalVisible"/>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import ProfileModal from './ProfileModal.vue'

export default {
  name: 'Header',
  components: { ProfileModal,
  },
  computed: {
    ...mapState({
      profileModalVisible: state => state.header.profileModalVisible,
    })
  },
  methods: {
    setProfileModalVisibility () {
      this.$store.commit('header/setProfileModalVisible', !this.profileModalVisible)
    },
  }
}
</script>

<style scoped>
/* header */
#header{position:fixed;top:0;left:0;width:100%;background-color:#fff;z-index:10;}
.header-cnt{display:flex;justify-content:space-between;align-items:center;padding:15px;height:50px;border-bottom:1px solid var(--border-color);box-sizing:border-box;background-color:#fff;}
.header-cnt .logo{height:30px;}

/* search */
.search-bar{position:relative;}
.search-bar:hover:before,
.search-bar:active:before,
.search-bar:focus:before{color:#9aa1a4;}
.search-bar:before{content:'\f002';position:absolute;left:0;top:3px;display:block;width:30px;height:30px;text-align:center;line-height:30px;color:#5d6365;font-size:15px;font-family:'Font Awesome 6 Free';font-weight:var(--fa-style, 900);}
.search-bar input{width:220px;height:36px;padding:0 25px 0 30px;color:#333;font-size:1rem;border-radius:10px;background-color:#e8e8e8;box-sizing:border-box;cursor:text;}
.search-bar input::placeholder {color:#888;font-weight:300;}
.search-bar button.btn-cancel{display:none;position:absolute;right:7px;top:10px;}
.search-bar:hover button.btn-cancel,
.search-bar:active button.btn-cancel,
.search-bar:focus button.btn-cancel{display:block;}

/* quick-box */
.quick-box{position:relative;display:none;align-items:center;}
.quick-box > *{margin-left:15px;text-align:left;}
span.activity-icon,
span.messages-icon{display:inline-block;width:30px;height:30px;text-align:center;color:#333;font-size:20px;line-height:30px;}
span.activity-icon:hover,
span.activity-icon:active,
span.activity-icon:focus,
span.messages-icon:hover,
span.messages-icon:active,
span.messages-icon:focus{color:var(--blue-text);}

button.profile-btn span{display:inline-block;width:30px;height:30px;border-radius:100%;overflow:hidden;}
button.profile-btn span img{width:100%;transition: 0.3s;}
@media (max-width:680px){
  .search-bar{display:none;}
  .quick-box{display:flex;}
}
</style>
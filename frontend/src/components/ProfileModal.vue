<template>
  <div class="profile-modal" @click.stop>
    <div class="bg-layer" @click="setProfileModalVisibility(true)"/>
    <div class="actions">
      <ul>
        <li>
          <router-link to="/profile">
            <div>
              <span><i class="fa-regular fa-circle-user"></i></span>
              <span>내 정보</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <div>
              <span><i class="fa-solid fa-wallet"></i></span>
              <span>지갑연동</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <div>
              <span><i class="fa-solid fa-gear"></i></span>
              <span>환경설정</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <div>
              <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
              <span>로그아웃</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileModal',
  methods: {
    setProfileModalVisibility () {
      this.$store.commit('header/setProfileModalVisible', false)
    }
  }
}
</script>

<style scoped>
  .profile-modal{position:absolute;top:50px;right:0;display:none;color:#000000;border-bottom-left-radius:4px;border-left:1px solid var(--border-color);border-bottom:1px solid var(--border-color);box-sizing:border-box;background-color:#fff;}
  .bg-layer{position:fixed;inset:0;width:100%;height:100%;z-index:-1;}
  .actions ul{margin:0;padding:0;}
  .actions ul li{margin:0;padding:0;border-top: 1px solid var(--border-color);box-sizing:border-box;}
  .actions ul li:first-child{border-top:none;}
  .actions ul li div{display:flex;padding:5px 52px 5px 10px;width:100%;align-items:center;text-decoration:none;color: #262626;font-size: 0.875rem;}
  .actions ul li div span:first-child{font-size:18px;}
  .actions ul li div span:last-child{margin-left:10px;font-size:12px;}
    @media (max-width:680px){
      .profile-modal{display:block;}
  }
</style>
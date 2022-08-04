<template>
  <div id="login-wrap">
    <div class="login-cnt">
      <div class="login-box">
        <div class="logo-img">
          <img src="@/assets/images/bitmaps/dog.png" style="width:50%;" alt="deep logo"/>
          <img src="@/assets/images/bitmaps/logo-login04.png" style="width:80%;" alt="deep logo"/>
        </div>
        <div class="txt-img" style="margin-top:20px">
          <img src="@/assets/images/bitmaps/logo-txt.png" alt="deep txt" />
        </div>
      </div>
      <div class="btn-box">
        <router-link class="kakao-login" to="/">
          <button type="button" @click="kakaoLogin">
            <span>
              <img
                src="@/assets/images/bitmaps/kakao_login_medium_wide.png"
                alt=" 카카오톡 로그인"
              />
            </span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
#login-wrap{position:relative;width:100%;height:100%;background:#f4f4f4;overflow:hidden;}
.login-cnt{position:fixed;top:50%;left:50%;padding:50px;min-width:120px;height:100%;font-size:0;box-sizing:border-box;transform:translate(-50%, -50%);background-color:#f4f4f4;}
.login-box,
.btn-box{display:inline-block;margin:0 auto;margin-top:80px;width:100%;min-width:120px;text-align:center;}
.login-box{margin-top:80px;}
.btn-box{margin-top:50px;}
</style>

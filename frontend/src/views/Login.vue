<template>
  <div id="login-wrap">
    <div class="login-cnt">
      <div class="login-box">
        <div class="logo-img">
          <img src="@/assets/images/bitmaps/dog.png" alt="deep logo"/>
          <img src="@/assets/images/bitmaps/logo-login04.png" alt="deep logo"/>
        </div>
        <div class="txt-img" style="margin-top:20px">
          <img src="@/assets/images/bitmaps/logo-txt.png" alt="deep txt"/>
        </div>
      </div>
      <!--
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
      -->
      <div class="form-box">
        <LoginvView/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginvView from "../components/Login";
export default {
    name: "Login",
    components: { LoginvView },
};
</script>

<style scoped>
#login-wrap{position:relative;width:100%;height:100%;background:#f4f4f4;overflow:hidden;}
.login-cnt{position:fixed;top:50%;left:50%;padding:100px 50px 50px;width:100%;height:100%;font-size:0;box-sizing:border-box;transform:translate(-50%, -50%);background-color:#f4f4f4;overflow-y:scroll;}
.logo-img{max-width:360px;min-width:280px;}
.logo-img img{width:100%;object-fit:cover;}
.login-box,
.btn-box,
.form-box{display:block;margin:0 auto;margin-top:0px;width:100%;max-width:360px;text-align:center;}
.btn-box,
.form-box{margin-top:20px;}
</style>

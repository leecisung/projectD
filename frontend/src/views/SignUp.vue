<template>
  <hesader-sub :title="title"/>
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
      <div class="form-box">
        <SignUpView/>
      </div>
    </div>
  </div>
</template>

<script>
import HesaderSub from '../components/HesaderSub.vue';
import SignUpView from "../components/SignUp";
export default {
    name: "SignUp",
    components: { HesaderSub, SignUpView },
    data(){
      return{
        title : '회원가입',
      }
    }
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

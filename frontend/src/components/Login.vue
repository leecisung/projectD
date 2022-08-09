<template>
<form @submit.prevent="submitForm">
  <div  class="login-box">
    <div class="input_row">
      <label for="userid">아이디</label>
      <input type="text" id="userid" placeholder="아이디를 입력해주세요" v-model="userid" />
    </div>
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" placeholder="패스워드를 입력해주세요"  v-model="password" />
    </div>
    <div class="btn-box">
      <router-link to="/signup">
        <span class="login-btn"><span>회원가입하기</span></span>
      </router-link>
      <!-- <router-link to="/"> -->
        <button type="submit" class="login-btn"><span>로그인하기</span></button>
      <!-- </router-link> -->
    </div>
  </div>
  </form>
</template>

<script>
import { loginUser } from '@/api/login';
 
export default {
  data() {
    return {
      // form values
      userid: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try{
      const userData = {
        userid: this.userid,
        password: this.password,
      };
      // API 함수 loginUser() 호출
      const { data } = await loginUser(userData);
      // this.$store.commit('setUsername', data.userid);
      this.$router.push('/');
      } catch (error) {
      // 입력란 비우기
      console.log(error.response.data);
      } finally {
      this.initForm();
      }
    },
    initForm() {
      this.userid = '';
      this.password = '';
     },
  }
};
</script>

<style scoped>
.login-box{margin:0px auto;width:280px;}
.login-box label{display:block;padding:15px 0 10px;font-size:15px;text-align:left;font-weight:600;}
.login-box input{padding:10px;width:100%;font-size:15px;border-bottom:1px solid #888;box-sizing:border-box;}
.login-box .btn-box{margin-top:20px;}
.login-box .login-btn{margin:0 5px}
.login-box .login-btn span{display:inline-block;margin-top:0px;width:100px;height:30px;color:#666;font-size:15px;line-height:30px;border:1px solid #888;border-radius:20px;cursor:pointer;}
</style>
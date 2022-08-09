<template>
<form @submit.prevent="submitForm">
  <div class="login-box">
    <div class="input_row">
      <label for="userid">아이디</label>
      <input type="text" id="userid" placeholder="사용하실 아이디를 입력해주세요" v-model="userid" />
    </div>
    <div class="input_row">
      <label for="name">이름</label>
      <input type="text" id="name" placeholder="이름을 입력해주세요" v-model="name" />
    </div>
    <!-- <div class="input_row">
      <label for="address">주소</label>
      <input type="text" id="address" v-model="address" />
    </div> -->
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" placeholder="사용하실 비밀번호를 입력해주세요" v-model="password" />
    </div>
    <div class="btn-box">
      <!-- <router-link to="/"> -->
        <button type="submit" class="login-btn"><span>가입하기</span></button>
      <!-- </router-link> -->
    </div>
  </div>
  </form>
</template>
<script>
import { registerUser } from '@/api/signup';

export default {
  data() {
    return {
      // form
      userid: '',
      name: '',
      // address: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      // API 요청시 전달할 userData 객체
      const userData = {
        userid: this.userid,
        password: this.password,
        name: this.name,
        // address: this.address,
      };
      const { data } = await registerUser(userData);
      this.$router.push('/login');
      
      
      // 가입 후 폼 초기화
      this.initForm();
    },
    initForm() {
      this.userid = '';
      this.password = '';
      this.name = '';
      // this.address = '';
    },
  },
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
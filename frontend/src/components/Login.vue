<template>
<form @submit.prevent="submitForm">
  <div class="hello">
    <div class="input_row">
      <label for="userid">아이디</label>
      <input type="text" id="userid" v-model="userid" />
    </div>
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <a href="/signUp">가입하기</a>
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
input {
  border: 1px solid #000;
}
</style>
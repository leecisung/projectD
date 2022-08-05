<template>
 <form @submit.prevent="submitForm">
  <div class="app">
    <div class="input_row">
      <label for="userid">아이디</label>
      <input type="text" id="userid" v-model="userid" />
    </div>
    <div class="input_row">
      <label for="name">이름</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <!-- <div class="input_row">
      <label for="address">주소</label>
      <input type="text" id="address" v-model="address" />
    </div> -->
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">가입하기</button>
  </div>
   <p>{{ logMessage }}</p>
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
      
      this.logMessage = `${data.name} 님이 가입되었습니다.`;
      
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
input {
  border: 1px solid #000;
}
</style>
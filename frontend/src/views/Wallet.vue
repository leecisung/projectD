<template>
  <hesader-sub :title="title"/>
  <div id="login-wrap">
    <div class="login-cnt">
        <form>
          <div class="form-box">
            <h2 class="tit">Plese Sign in</h2>
              <div class="form-box">
                <div class="input-box">
                  <label>ID</label>
                  <input type="text"/>
                </div>
                <div class="input-box">
                  <label>Password</label>
                  <input type="password"/>
                </div>
                <div class="input-box">
                  <label>Wallet Password</label>
                  <input type="password"/>
                </div>
              </div>
              <div class="btn-box">
                <button class="btn" @click="toggleOnOff"><span>지갑생성</span></button>
              </div>
              <div v-if="isStatusOn">
                <div class="form-box">
                <div class="input-box">
                    <label>지갑주소</label>
                    <input type="text"/>
                </div>
              </div>
              <router-link to="/">
                <div class="btn-box">
                  <button class="btn"><span>가입</span></button>
                </div>
              </router-link>
            </div>
          </div>
        </form>      
    </div>
  </div>
</template>

<script>
import HesaderSub from '../components/HesaderSub.vue';
export default {
  components: { HesaderSub },
    name: "Wallet",
    data () {
        return{
          title : '지갑생성',
          isStatusOn : false,
        }
    },
    methods: {
      toggleOnOff : function() {
          this.isStatusOn = !this.isStatusOn;
      }
    }
};
</script>

<style scoped>
#login-wrap{position:relative;width:100%;height:100%;background:#fff;overflow:hidden;}
.login-cnt{position:fixed;top:50%;left:50%;padding:100px 50px 50px;width:100%;min-width:120px;height:100%;font-size:0;box-sizing:border-box;transform:translate(-50%, -50%);background-color:#fff;}
.login-box,
.btn-box,
.form-box{display:inline-block;margin:0 auto;margin-top:0px;width:100%;min-width:120px;text-align:center;}
.btn-box,
.form-box .tit{margin-bottom:60px;font-size:40px;}
.input-box{margin-top:20px;}
.input-box{margin:0px auto;width:240px;}
.input-box label{display:block;padding:15px 0 10px;font-size:15px;text-align:left;font-weight:600;}
.input-box input{padding:10px;width:100%;font-size:15px;border-bottom:1px solid #888;box-sizing:border-box;}
.btn-box{margin-top:20px;}
.btn-box .btn span{display:inline-block;margin-top:0px;width:100px;height:30px;font-size:15px;line-height:30px;border:1px solid #888;border-radius:20px;}



</style>

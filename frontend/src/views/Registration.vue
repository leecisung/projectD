<template>
  <HesaderSub :title="title" />
  <div class="registration">
    <div class="inner">

      <!-- 카테고리 -->
      <div class="category">
        <p class="tit">카테고리</p>
        <div class="select-box">
          <select>
            <option value="lost">분실물</option>
            <option value="find">습득물</option>
          </select>
        </div>
      </div>

      <!-- 분실물 등록 -->
      <div class="section lost">
        <h2>분실물 등록</h2>
        <div class="form-box">
          <form>
              <fieldset>
                  <legend>분실물등록</legend>
                  <div class="cmm-input">
                      <p class="label">제목</p>
                      <input type="text" title="제목을 적는 란" placeholder="제목" v-model="board_title">
                      <!-- <p>{{board_title}}</p> -->
                  </div>
                  <div class="cmm-input">
                      <p class="label">사례금</p>
                      <input type="number" title="사례 금액을 적는 칸" placeholder="사례 금액" v-model="cost">
                  </div>
                  <div class="cmm-input">
                      <p class="label">상세카테고리</p>
                      <input type="text" title="카테고리를 적는 칸" placeholder="상세 카테고리" v-model="category">
                  </div>
                  <div class="cmm-input">
                      <p class="label">내용</p>
                      <span class="textarea-box">
                        <textarea placeholder="상세한 내용을 적어주세요" v-model="content" ></textarea>
                      </span>
                  </div>
                  <div class="btn-box">
                    <button type="button" @click="goback"><span>뒤로가기</span></button>
                    <button type="button" @click="insertdata">
                      <span>완료</span>
                      <!-- <router-link to="/home">완료</router-link> -->
                    </button>
                  </div>
              </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import HesaderSub from "@/components/HesaderSub.vue"
import Footer from '@/components/Footer.vue'
import axios from "axios"

export default {
  name: 'Registration',
  components: {
    HesaderSub,
    Footer,
  },
  data: function () {
    return {
      title : '게시물등록',
      board_title:'',
      cost : 0,
      category : '',
      content : '',
      writer : "가나다",
      location : "서울시 강남구"
    }
  },
  methods : {

    insertdata () {
      // console.log( this.board_title, "제목")
      // console.log( this.cost, "사례금")
      // console.log( this.category, "카테고리")
      axios.post('/api/board/register',{
        board_title : this.board_title,
        cost : this.cost,
        category : this.category,
        content : this.content,
        writer : this.writer,
        location : this.location
      }).then(
        (res) => {
          if(res){
            console.log("현재상태 :",res.data.message)
            this.$router.push("/")
          }
        },
        (err) => {
          console.log(err, 'vue page error')
        }
      )
    },

    goback () {
      console.log("goback")
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .inner{padding:80px 15px;max-width:680px;box-sizing:border-box;}
  h2.tit{font-size:24px;color:#666;}
  p.tit{font-size:20px;}

  .category{position:fixed;top:80px;right:40px;display:flex;align-items:center;}
  .category .tit{font-size:18px;font-weight:600;color:#888;}
  .category .select-box{position:relative;padding:5px 10px;margin-left:20px;width:100px;border-bottom:solid 2px #888;background:#fff;}
  .category .select-box::before,
  .category .select-box:after{content:'';position:absolute;display:inline-block;width:2px;height:15px;background-color:#888;}
  .category .select-box::before{content:'';top:10px;right:15px;transform:rotate(45deg);}
  .category .select-box:after{content:'';top:10px;right:25px;transform:rotate(-45deg);}
  .category .select-box select{width:100%;height:25px;text-indent:10px;color:#666;font-size:15px;font-weight:bold;} 
  .section .form-box{position:fixed;left:50%;top:120px;padding:50px;width:400px;font-size:0;background:rgba(255,255,255,0.8);transform:translateX(-50%);box-sizing:border-box;}
  .section .form-box legend{font-size:0;text-indent:-9999px;}
  .section .form-box .cmm-input{margin-bottom:25px;}
  .section .form-box .label{height:20px;line-height:20px;color:var(--grey-text);;font-size:13px;}
  .section .form-box input{width:100%;height:30px;line-height:30px;color:#555;font-size:16px;text-indent:5px;border-bottom:solid 1px #bfbfbf;}
  .section .form-box .btn-box{display:flex;align-items:center;justify-content:space-around;margin-top:40px;width:100%;}
  .section .form-box .btn-box button:first-child span{display:block;width:120px;height:50px;line-height:50px;color:#30A9DE;font-size:16px;text-align:center;border:1px solid #84B1ED;background-color:#fff;}
  .section .form-box .btn-box button:first-child:hover span{color:#fff;border:1px solid #84B1ED;background-color:#84B1ED;}

  .section .form-box .btn-box button:last-child span{display:block;width:120px;height:50px;line-height:50px;color:#fff;font-size:16px;text-align:center;background-color:#84B1ED;}
  .section .form-box .btn-box button:last-child:hover span{color:#84B1ED;border:1px solid #84B1ED;background-color:#fff;}

  .section .form-box .textarea-box{display:inline-block;margin-top:10px;width:100%;min-height:200px; border:1px solid #bfbfbf;}
  .section .form-box .textarea-box textarea{width:100%;padding:10px;}
</style>

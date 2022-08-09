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
                      <input type="text" title="제목을 적는 란" placeholder="제목을 적어주세요" v-model="board_title">
                      <!-- <p>{{board_title}}</p> -->
                  </div>
                  <div class="cmm-input">
                      <p class="label">사례금</p>
                      <div class="amount-box">
                        <input type="number" title="사례 금액을 적는 칸" placeholder="사례 금액을 지정해주세요" v-model="cost">
                        <span class="amount">원</span>
                      </div>
                  </div>
                  <div class="cmm-input">
                      <p class="label">상세카테고리</p>
                      <input type="text" title="카테고리를 적는 칸" placeholder="상세 카테고리을 적어주세요" v-model="category">
                  </div>
                  <div class="cmm-input">
                      <p class="label">내용</p>
                      <span class="textarea-box">
                        <textarea placeholder="상세한 내용을 작성해 주세요" v-model="content"></textarea>
                      </span>
                  </div>
                  <div class="cmm-input">
                      <p class="label">사진첨부</p>
                      <div class="input-group">
                        <div class="input-group-append">
                          <span class="input-group-text" @click="onClickFile">
                            <i class="fa fa-paperclip">
                            </i></span>
                        </div>
                        <input type="file" class="file-input" accept="image/*" ref="fileInput" @change="onFileChange">
                      </div>
                      <div v-show="imageSrc" class="upload-image">
                        <img :src="imageSrc">
                      </div>
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
import draggable from 'vuedraggable'

export default {
  name: 'Registration',
  components: {
    HesaderSub,
    Footer,
    draggable,
  },
  data: function () {
    return {
      title : '게시물등록',
      board_title:'',
      cost : 0,
      category : '',
      content : '',
      writer : "가나다",
      picture: '',
      location : "서울시 강남구",
      imageSrc: ''
    }
  },
  methods : {
    insertdata () {

      axios.post('/api/board/register',{
        board_title : this.board_title,
        cost : this.cost,
        category : this.category,
        content : this.content,
        picture : this.picture,
        writer : this.writer,
        location : this.location,
      }).then(
        (res) => {
          if(res){
            console.log("현재상태 :", res.data.message)
          }
        },
        (err) => {
          console.log(err, 'vue page error')
        }
      )

      const formdata = new FormData()
      formdata.append('image',this.$refs.fileInput.files[0])
      formdata.append('writer', this.writer)
      formdata.append('board_title', this.board_title)
      formdata.append('picture_name', this.picture)

      axios.post('/api/board/upload', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      this.$router.push("/")

    },
    goback () {
      console.log("goback")
      this.$router.go(-1)
    },

    // 이미지 드래그 & 드랍 
    onDrop (event) {
      this.inputImageFile(event.dataTransfer.files)
    },
    onClickFile(event) {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      this.inputImageFile(event.target.files)
    },
    inputImageFile (files) {
      if (files.length) {
        let file = files[0]
        if (!/^image\//.test(file.type)) {
          alert('이미지 파일만 등록이 가능합니다')
          return false
        }
        this.picture = file.name
        this.preview(file)
        console.log(this.picture,"난 지금 inputImageFile")
      }
    },
    onClickUpload () {
      console.log("난 지금 onclickupload")
      this.preview (this.filename)
    },
    preview (file) {
      if (typeof file === 'string') {
        this.imageSrc = file
        console.log(this.imageSrc, "난 지금 if")
      } else {
        let reader = new FileReader()
        reader.onload = () => {
          this.imageSrc = reader.result
          // console.log(reader.)
          console.log(this.imageSrc,'난 지금 else')
        }
        reader.readAsDataURL(file)
        console.log(this.imageSrc,'난 지금 else2')
      }
    },
    submit1 () {
      const formdata = new FormData()
      formdata.append('image',this.$refs.fileInput.files[0])
      formdata.append('writer', this.writer)
      formdata.append('board_title', this.board_title)
      formdata.append('picture_name', this.picture)
      console.log(this.picture)
      // console.log(formdata.get("image"))
      axios.post('/api/board/upload', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
  }
}
</script>

<style scoped>
  .inner{padding:80px 15px;max-width:680px;box-sizing:border-box;}
  h2.tit{font-size:24px;color:#666;}
  p.tit{font-size:20px;}

  .category{display:flex;justify-content:flex-end;align-items:center;}
  .category .tit{font-size:18px;font-weight:600;color:#888;}
  .category .select-box{position:relative;padding:5px 10px;margin-left:20px;width:100px;border-bottom:solid 2px #888;background:#fff;}
  .category .select-box::before,
  .category .select-box:after{content:'';position:absolute;display:inline-block;width:2px;height:15px;background-color:#888;}
  .category .select-box::before{content:'';top:10px;right:15px;transform:rotate(45deg);}
  .category .select-box:after{content:'';top:10px;right:25px;transform:rotate(-45deg);}
  .category .select-box select{width:100%;height:25px;text-indent:10px;color:#666;font-size:15px;font-weight:bold;} 
  .section .form-box{padding:40px;width:100%;font-size:0;background:rgba(255,255,255,0.8);box-sizing:border-box;}
  .section .form-box legend{font-size:0;text-indent:-9999px;}
  .section .form-box .cmm-input{margin-bottom:25px;}
  .section .form-box .label{height:20px;line-height:20px;color:var(--grey-text);;font-size:13px;}
  .section .form-box input{width:100%;height:30px;line-height:30px;color:#555;font-size:16px;text-indent:5px;border-bottom:solid 1px #bfbfbf;}
  .section .form-box .amount-box{position:relative;}
  .section .form-box .amount-box input{padding-right:30px;box-sizing:border-box;}
  .section .form-box .amount-box input[type="number"]::-webkit-outer-spin-button,
  .section .form-box .amount-box input[type="number"]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
  .section .form-box .amount-box .amount{position:absolute;top:0;right:0;font-size:15px;font-weight:bold;color:var(--grey-text);}
  .section .form-box .btn-box{display:flex;align-items:center;justify-content:space-around;margin-top:40px;width:100%;}
  .section .form-box .btn-box button:first-child span{display:block;width:120px;height:50px;line-height:50px;color:#30A9DE;font-size:16px;text-align:center;border:1px solid #84B1ED;background-color:#fff;}
  .section .form-box .btn-box button:first-child:hover span{color:#fff;border:1px solid #84B1ED;background-color:#84B1ED;}
  .section .form-box .btn-box button:last-child span{display:block;width:120px;height:50px;line-height:50px;color:#fff;font-size:16px;text-align:center;background-color:#84B1ED;}
  .section .form-box .btn-box button:last-child:hover span{color:#84B1ED;border:1px solid #84B1ED;background-color:#fff;}
  .section .form-box .textarea-box{display:inline-block;margin-top:10px;width:100%;min-height:200px; border:1px solid #bfbfbf;}
  .section .form-box .textarea-box textarea{width:100%;padding:10px;font-size:15px;resize:none;}
  .section .form-box .img-uplord{margin-top:5px;padding:10px 0;}
  .section .form-box .img-uplord-darg{}
  .section .form-box .img-uplord-darg .file-input{display:none;}
  .section .form-box .img-uplord-darg .darg-cnt{position:relative;margin:0 auto;width:300px;height:300px;border:1px solid #e1e1e1;}
  .section .form-box .img-uplord-darg .upload-image{position:absolute;top:0;left:0;width:100%;height:100%;}
  .section .form-box .img-uplord-darg .upload-image img {width:100%;height:100%;object-fit:cover;}
  .section .form-box .img-uplord-darg .form-control{width:100%;height:100%;text-align:center;}
  .section .form-box .img-uplord-darg .btn-outline-info{padding:5px 10px;font-size:15px;color:#fff;background-color:var(--blue-text);}
  .section .form-box .img-uplord-darg .fa-paperclip{font-size:15px;color:#666;}
  .section .form-box .img-uplord-darg  .input-group-text{font-size:14px;}
 
</style>

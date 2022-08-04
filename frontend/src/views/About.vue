<template>
  <!-- header-sub-->
  <HesaderSub :title="title"/>
  <div class="about">
    <div class="inner">

      <!-- section1 -->
      <div class="section flex section01">
        <div class="txt-box">
            <h2 class="tit" style="width:320px;">
              당신의<br/>
              분실물 플랫폼
            </h2>
            <p class="txt" style="font-weight:bold;">
              분실물부터 습득물까지,<br/>
              이웃과 함께하는 동네분실센터
            </p>
        </div>
        <div class="img-box">
            <span class="img">
              <img src="@/assets/images/bitmaps/dog.png" alt="">
            </span>
        </div>
      </div>
      
      <!-- section2 -->
      <div class="section flex section2">
        <div class="txt-box">
          <h2 class="tit">
            Basket은 신뢰할 수 있어요!
          </h2>
          <p class="txt">
            동네인증한 사용자만 거래해요
            Basket에 활동하려면 동네인증이 필요해요.
            동네인증은 설정한 동네에 있어야만 할 수 있어요.
            GPS를 이용하여 우리 동네를 인증한 이웃들과 함께 나누고 만들어가요.
          </p>
        </div>
      </div>

      <!-- section3 -->
      <div class="section flex section3">
        <div class="txt-box">
          <h2 class="tit">
            잃어버린 곳에서 제보를 받아요
          </h2>
          <p class="txt">
            발만 동동은 이제 그만
            등록한 곳을 기준으로 반경 00km 반경으로
            알림과 제보를 받을 수 있어요
          </p>
        </div>
      </div>

      <!-- section4 -->
      <div class="section flex section4">
        <div class="txt-box">
          <h2 class="tit">
            1:1 채팅으로 대화해요
          </h2>
          <p class="txt">
             Basket내의 채팅은 개인정보 공유 없이도 쉽고 편하게 나눌 수 있어요.
             1:1 채팅으로 제보를 주고 받아요
          </p>
        </div>
      </div>

      <!-- section4 -->
      <div class="section flex section4">
        <div class="txt-box">
          <h2 class="tit">
            악의를 가진 이웃은 실시간으로 제재해요
          </h2>
          <p class="txt">
            Basket은 사용자 보호를 위해 다양한 악용 사례를 분석하고 있어요.
            악의를 가진 제보 등의 행위가 발견되는 즉시 해당 사용자의 서비스 이용을 제한해요.
          </p>
        </div>
      </div>



    </div>
  </div>
  <!-- footer -->
  <Footer/>
</template>

<script>
import HesaderSub from "@/components/HesaderSub.vue";
import Footer from "../components/Footer";
export default {
  name: "About",
  components: {
    HesaderSub,
    Footer,
    HesaderSub
},
  data(){
    return{
      title : '소개',
    }
  },
  methods: {
    
  },
};
</script>

  <style scoped>
  .inner{padding:50px 0;box-sizing:;}
  h2.tit{padding:15px 5px;font-size:48px;color:#333;}
  p.txt{padding:15px 5px;font-size:14px;color:#333;}
  .section{position:relative;padding:40px 20px;border-bottom:1px solid var(--border-color);box-sizing:border-box;}
  .section01{align-items:center;}
  .img-box span.img img{width:100%;height:100%;object-fit:contain;}
  @media (max-width:680px){
    .section01.flex{display:block;}
    .section01.flex .img-box{margin-top:50px;}
  }
</style>

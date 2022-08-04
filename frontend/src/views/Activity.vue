<template>
  <!-- header-sub-->
  <HesaderSub :title="title"/>
  <!-- activity-wrap -->
  <div class="activity-wrap">
    <div class="inner">
      <!-- activity-cnt -->
      <div class="activity-cnt">
        <!-- list-->
        <div class="activity-box day">
          <p class="tit">오늘</p>
          <ActivityItem v-for="activity in 3" :key="activity" :even="activity % 2 === 0"/>
        </div>
        <!-- list-->
        <div class="activity-box today">
          <p class="tit">어제</p>
          <ActivityItem v-for="activity in 5" :key="activity" :even="activity % 2 === 0"/>
        </div>
        <!-- list-->
        <div class="activity-box weekly">
          <p class="tit">일주일</p>
          <ActivityItem v-for="activity in 10" :key="activity" :even="activity % 2 === 0"
          />
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
import ActivityItem from "../components/ActivityItem.vue";
export default {
  name: "ActivityModal",
  components: {
    ActivityItem,HesaderSub,Footer,
  },
  data(){
    return{
      title : '활동',
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
  .cnt-wrap{width:100%;height:100%;background-color:#fff;}
  .activity-wrap .inner{padding:60px 0;}
  .activity-cnt .activity-box{padding:15px 10px 10px;font-size:14px;font-weight:600;border-top:1px solid var(--border-color);box-sizing:border-box;}
  .activity-cnt .activity-box:first-child{border-top:none;}
  .activity-cnt .activity-box .tit{margin-left:10px;font-size:15px;}
   @media (max-width:600px){
    .activity-cnt .activity-box{padding:10px 8px;}
    .activity-cnt .activity-box .tit{margin-bottom:5px;}
 }
</style>

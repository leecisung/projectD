<template>
  <div class="activity-item">
    <div class="activity-cnt">  
      <!-- user 유저 프로필사진 -->
      <UserIcon class="small"/>
      <!-- user 활동정보 -->
      <div class="activity-user-info">
        <div class="activity-notice">
          <!-- user 닉네임 -->
          <router-link to="/profile">
            <span class="activity-notice-nickname">
              <em>이찬혁</em>&nbsp;<em>님이</em> 
            </span>
          </router-link>
          <!-- user 활동코멘트 -->
          <span v-if="even" class="activity-notice-commnet">
            <em>분실물에 대한 사진/의견을 남겨주셨어요</em>
          </span>
          <span v-else class="activity-notice-commnet">
            <em>의견에 사진/의견에 좋아요를 눌러주셨어요</em>
          </span>
          <span class="activity-notice-time">13시간전</span>
        </div>
      </div>
    </div>
    <!-- user 활동 이미지/버튼 바로가기-->
    <div class="sub-action">
      <router-link to="/post">
        <span v-if="even" class="image">
          <img src="@/assets/images/bitmaps/profile-image.jpg" alt="" />
        </span>
        <span v-else class="btn">
          <button type="button">
            <span>게시물</span>
          </button>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import UserIcon from './UserIcon.vue';
export default {
    name: "ActivityItem",
    props: {
        even: {
            type: Boolean,
            default: () => false,
        },
    },
    components: { UserIcon }
};
</script>

<style scoped>
  .activity-item{display:flex;padding:5px 15px;justify-content:space-between;box-sizing:border-box;}
  .activity-cnt{display:flex;align-items:center;width:100%;}
  .activity-user-info{margin-left:12px;margin-right:20px;font-size:12px;font-weight:500;}
  .activity-notice-nickname{font-size:14px;color:#333;font-weight:600;}
  .activity-notice-commnet{margin-left:5px;font-size:13px;color:#666;word-break:break-word;}
  .activity-notice-time{margin-left:10px;font-size:12px;color:#666;}
  .sub-action .image,
  .sub-action .btn{transform:translateY(-50%);}
  .sub-action .image img{width:40px;height:40px;object-fit:cover;}
  .sub-action .btn span{display: inline-block;padding:0 5px;min-width:48px;height:30px;line-height:30px;color:#fff;font-weight:600;border-radius:5px;box-sizing:border-box;background-color:var(--blue-text);}
    @media (max-width:600px){
        .activity-item{padding:5px;}
        .activity-cnt{align-items:flex-start;}
        .sub-action .image,
        .sub-action .btn{transform:initial;}
    }
  </style>

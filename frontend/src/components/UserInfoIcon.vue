<template>
  <div class="user-info-icon">
    <UserIcon class="small"/>
    <div class="not-image">
      <router-link to="/profile" class="username">
        <!-- <span>이찬혁</span> -->
        <span> {{ single_data.writer }} </span>
        <!-- <span> {{this.post_value.name}} </span> -->
        <!-- <span>{{post_post_value.name}} 그리고 이름</span> -->
      </router-link>
      <div class="info">
        <p>
          <!-- <span> {{ useraddress1 }} </span> -->
          <!-- <span>서울시 종로구</span> -->
          <span> {{single_data.location}} </span>
        </p>
        <p>
          <!-- <span> {{ usercategory1 }} </span> -->
          <!-- <span>지갑</span> -->
          <span> {{single_data.category}} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import UserIcon from './UserIcon.vue';
export default {
    name: "UserInfoIcon",
    components: { UserIcon },
    props : ["userinfoicon_value"],
    data : function(){
      return {
        single_data:{
          title : '123',
          cost : 0,
          category : '',
          content : '',
          writer : '',
          picture : '',
          location : ''
        }
        // username1: JSON.stringify(this.post_post_value.name),
        // useraddress1:'',
        // usercategory1:''
      }
    },
    // created : function (){
    //   axios.get("/api/board/content")
    //   .then(
    //     (res) => {
    //       // console.log(JSON.stringify(res.data)+'가나다')
    //       // this.useraddress1 = JSON.stringify(res.data.content.address)
    //       // this.usercategory1 = JSON.stringify(res.data.content.category)
    //       console.log(JSON.stringify(res)+'가나다')
    //       this.username1 = JSON.stringify(res.data.content.name)
    //       this.useraddress1 = JSON.stringify(res.data.content.address)
    //       this.usercategory1 = JSON.stringify(res.data.content.category)
    //       },
    //     (err) => {
    //       alert("failed to bring board")
    //       }
    //     ) 
    // },
    // methods : {
    //   alarm(){
    //   console.log(this.post_value+"나 지금 UserInfocon")
    //   }
    // }
    mounted : function(){
      console.log(this.userinfoicon_value,"usericon.vue")
      if(this.userinfoicon_value){
        this.single_data = this.userinfoicon_value
      }
    }
}
</script>

<style scoped>
  .user-info-icon{display:flex;align-items:center;}
  .not-image{margin-left:12px;font-size:11px;font-weight:500;}
  .username{color:#000;}
  .info{margin-top:2px;font-size:11px;color:var(--grey-text);}
  .info p{display:flex;}
  .info p span{display:inline-block;}
    @media (max-width:480px){
      .info p,
      .info p span{display:block;}
    }
    @media (max-width:414px){
      .info p{display:flex;}
      .info p span{display:inline-block;}
    }
  
</style>

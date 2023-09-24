<template>
    <div class="cont" v-if="isopen" @click="conferm">
      <div class="conferm" @click.stop>
        <div class="buttons">
          
          <button class="yes" @click="gotocourse();
          enroll();"> Yes</button>
          
        <button class="no" @click="conferm ">No</button>
        </div>
      </div>
      </div>
    </template>


<script>
export default {
props:["isopen","conferm","enroll","course_id"],
name : confirm ,
methods:{
 gotocourse(){
    this.$router.push({ name: 'fullcourse', params: { courseId: this.course_id } });
 }
}
}
</script>
<style scooped>
.cont{
  position:fixed;
  top:0;
  width:100%;
  height:100%;
  z-index:8;
}
.buttons{
  display:flex;
}
.conferm {
  position:fixed;
  top:35%;
  left:28%;
  width:600px;
  height:250px;
  background: rgb(255, 241, 241);
  z-index:10;
  border-radius:20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.yes{
width: 200px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 80px;
  background: conic-gradient(from 90deg at 50% 100%, #FFF 0deg, #FFF 360deg);
  box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.03);
  color: #5B5B5B;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;
  text-align: center;
  margin-top:25%;
    margin-left:8%;
  }
  .no{
    margin-top:25%;
    margin-left:20%;
     width: 200px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 80px;
  background: #49BBBD;
  box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.03);
  color: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;
  text-align: center;
  }
  .yes:hover{
  transform:scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
 .no:hover{
  transform:scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
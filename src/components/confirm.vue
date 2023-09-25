<template>
  <div class="cont" v-if="isopenConf" @click="conferm">
    <div class="conferm" @click.stop>
      <div class="content">
        <h3 v-if="!auth.isLoggedIn">Please login first</h3>
        <h3 v-else>Are you sure you want to enroll to this course?</h3>
      </div>
      <div class="buttons">
        <button class="yes" v-if="!auth.isLoggedIn" @click="toggleLogin"> Yes</button>
        <button class="yes" v-else @click="enroll"> Yes</button>
        <button class="no" @click="conferm">No</button>
      </div>
    </div>
  </div>
</template>


<script>
import { useAuthStore } from '../store/auth';

export default {

  props: ["isopenConf", "conferm", "enroll", "course_id", "toggleLogin"],
  name: confirm,

  setup() {
    const auth = useAuthStore()
    return { auth }
  },
}
</script>
<style scooped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5B5B5B;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;

}

.cont {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8;

}

.buttons {
  display: flex;
}

.conferm {
  position: fixed;
  top: 35%;
  left: 28%;
  width: 600px;
  height: 250px;
  background: rgb(255, 241, 241);
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.yes {
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
  margin-top: 25%;
  margin-left: 8%;
}

.no {
  margin-top: 25%;
  margin-left: 20%;
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

.yes:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.no:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
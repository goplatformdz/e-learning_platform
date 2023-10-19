<template>
  <div class="cont" v-if="isopenConf" @click="conferm">
    <div class="conferm" @click.stop>

      <h3 v-if="!auth.isLoggedIn">Please login first</h3>
      <h3 class="activation" v-else-if="auth.isPending">Please wait for your account activation first, you will receive a
        phone call from
        us soon. </h3>
      <h3 v-else>Are you sure you want to enroll to this course?</h3>

      <div class="buttons">
        <button class="yes" v-if="!auth.isLoggedIn" @click="toggleLogin">Ok</button>
        <button class="yes" v-else-if="auth.isPending" @click="conferm">Ok</button>
        <button class="yes" v-else @click="enroll">Enroll</button>
        <button class="no" v-if="!auth.isLoggedIn || !auth.isPending" @click="conferm">Cancel</button>
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
h3 {
  margin-top: 80px;
  align-items: center;
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;

}

.activation {
  width: 80%;

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
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-53%);
}

.conferm {
  position: fixed;
  top: 35%;
  left: 28%;
  width: 600px;
  height: 250px;
  background: #fff;
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
}

.yes {
  width: 200px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 80px;
  background: #49BBBD;
  box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.03);
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;
  text-align: center;
  margin-top: 25%;
  margin-left: 8%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  /* Added background transition */
}

.no {
  margin-top: 25%;
  margin-left: 20%;
  width: 200px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 80px;
  background: red;
  box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.03);
  color: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  /* Added background transition */
}

.yes:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
  background: #4397a2;
  /* Darker background color on hover */
}

.no:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
  background: #ff0000;
  /* Darker background color on hover */
}
</style>
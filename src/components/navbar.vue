<template>
  <div class="nav">
    <div class="img"> <img src="@/assets/logo.png" alt="">  </div>
    <loginComponent :isopen="isopen" :toggleLogin="toggleLogin" />
    <signupComponent :isopen1="isopen1" :toggleSignup="toggleSignup" />
    <table class="home">
      <tr>
        <td><router-link to="/blog">Home</router-link></td>
        <td>Courses</td>
        <td>Careers</td>
        <td>Blog</td>
        <td>About Us</td>
      </tr>
    </table>
    <div class="login" @click="toggleLogin">Login</div>
    <div class="signup" @click="toggleSignup">Sign Up</div>
  </div>
</template>


  

<script>
import loginComponent from "./login.vue";
import signupComponent from "./signup.vue";
export default {
  name: "navbar",

  data() {
    return {
      isopen: false,
      isopen1: false,
    };
  },

  methods: {
    toggleLogin() {
      this.isopen = !this.isopen;
    },
    toggleSignup() {
      this.isopen1 = !this.isopen1;
    },
  },
  components: {
    loginComponent,
    signupComponent,
  },
};
</script>

<style  scoped>
.img{
  position:absolute;
  top:16%;
  left:9%;
  width:70px;
  height:49px;
}
img{
  width:100%;
  height:100%;
}
.nav {
  width: 100%;
  height: 80px;
  background-color: #49BBBD;
  position: fixed;
  top: 0%;
  z-index: 5;
}
.home {
  position: absolute;
  top: 25%;
  left: 26%;
}
.home td {
  padding-left: 50px;
  text-align: left;
  color: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;
}
.login {
  position: absolute;
  top: 25%;
  left: 75%;
  width: 100px;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
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
}
.signup {
  position: absolute;
  top: 25%;
  left: 85%;
  width: 100px;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  border-radius: 80px;
  background: rgba(255, 255, 255, 0.3);
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
.login:hover,
.login:active,
.login:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}
.signup:hover,
.signup:active,
.signup:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}
</style>
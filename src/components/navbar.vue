<template>
  <div class="nav">
    <div class="img"><img src="@/assets/logo.png" alt="" /></div>
    <loginComponent
      :isopen="isopen"
      :toggleLogin="toggleLogin"
      :isopen1="isopen1"
      :toggleSignup="toggleSignup"
    />
    <signupComponent
      :isopen1="isopen1"
      :toggleSignup="toggleSignup"
      :isopen="isopen"
      :toggleLogin="toggleLogin"
    />

    <ul>
      <li>
        <a href="#"><router-link to="/">Home</router-link></a>
      </li>
      <li>
        <a href="#"><router-link to="/courses">Courses</router-link></a>
      </li>
      <li><a href="#">Careers</a></li>
      <li>
        <a href="#"><router-link to="/blog">Blog</router-link></a>
      </li>
      <li><a href="#">About Us</a></li>
    </ul>

    <button class="login" @click="toggleLogin">Login</button>
    <button class="signup" @click="toggleSignup">Sign Up</button>
  </div>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap"
    rel="stylesheet"
  />
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
button {
  border: 0ch;
}

.img {
  position: absolute;
  bottom: 20%;
  left: 50px;
  width: 70px;
  height: 49px;
}
img {
  width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 80px;
  background-color: #49BBBD;
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 5;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}
.signup:hover,
.signup:active,
.signup:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}
ul {
  position: absolute;
  left: 300px;
  top: 25px;
  margin: 0px;
  padding: 0;
  list-style: none;
  display: inline;
  text-align: center;
}
li {
  display: table-cell;
  position: relative;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.44px;
}
a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;

  position: inline;
}
a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 100%;
  left: 0;
}
</style>
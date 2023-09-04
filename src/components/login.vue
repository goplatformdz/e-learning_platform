<template>
  <div class="login-page" v-if="isopen" @click="toggleLogin">
    <div class="login-vue" @click.stop>
      <div class="img"><img src="@/assets/child.png" alt="" /></div>
      <div class="container">
        <center>
          <div
            class="btn"
            @click="
              toggleLogin();
              toggleSignup();
            "
          >
            <div class="btn-slct">Login</div>
          </div>
          <h4>login page</h4>
        </center>
        <h3>Email Address</h3>
        <center>
          <input class="email" type="Email" />
        </center>
        <br />
        <h3>Password</h3>
        <center>
          <input class="email" type="password" />

          <button class="btn2" @click="toggleLogin">Login</button>
        </center>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "loginComponent",
  data() {
    return {};
  },
  props: ["isopen", "toggleLogin", "isopen1", "toggleSignup"],
};
</script>



<style  scoped>
button {
  border: 0ch;
}
.login-page {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.login-vue {
  background: #FFFEFC;
  position: fixed;
  top: 15%;
  width: 70%;
  height: 80%;
  left: 15%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: flex;
  z-index: 10;
}
.img {
  position: relative;
  height: 91.5%;
  width: 51%;
  top: 4%;
  left: 20px;
  border-radius: 30px;
}
.container {
  position: relative;
  left: 8%;
  top: 15%;
  width: 35%;
  height: 80%;
}
.btn {
  position: relative;
  width: 70%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 33px;
  background: rgba(73, 187, 189, 0.6);
  margin-bottom: 25px;
}
.btn-slct {
  position: absolute;
  left: 3%;
  top: 13%;
  width: 45%;
  padding-top: 2%;
  padding-bottom: 2%;
  flex-shrink: 0;
  background-color: #49BBBD;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 33px;
}
h3 {
  position: relative;
  left: 7%;
  margin-top: 20px;
  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.email {
  width: 84%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #49BBBD;
  background: #FFF;
  padding-left: 3%;
  padding-right: 3%;
}
.btn2 {
  margin-top: 30px;
  width: 40%;
  padding-top: 3%;
  padding-bottom: 3%;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: #49BBBD;
  border-radius: 36px;
  background: #49BBBD;
}
.btn2:hover,
.btn2:active,
.btn2:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
  background-color: rgb(40, 161, 163);
}
img {
  width: 100%;
  height: 100%;
}
</style>
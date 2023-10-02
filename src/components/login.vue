
<template>
  <div class="login-page" v-if="isopen" @click="toggleLogin(); toggleForgotPassword();">
    <div class="login-vue" @click.stop>
      <font-awesome-icon @click="toggleLogin(); toggleForgotPassword();" class="cross-icon"
        icon="fa-solid fa-circle-xmark" size="2xl" />
      <div class="img"><img src="@/assets/child.png" alt="" /></div>
      <div v-if="!forgotPassword" class="container">
        <center>
          <div class="btn">
            <button class="btn-signup" @click="toggleLogin(); toggleSignup();">Signup</button>
            <button class="btn-login" @click="toggleLogin(); toggleSignup();">Login</button>
          </div>
          <h4>Login to your TOTC account</h4>
        </center>
        <h3><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-envelope" /> Email Address </h3>

        <div class="input-wrapper">

          <input :class="(v$.inputEmail.$error || credentials.invalidCredentials.value) ? 'input-error' : 'input'"
            type="Email" v-model="formData.inputEmail.value" />
          <span v-for=" error  in  v$.inputEmail.$errors " :key="error.$uid" class="span-error">
            {{ error.$message === 'Value is required' ? 'Email address is required' : 'Email is not valid' }}
          </span>

        </div>
        <br />
        <h3><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-key" /> Password</h3>
        <div class="input-wrapper">
          <input :class="(v$.inputEmail.$error || credentials.invalidCredentials.value) ? 'input-error' : 'input'"
            type="password" v-model="formData.inputPassword.value" />
          <span v-for=" error  in  v$.inputPassword.$errors " :key="error.$uid" class="span-error">
            {{ error.$message === 'Value is required' ? 'Password is required' : error.$message }}
          </span>
        </div>

        <span v-if="credentials.invalidCredentials.value" class="invalid-credentials"> Invalid Credentials </span>

        <div v-if="loadings.loading.value" class="btn-container">
          <button class="btn-loading">
            <spinner class="spinner" />
          </button>
        </div>
        <div v-else class="btn-container">
          <button class="btn2" @click="fetchData();">Login</button>
        </div>
        <div class="sign-span">Don't have an account? <span @click="toggleLogin(); toggleSignup();">Sign Up</span></div>
        <div class="forgot-span">Or<span @click="toggleForgotPassword">Forgot Password</span></div>

      </div>
      <div v-else class="container">

        <div @click="toggleForgotPassword();" class="back-span">
          <font-awesome-icon class="back-icon" icon="fa-solid fa-backward" />
          <span>Go back to login
          </span>
        </div>
        <h4 class="forgot-h4">Reset Password</h4>


        <h3><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-envelope" /> Enter your email address </h3>

        <div class="input-wrapper">

          <input :class="(v$.inputEmail.$error || credentials.invalidEmail.value) ? 'input-error' : 'input'" type="Email"
            v-model="formData.inputEmail.value" />
          <span v-for=" error  in  v$.inputEmail.$errors " :key="error.$uid" class="span-error">
            {{ error.$message === 'Value is required' ? 'Email address is required' : 'Email is not valid' }}
          </span>

        </div>
        <br />




        <div v-if="loadings.loading.value" class="btn-container">
          <button class="btn-loading-send">
            <spinner class="spinner" />
          </button>
        </div>
        <div v-else class="btn-container">
          <span v-if="credentials.invalidEmail.value" class="invalid-credentials"> Invalid Email </span>
          <span v-if="credentials.success.value" class="valid-credentials link-message"> Click on the link that has been
            sent<br> to
            your
            email to reset your password
          </span>

          <button class="btn2 btn-send" @click="sendNewPassword">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import axios from 'axios'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import spinner from './spinner.vue'
import { useAuthStore } from '../store/auth';
import { API_BASE_URL } from '../config';


export default {
  name: "loginComponent",
  /*data() {
    return {
      invalidCredentials: false
    }
  },*/
  props: ["isopen", "toggleLogin", "isopen1", "toggleSignup", "forgotPassword", "checkIsEnrolled", "toggleForgotPassword"],
  components: {
    FontAwesomeIcon,
    spinner
  },
  setup(props) {
    const formData = {
      inputEmail: ref(""),
      inputPassword: ref(""),
    }

    const credentials = {
      invalidCredentials: ref(false),
      invalidEmail: ref(false),
      success: ref(false),
    }

    const loadings = {
      loading: ref(false)
    }


    const authStore = useAuthStore()

    const rules = computed(() => ({
      inputEmail: { required, email },
      inputPassword: { required },

    }))




    const v$ = useVuelidate(rules, formData)

    const fetchData = async () => {
      await v$.value.$validate();
      if (!v$.value.$pending) {
        if (v$.value.$invalid) {
          return;
        }
      }

      const data = {
        email: formData.inputEmail.value,
        password: formData.inputPassword.value,
      };

      loadings.loading.value = true

      try {
        await axios.post(`${API_BASE_URL}/api/users/loginUser`, data, { withCredentials: true });
        await authStore.checkLoginStatus();
        await props.toggleLogin();
        await props.toggleForgotPassword();
        window.location.reload();
        if (Object.prototype.hasOwnProperty.call(props, 'checkIsEnrolled')) {
          await props.checkIsEnrolled();
        }

        loadings.loading.value = false
      } catch (error) {
        console.error(error)
        loadings.loading.value = false
        if (error.response.data.message === "Invalid Credentials") {
          credentials.invalidCredentials.value = true;
        }
      }
    };

    const sendNewPassword = async () => {



      const data = {
        email: formData.inputEmail.value,
      };

      loadings.loading.value = true

      try {
        await axios.post(`${API_BASE_URL}/api/users/forgotPassword`, data, { withCredentials: true });

        loadings.loading.value = false;
        credentials.invalidEmail.value = false;
        credentials.success.value = true;

      } catch (error) {
        console.error(error)
        loadings.loading.value = false
        if (error.response.data.message === "Email Not found") {
          credentials.invalidEmail.value = true;
        }
      }
    }




    return { v$, fetchData, formData, credentials, loadings, authStore, sendNewPassword };
  }
};


</script>



<style  scoped>
button {
  border: 0ch;
}

.forgot-h4 {
  margin-left: 25px;
  margin-top: 100px
}

.cross-icon {
  position: absolute;
  top: -5px;
  right: -5px;
  color: red;
  background: #fff;
  border-radius: 50%;
  transition: color 0.2s, background 0.2s;

}



.back-div {
  position: absolute;
  bottom: 200px;
}

.back-icon {
  margin-top: 3px;
  margin-right: 3px;
  color: #6F42C1;

}

.back-span span {
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 4px;
  color: #6F42C1;
  transition: color 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

}

.back-span:hover {
  color: #9434F4;
}

.back-span {
  position: absolute;
  left: 8%;
  top: 10%;
  color: #000;
  display: flex;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;

}

.cross-icon:hover {
  color: darkred;

}

.cross-icon:active {
  color: darkerred;
  background: #f0f0f0;
}


.login-page {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.login-vue {
  background: #FFFEFC;
  position: fixed;
  top: 10%;
  width: 70%;
  height: 80%;
  left: 15%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: flex;
  z-index: 10;
}

.invalid-credentials {
  position: absolute;
  bottom: 37%;
  color: rgb(201, 8, 8);
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.valid-credentials {
  position: absolute;
  bottom: 37%;
  color: #49BBBD;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.sign-span {
  position: absolute;
  left: 25%;
  top: 78%;
  color: #000;
  display: flex;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;

}

.link-message {
  position: absolute;
  bottom: 33%;
}

.forgot-span {
  position: absolute;
  left: 35%;
  top: 83%;
  color: #000;
  display: flex;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;

}

.sign-span span {
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 4px;
  color: #6F42C1;
  transition: color 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

}

.forgot-span span {
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 4px;
  color: #6F42C1;
  transition: color 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

}

.sign-span span:hover {
  color: #9434F4;
}

.forgot-span span:hover {
  color: #9434F4;
}

.font-icon {
  color: #000;
  margin-bottom: -0.5px;
}

.img {
  position: relative;
  height: 91.5%;
  width: 51%;
  top: 27px;
  left: 27px;
  border-radius: 30px;
}

.container {
  position: relative;
  left: 8%;
  top: 9%;
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

.btn-login {
  position: absolute;
  left: 3%;
  top: 13%;
  width: 45%;
  padding-top: 3%;
  padding-bottom: 2%;
  flex-shrink: 0;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 33px;
  background: #49BBBD;
  transition: background-color 0.3s;

}

.btn-signup {
  position: absolute;
  right: 3%;
  top: 13%;
  width: 45%;
  padding-top: 3%;
  padding-bottom: 2%;
  flex-shrink: 0;
  background: rgba(73, 187, 189, 0);
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 33px;
  transition: background-color 0.3s;

}

.btn-signup:hover {
  background-color: rgba(73, 187, 189, 0.8);
}

.input-error {
  width: 84%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid rgb(201, 8, 8);
  background: #FFF;
  padding-left: 3%;
  padding-right: 3%;
}


.input {
  width: 84%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #49BBBD;
  background: #FFF;
  padding-left: 3%;
  padding-right: 3%;

}

h3 {
  position: relative;
  left: 7%;
  margin-bottom: 5px;
  margin-top: 20px;
  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.span-error {
  color: rgb(201, 8, 8);
  white-space: nowrap;
  position: absolute;
  left: 25px;
  bottom: -20px;
  /* Adjust this value as needed to position the error message */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.input-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


h4 {
  margin-bottom: 30px;

  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.btn-loading {
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
  cursor: not-allowed;
  opacity: 0.7;
  position: relative;
}

.btn-loading-send {
  margin-top: 5px;
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
  cursor: not-allowed;
  opacity: 0.7;
  position: relative;
}

.spinner {
  margin-left: 42%;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.btn-send {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.btn2:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.btn2:active {
  background-color: rgb(40, 161, 163);
}

img {
  width: 100%;
  height: 100%;
}
</style>
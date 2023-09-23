
<template>
  <div class="login-page" v-if="isopen" @click="toggleLogin">
    <div class="login-vue" @click.stop>
      <div class="img"><img src="@/assets/child.png" alt="" /></div>
      <div class="container">
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
          <span v-for="error in v$.inputEmail.$errors" :key="error.$uid" class="span-error">
            {{ error.$message === 'Value is required' ? 'Email address is required' : 'Email is not valid' }}
          </span>

        </div>
        <br />
        <h3><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-key" /> Password</h3>
        <div class="input-wrapper">
          <input :class="(v$.inputEmail.$error || credentials.invalidCredentials.value) ? 'input-error' : 'input'"
            type="password" v-model="formData.inputPassword.value" />
          <span v-for="error in v$.inputPassword.$errors" :key="error.$uid" class="span-error">
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
          <button class="btn2" @click="fetchData">Login</button>
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

export default {
  name: "loginComponent",
  /*data() {
    return {
      invalidCredentials: false
    }
  },*/
  props: ["isopen", "toggleLogin", "isopen1", "toggleSignup", "getCurrentUser"],
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
      invalidCredentials: ref(false)
    }

    const loadings = {
      loading: ref(false)

    }

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
        await axios.post('http://localhost:8000/api/users/loginUser', data, { withCredentials: true });
        await props.getCurrentUser();
        await props.toggleLogin();
        loadings.loading.value = false
      } catch (error) {
        console.error(error)
        loadings.loading.value = false
        if (error.response.data.message === "Invalid Credentials") {
          credentials.invalidCredentials.value = true;
        }
      }
    };



    return { v$, fetchData, formData, credentials, loadings };
  }
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

.font-icon {
  color: #000;
  margin-bottom: -0.5px;
}

.img {
  position: relative;
  height: 91.5%;
  width: 51%;
  top: 10px;
  left: 10px;
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

.spinner {
  margin-left: 42%;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
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
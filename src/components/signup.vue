<template>
  <div class="signup-page" v-if="isopen1" @click="toggleSignup">
    <div class="signup-vue" @click.stop>
      <font-awesome-icon @click="toggleSignup" class="cross-icon" icon="fa-solid fa-circle-xmark" size="2xl" />
      <div class="img"><img src="@/assets/child2.png" alt="" /></div>
      <div class="container">
        <div class="header">
          <div class="btn">
            <button class="btn-signup" @click="toggleLogin(); toggleSignup();">Signup</button>
            <button class="btn-login" @click="toggleLogin(); toggleSignup();">Login</button>
          </div>
          <h4>Sign up and start learning</h4>
        </div>
        <div class="form">
          <div class="container-two-inputs">
            <div class="input-container">
              <span class="input-description "><font-awesome-icon class="font-icon" icon="fa-solid fa-user" /> First Name
              </span>
              <div class="input-wrapper">
                <input :class="(v$.firstname.$error || check.userExists.value) ? 'names-input-error' : 'names-input'"
                  type="text" v-model="formData.firstname.value" />
                <span v-for="error in v$.firstname.$errors" :key="error.$uid" class="span-error">
                  {{ error.$message === 'Value is required' ? 'First name is required' : error.$message }} </span>
              </div>
            </div>
            <div class="input-container">
              <span class="input-description side-spans"><font-awesome-icon class="font-icon" icon="fa-solid fa-user" />
                Last Name</span>
              <div class="input-wrapper">
                <input
                  :class="(v$.lastname.$error || check.userExists.value) ? 'names-input-left-error' : 'names-input-left'"
                  type="text" v-model="formData.lastname.value" />
                <span v-for="error in v$.lastname.$errors" :key="error.$uid" class="span-error problem-spans">
                  {{ error.$message === 'Value is required' ? 'Last name is required' : error.$message }} </span>
              </div>
            </div>
          </div>
          <div class="middle-container">
            <span class="input-description "><font-awesome-icon class="font-icon email-icon"
                icon="fa-solid fa-envelope" /> Email
              Address</span>
            <input type="email" :class="(v$.email.$error || check.userExists.value) ? 'input-error' : 'input'"
              v-model="formData.email.value" />
            <span v-for="error in v$.email.$errors" :key="error.$uid" class="span-error">
              {{ error.$message === 'Value is required' ? 'Email address is required' : 'Email is not valid' }}
            </span>
          </div>
          <div class="middle-container">
            <span class="input-description "><font-awesome-icon class="font-icon email-icon" icon="fa-solid fa-phone" />
              Phone Number</span>
            <input type="text" :class="(v$.email.$error || check.userExists.value) ? 'input-error' : 'input'"
              v-model="formData.phoneNumber.value" />
            <span v-for="error in v$.phoneNumber.$errors" :key="error.$uid" class="span-error">
              {{ error.
                $message ===
                'Value is required' ? 'Phone number is required' : 'Phone number is not valid (Must contain 10 numbers)'
              }}
            </span>
          </div>
          <div class="container-two-inputs">
            <div class="input-container">
              <span class="input-description"><font-awesome-icon icon="fa-solid fa-key" /> Password</span>
              <div class="input-wrapper">
                <input :class="(v$.password.$error || check.userExists.value) ? 'names-input-error' : 'names-input'"
                  type="password" v-model="formData.password.value" />
                <span v-for="error in v$.password.$errors" :key="error.$uid" class="span-error">
                  {{ error.$message === 'Value is required' ? 'Password is required' : 'Password too short (8 at least)'
                  }}
                </span>
              </div>
            </div>
            <div class="input-container">
              <span class="input-description side-spans"><font-awesome-icon icon="fa-solid fa-key" /> Re-enter
                password</span>
              <div class="input-wrapper">
                <input
                  :class="(v$.confirmPassword.$error || check.userExists.value) ? 'names-input-left-error' : 'names-input-left'"
                  type="password" v-model="formData.confirmPassword.value" />
                <span class="span-error problem-spans">
                  {{ getConfirmPasswordError() }}
                </span>
              </div>
            </div>
          </div>
          <span v-if="check.userExists.value" class="invalid-credentials"> User with the same email is already registered
          </span>

          <div v-if="!loadings.loading.value" class="btn-center">
            <button class="btn2" @click="submit">Register</button>
          </div>
          <div v-else class="btn-center">
            <button class="btn-loading">
              <spinner class="spinner" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, numeric, maxLength } from '@vuelidate/validators'
import { ref, computed } from 'vue'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import spinner from './spinner.vue'
import { useAuthStore } from '../store/auth';
import { API_BASE_URL } from '../config';
import Cookies from 'js-cookie'




export default {
  name: "signupComponent",
  props: ["isopen1", "toggleSignup", "isopen", "toggleLogin"],
  components: {
    FontAwesomeIcon,
    spinner
  },
  setup(props) {
    const formData = {
      firstname: ref(""),
      lastname: ref(""),
      email: ref(""),
      phoneNumber: ref(""),
      password: ref(""),
      confirmPassword: ref("")
    }

    const check = {
      userExists: ref(false),

    }

    const loadings = {
      loading: ref(false)

    }

    const authStore = useAuthStore()


    const rules = computed(() => ({
      email: { required, email },
      phoneNumber: {
        required, numeric, minLength: minLength(10), maxLength: maxLength(10),
      },
      firstname: { required },
      lastname: { required },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAs: sameAs(formData.password.value) },
    }))

    const v$ = useVuelidate(rules, formData)

    const submit = async () => {
      await v$.value.$validate();
      // Perform client-side validation
      if (!v$.value.$pending) {
        if (v$.value.$invalid) {
          return; // Do not proceed if there are validation errors
        }
      }

      const data = {
        email: formData.email.value,
        phoneNumber: formData.phoneNumber.value,
        firstname: formData.firstname.value,
        lastname: formData.lastname.value,
        password: formData.password.value,
        confirmPassword: formData.confirmPassword.value,
      };



      loadings.loading.value = true


      try {
        await axios.post(`${API_BASE_URL}/api/users/registerUser`, data, { withCredentials: true });
        const existingAccessToken = await Cookies.get('access-token'); // Retrieve the existing token value
        if (existingAccessToken) {
          // If the cookie exists, set it with your desired options
          Cookies.set('access-token', existingAccessToken, {
            expires: 1, // Set the cookie to expire in 1 day
            secure: true, // Ensure it's sent over HTTPS
            sameSite: 'None',
            domain: '162.0.228.30', // Match the domain used in the backend
            path: '/',
          });
        }
        await authStore.checkLoginStatus();
        await props.toggleSignup();
        // Reset form inputs to empty strings after successful submission
        formData.email.value = '';
        formData.phoneNumber.value = '';
        formData.firstname.value = '';
        formData.lastname.value = '';
        formData.password.value = '';
        formData.confirmPassword.value = '';

        loadings.loading.value = true


      } catch (error) {
        console.error(error);
        loadings.loading.value = true

        if (error.response.data.message === "User with the same email is already registered") {
          check.userExists.value = true;
        }
      }
    };

    console.log(v$)

    return { v$, submit, formData, check, loadings, authStore }

  },
  methods: {
    getConfirmPasswordError() {
      const errors = this.v$.confirmPassword.$errors;
      return errors.length ? (errors[0].$message === 'The value must be equal to the other value' ? 'Doesnt match your password' : 'Confirm your password') : '';
    },
  }
}
</script>


<style  scoped>
button {
  border: 0ch;
}

template {
  position: relative;
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

.cross-icon:hover {
  color: darkred;

}

.cross-icon:active {
  color: darkerred;
  background: #f0f0f0;
}

.signup-page {
  width: 100%;
  height: 100%;
  max-height: 300vh;
  /* Limit the height to 90% of the viewport height */
  overflow-y: auto;
  z-index: 1001;
  position: fixed;
}

.font-icon {
  color: #000;
  margin-bottom: 1px;
}

.invalid-credentials {
  position: absolute;
  bottom: 20.5%;
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

.email-icon {
  margin-bottom: -0.5px;
}

.input-wrapper {
  position: relative;
}

.left-input {
  margin-left: 18px;
}

.container {
  position: relative;
  left: 9%;
  top: 1%;
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 52px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.input-description {
  position: absolute;
  top: -20px;
  left: 10px;
  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.side-spans {
  position: absolute;
  left: 28px;
}

h4 {
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000;
}

.names-input {
  width: 95%;
  padding-left: 5%;
  padding-right: 3%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #49BBBD;
  background: #FFF;
  margin: 0;

}

.names-input-left {
  width: 95%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #49BBBD;
  background: #FFF;
  padding-left: 5%;
  padding-right: 3%;
  margin: 0;
  margin-left: 18px;

}

.names-input-left-error {
  width: 95%;
  height: 40px;
  border-radius: 40px;
  background: #FFF;
  padding-left: 5%;
  padding-right: 3%;
  margin: 0;
  margin-left: 18px;
  border: 1px solid rgb(201, 8, 8);

}

.names-input-error {
  width: 95%;
  padding-left: 5%;
  padding-right: 3%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid rgb(201, 8, 8);
  background: #FFF;
  margin: 0;
}

.header {
  display: flex;
  justify-content: center;
  /* Horizontal centering */
  align-items: center;
  flex-direction: column;
  margin-bottom: 45px;
}

.container-two-inputs {
  display: flex;
  margin-bottom: 50px;
}

.input-error {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: #FFF;
  padding-left: 3%;
  padding-right: 3%;
  margin: 0;
  border: 1px solid rgb(201, 8, 8);
}

.input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #49BBBD;
  background: #FFF;
  padding-left: 3%;
  padding-right: 3%;
  margin: 0;

}


.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 0px;

}

.middle-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  position: relative;


}

.span-error {
  color: rgb(201, 8, 8);
  margin-left: 10px;
  padding-right: 30px;
  position: absolute;
  bottom: -20px;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
}

.middle-span {
  position: absolute;
  bottom: -20px;
}

.problem-spans {
  margin-left: 28px;
}


.signup-vue {
  background: #FFFEFC;
  position: relative;
  top: 10%;
  width: 70%;
  height: 650px;
  left: 15%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: flex;
  z-index: 10;
}

.btn-loading {
  width: 40%;
  padding-top: 3%;
  padding-bottom: 3%;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 36px;
  background: #49BBBD;
  cursor: not-allowed;
  opacity: 0.7;
  position: relative;
}


.spinner {
  margin-left: 42%;
}

.img {
  position: relative;
  height: 91.5%;
  width: 51%;
  top: 27px;
  left: 27px;
  border-radius: 30px;
}


.btn {
  position: relative;
  width: 70%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 33px;
  background: rgba(73, 187, 189, 0.6);
  margin-bottom: 25px;
  /* border: solid 1px rgba(73, 187, 189, 0.6);
  background: #FFF;*/
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
  background: rgba(73, 187, 189, 0);
  transition: background-color 0.3s;

}

.btn-login:hover {
  background-color: rgba(73, 187, 189, 0.8);
  /*color: #FFF;*/
}

.btn-signup {
  position: absolute;
  right: 3%;
  top: 13%;
  width: 45%;
  padding-top: 3%;
  padding-bottom: 2%;
  flex-shrink: 0;
  background: #49BBBD;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 33px;
  transition: background-color 0.3s;


}


.btn-center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;

}



.btn2 {

  width: 40%;
  padding-top: 3%;
  padding-bottom: 3%;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 36px;
  background: #49BBBD;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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

/*@media (max-width: 1300px) {
  

  .sign-span {

    left: 23%
  }

  .forgot-span {

    left: 33%;
  }
}*/

@media (max-width: 1080px) {

  .img {
    display: none;
    /* Hide the image */
  }

  .signup-vue {
    width: 470px;
    left: 30%;
  }

  .container {
    width: 80%;
  }



}

/*@media (max-width: 983px) {
  .signup-vue {

    left: 23%;
  }
}*/


@media (max-width: 209px) {
  .signup-vue {
    left: 22%;
  }
}


@media (max-width: 180px) {
  .signup-vue {
    left: 20%;
  }
}


@media (max-width: 170px) {
  .signup-vue {
    left: 16%;
  }
}
</style>
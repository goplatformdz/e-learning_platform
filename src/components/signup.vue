<template>
  <div class="signup-page" v-if="isopen1" @click="toggleSignup">
    <div class="signup-vue" @click.stop>
      <div class="img2"><img src="@/assets/child2.png" alt="" /></div>
      <div class="container">

        <div class="header">
          <div class="btn" @click="toggleLogin(); toggleSignup();">
            <button class="btn-slct">Signup</button>
          </div>
          <h4>Sign up and start learning</h4>
        </div>
        <div class="form">
          <div class="container-two-inputs">
            <div class="input-container">
              <span v-for="error in v$.firstname.$errors" :key="error.$uid" class="span-error ">{{
                error?.$message
              }}</span>
              <input class="names-input" placeholder="First Name" type="text" v-model="formData.firstname.value" />
            </div>
            <div class="input-container">
              <span v-for="error in v$.lastname.$errors" :key="error.$uid" class="span-error problem-spans">{{
                error?.$message }}</span>
              <input class="names-input left-input" placeholder="Last Name" type="text"
                v-model="formData.lastname.value" />
            </div>
          </div>
          <div class="middle-container">
            <span v-for="error in v$.email.$errors" :key="error.$uid" class="span-error ">{{ error?.$message
            }}</span>
            <input placeholder="Email Address" type="email" v-model="formData.email.value" />
          </div>
          <div class="container-two-inputs">
            <div class="input-container">
              <span v-for="error in v$.password.$errors" :key="error.$uid" class="span-error">{{ error?.$message }}</span>
              <input class="names-input" placeholder="Password" type="password" v-model="formData.password.value" />
            </div>
            <div class="input-container">
              <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid" class="span-error problem-spans">
                {{ error?.$message }}
              </span>
              <input class="names-input left-input" placeholder="Re-enter password" type="password"
                v-model="formData.confirmPassword.value" />
            </div>
          </div>
          <div class="btn-center">
            <button class="btn2" @click="submit">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { ref, computed } from 'vue' // Change reactive to ref
import axios from 'axios'

export default {
  name: "signupComponent",
  props: ["isopen1", "toggleSignup", "isopen", "toggleLogin", "getCurrentUser"],

  setup() {
    const formData = {
      firstname: ref(""),
      lastname: ref(""),
      email: ref(""),
      password: ref(""),
      confirmPassword: ref("")
    }

    const rules = computed(() => ({
      email: { required, email },
      firstname: { required },
      lastname: { required },
      password: { required },
      confirmPassword: { required },
    }))

    const v$ = useVuelidate(rules, formData)

    const submit = () => {
      const data = {
        email: formData.email,
        firstname: formData.firstname,
        lastname: formData.lastname,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      }

      v$.value.$validate()
        .then(() => {
          return axios.post('http://localhost:8000/api/users/registerUser', data)
        })
        .then(() => this.getCurrentUser())
        .then(() => this.toggleSignup())
        .catch(error => {
          // Handle any errors here
          console.log(error)
        })
    }

    return { v$, submit, formData }
  }
}
</script>


<style  scoped>
button {
  border: 0ch;
}
.signup-page {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
}


.left-input {
  margin-left: 18px;
}

.container {
  position: relative;
  left: 8%;
  top: 7%;
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
}

.header {
  display: flex;
  justify-content: center;
  /* Horizontal centering */
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.container-two-inputs {
  display: flex;
  margin-bottom: 50px;
}

input {
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


}

.span-error {
  color: rgb(201, 8, 8);
  margin-left: 10px;
  padding-right: 30px;
  margin-bottom: 5px;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.middle-span {
  margin-top: 20px;
}

.problem-spans {
  margin-left: 28px;
}


.signup-vue {
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
.img2 {
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
  right: 3%;
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


.btn-center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

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
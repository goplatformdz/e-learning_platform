<template>
  <div v-if="!loading" class="nav">
    <div class="modal-overlay" v-if="isopen || isopen1"></div>
    <dropdown :dropOpen="dropOpen" :toggleDropdown="toggleDropdown" :toggleForgotPassword="toggleForgotPassword" />

    <loginComponent :isopen="isopen" :forgotPassword="forgotPassword" :toggleForgotPassword="toggleForgotPassword"
      :toggleLogin="toggleLogin" :isopen1="isopen1" :toggleSignup="toggleSignup" />
    <signupComponent :isopen1="isopen1" :toggleSignup="toggleSignup" :isopen="isopen" :toggleLogin="toggleLogin" />

    <div class="max-width ">
      <div class="lego-section">
        <div class="img"><img src="@/assets/rifk.png" alt="" /></div>
      </div>

      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/courses">Courses</router-link>
        </li>
        <li>
          <router-link to="/blog">Blog</router-link>
        </li>
      </ul>


      <div class="nav-actions">
        <div @click="toggleDropdown" :class="(!dropOpen) ? 'user-infos' : 'user-infos-active'" v-if="auth.isLoggedIn">
          {{ auth.fullName }}
          <font-awesome-icon v-if="dropOpen" icon="fa-solid fa-chevron-up" />
          <font-awesome-icon v-else icon="fa-solid fa-chevron-down" />
        </div>

        <div class="nav-buttons" v-else>
          <button class="login" @click="toggleLogin(); toggleForgotPassword();">Login</button>
          <button class="signup" @click="toggleSignup">Sign Up</button>
        </div>

        <div class="list-items">

          <div class="dropdown">
            <a class="btn btn-white" @click="toggleDropListdown" href="#" role="button" id="dropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <font-awesome-icon class="menu-icon" icon="fa-solid fa-bars" />
            </a>

            <div class="dropdown-menu" v-if="!dropListOpen" aria-labelledby="dropdownMenuLink">
              <router-link @click="toggleDropListdown" class="dropdown-item" to="/">Home</router-link>
              <router-link @click="toggleDropListdown" class="dropdown-item" to="/courses">Courses</router-link>
              <router-link @click="toggleDropListdown" class="dropdown-item" to="/blog">Blog</router-link>
              <div class="dropdown-divider"></div>
              <div v-if="!auth.isLoggedIn" class="dropdown-item"><button class="btn btn-primary"
                  @click="toggleLogin(); toggleForgotPassword();">Login</button></div>
              <div v-if="!auth.isLoggedIn" class="dropdown-item"><button class="btn btn-primary"
                  @click="toggleSignup">Sign
                  Up</button></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div v-else class="nav"></div>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap" rel="stylesheet" />
</template>


  

<script>
import loginComponent from "./login.vue";
import signupComponent from "./signup.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import dropdown from "./dropdown.vue";
import { useAuthStore } from "../store/auth";

export default {
  name: "navbar",

  data() {
    return {
      isopen: false,
      isopen1: false,
      firstname: "",
      lastname: "",
      loading: true,
      dropOpen: false,
      dropListOpen: true,
      forgotPassword: false,
    };
  },
  setup() {
    const auth = useAuthStore()

    return { auth }
  },

  methods: {
    toggleLogin() {
      this.isopen = !this.isopen;
      this.auth.openModal = !this.auth.openModal
    },
    toggleSignup() {
      this.isopen1 = !this.isopen1;
      this.auth.openModal = !this.auth.openModal

    },
    toggleDropdown() {
      this.dropOpen = !this.dropOpen;
    },
    toggleDropListdown() {
      this.dropListOpen = !this.dropListOpen;
    },
    toggleForgotPassword() {
      this.forgotPassword = !this.forgotPassword;
    },
  },
  async mounted() {
    useAuthStore()
      .checkLoginStatus()
      .then(() => this.toggleForgotPassword())
      .catch((error) => {
        console.error('Error checking login status:', error);
      })
      .finally(() => {
        this.loading = false;
        // console.log(this.isLoggedIn, this.fullName)
      });
  },
  components: {
    loginComponent,
    signupComponent,
    FontAwesomeIcon,
    dropdown
  },

};
</script>


<style  scoped>
button {
  border: 0ch;
}


.user-infos {
  position: absolute;
  right: 80px;
  top: 25px;
  display: inline-block;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  letter-spacing: 0.15em;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
}

.user-infos-active {
  position: absolute;
  right: 80px;
  top: 25px;
  display: inline-block;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #333;
  letter-spacing: 0.15em;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
}

.user-infos:hover {
  color: #333;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  /* Dark background with opacity */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
}

.img {
  position: absolute;
  bottom: 15%;
  left: 30px;
  width: 60px;
  height: 60px;
}

img {
  width: 100%;
  height: 100%;
}

.nav {
  width: 100%;
  height: 80px;
  background-color: #00A9FF;
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 5;
}

.btn-primary {
  margin-left: 30px;
  background: #49BBBD;
  border-radius: 20px;

}

.login {
  position: absolute;
  top: 25%;
  left: 73%;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  left: 500px;
  top: 25px;
  margin: 0px;
  padding: 0;
  list-style: none;
  display: inline;
  text-align: center;
}

.dropdown-divider {
  border: 0.7px solid #000;
  width: 90%;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
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
  margin-left: 30px;
  margin-right: 30px;

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

.nav-links {
  position: absolute;
  left: 30%;
}


.active-link:after {
  width: 100%;
  left: 0;
}

a:hover:after {
  width: 100%;
  left: 0;
}

.nav .list-items {
  display: none;
  font-size: large;
  color: white;
  cursor: pointer;
}

.nav .list-items .dropdown {
  transition: 0.5s ease;
}

.nav .list-items .dropdown .btn {
  border: none;
  color: white;

}

.menu-icon {
  position: absolute;
  right: 20px;
  top: 30px;
}

.nav .list-items .dropdown .dropdown-menu {
  position: absolute;
  background-color: aliceblue;
  color: black;
  padding: 10px 10px;
  top: 89%;
  right: 7px;
  min-width: 140px;
  border-radius: 5px;
}

.nav .list-items .dropdown .dropdown-menu .dropdown-item {
  display: block;
  font-family: sans-serif;
  font-size: 16px;
  color: #333;
  padding: 5px;
  border-radius: 5px;
}

.nav .list-items .dropdown .dropdown-menu .dropdown-item:hover {
  cursor: pointer;
  background-color: #f1f1f1;
}

.nav .list-items .dropdown .dropdown-menu .dropdown-item .btn {
  cursor: pointer;
  padding: 7px;
  background-color: cornflowerblue;
  border-radius: 3px;
}

@media only screen and (max-width: 916px) {

  a::after {
    display: none;
  }

  .nav .nav-buttons,
  .nav .nav-links {
    display: none;
  }

  .nav .list-items {
    display: block;
  }
}
</style>
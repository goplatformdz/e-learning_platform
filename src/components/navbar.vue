<template>
  <div v-if="!loading" class="nav">
    <div class="max-width ">
      <div class="lego-section">
        <div class="img"><img src="@/assets/logo.png" alt="" /></div>
        <loginComponent :isopen="isopen" :toggleLogin="toggleLogin" :isopen1="isopen1" :toggleSignup="toggleSignup"
          :getCurrentUser="getCurrentUser" />
        <signupComponent :isopen1="isopen1" :toggleSignup="toggleSignup" :isopen="isopen" :toggleLogin="toggleLogin"
          :getCurrentUser="getCurrentUser" />
        <dropdown :getCurrentUser="getCurrentUser" :dropOpen="dropOpen" :toggleDropdown="toggleDropdown" />
      </div>

      <div class="nav-links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/courses">Courses</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/blog">About us</router-link>
          </li>
        </ul>
      </div>

      <div class="nav-actions">
        <div @click="toggleDropdown" class="user-infos" v-if="firstname">
          {{ firstname }} {{ lastname }} <font-awesome-icon v-if="!dropOpen" class="font-icon"
            icon="fa-solid fa-chevron-down" />
          <font-awesome-icon v-else class="font-icon" icon="fa-solid fa-chevron-up" />
        </div>

        <div class="nav-buttons" v-else>
          <button class="login" @click="toggleLogin">Login</button>
          <button class="signup" @click="toggleSignup">Sign Up</button>
        </div>

        <div class="list-items">

          <div class="dropdown">
            <a class="btn btn-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <font-awesome-icon class="font-icon" icon="fa-solid fa-bars" />
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <router-link class="dropdown-item" to="/">Home</router-link>
              <router-link class="dropdown-item" to="/courses">Courses</router-link>
              <router-link class="dropdown-item" to="/blog">Blog</router-link>
              <router-link class="dropdown-item" to="/blog">About us</router-link>
              <div class="dropdown-divider"></div>
              <div class="dropdown-item"><button class="btn btn-primary" @click="toggleLogin">Login</button></div>
              <div class="dropdown-item"><button class="btn btn-primary" @click="toggleSignup">Sign Up</button></div>
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
import axios from "axios";
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
    };
  },

  methods: {
    toggleLogin() {
      this.isopen = !this.isopen;
    },
    toggleSignup() {
      this.isopen1 = !this.isopen1;
    },
    toggleDropdown() {
      this.dropOpen = !this.dropOpen;
    },
    getCurrentUser() {
      axios.get('http://localhost:8000/api/users/getCurrentUser', { withCredentials: true })
        .then(response => {
          this.firstname = response.data.firstname; // Update the courses data property with the fetched data
          this.lastname = response.data.lastname;
          this.loading = false;
          console.log(response.status) // Update the courses data property with the fetched data

        })
        .catch(error => {
          console.log(error)
          this.loading = false;
        });
    }
  },
  components: {
    loginComponent,
    signupComponent,
    FontAwesomeIcon,
    dropdown
  },
  mounted() {
    this.getCurrentUser();
  }
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

.user-infos:hover {
  color: #333;
}

.user-infos:active {
  color: #333;
}

.user-infos:focus {
  color: #333;
}

.img {
  position: block;
  /* bottom: 20%;
  left: 50px; */
  width: 70px;
  height: 49px;
}

img {
  width: 100%;
  height: 100%;
}

.nav {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #49BBBD;
  position: fixed;
  z-index: 5;
}

.lego-section {
  padding-bottom: 20px;
}

.nav .max-width {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .nav-buttons {
  display: flex;
  display: block;
  justify-content: space-between;
  width: 800px;
}



.nav .nav-buttons .login {
  position: block;
  width: 100px;
  margin-right: 7px;
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
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav .nav-buttons .signup {
  position: block;
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
  cursor: pointer;
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
  position: block;
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

.nav .nav-links a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;

  position: inline;
}

.nav .nav-links a:after {
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

.nav .nav-links a:hover:after {
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

.nav .list-items .dropdown .dropdown-menu {}



/* Media screen */
@media only screen and (max-width: 916px) {

  .nav .nav-buttons,
  .nav .nav-links {
    display: none;
  }

  .nav .list-items {
    display: block;
  }
}
</style>
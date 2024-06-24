<template>
  <div class="loader" v-if="loading">

    <pencil />
  </div>
  <div v-else class="coursedetailpage">
    <div class="modal-overlay" v-if="isopen || isopen1 || isopenConf"></div>

    <confirm :isopenConf="isopenConf" :toggleLogin="confirmLogin" :conferm="conferm" :enroll="enroll"
      :course_id="course_id" />

    <signupComponent :isopen1="isopen1" :toggleSignup="toggleSignup" :isopen="isopen" :toggleLogin="toggleLogin" />

    <loginComponent :isopen="isopen" :checkIsEnrolled="checkIfEnrolled" :toggleLogin="toggleLogin" :isopen1="isopen1"
      :toggleSignup="toggleSignup" />
    <div class="imageblog" v-if="fetchedCourses && fetchedCourses.length">
      <img :src="fetchedCourses[0].course_id.photo2" alt="" />
    </div>
    <div class="coursedetails">
      <div>

        <div class="rate">
          <h3>Description</h3>
          <h4 class="lessonname" v-if="fetchedCourses && fetchedCourses.length">{{
            fetchedCourses[0].course_id.description }}</h4>
          <h3 class="lessontitles">What you will watch</h3>
          <lessonTitles v-for="(lesson, index) in fetchedCourses" :key="index" :lesson="lesson" />


        </div>
      </div>
      <div class="descripcourse">
        <div class="descriptimg" v-if="fetchedCourses && fetchedCourses.length"><img
            :src="fetchedCourses[0].course_id.photo1" alt="" /></div>
        <div class="course-content">
          <div class="courseprice">
            <h3 v-if="fetchedCourses && fetchedCourses.length">{{ fetchedCourses[0].course_id.courseName }}</h3>

          </div>
          <p class="hour11" v-if="fetchedCourses && fetchedCourses.length"><font-awesome-icon
              icon="fa-solid fa-user-graduate" /> {{ fetchedCourses[0].course_id.instructor }}</p>
          <div>
            <button class="buyn" v-if="!isEnrolled" @click="conferm">Enroll Now</button>
            <div class="enrolled" @click="gotocourse()" v-else>Go to course <font-awesome-icon class="font-icon"
                icon="fa-solid fa-arrow-right" /> </div>

          </div>
        </div>


      </div>
    </div>

    <recomanded />




  </div>
</template>

<script>
import axios from 'axios';
import confirm from '@/components/confirm.vue';
import recomanded from '@/components/recomanded.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useAuthStore } from '../store/auth';
import loginComponent from "../components/login.vue";
import signupComponent from "../components/signup.vue";
import pencil from "../components/pencil.vue";
import { API_BASE_URL } from '../config';
import lessonTitles from '../components/lessonTitles.vue';



export default {
  name: "coursedetail",
  data() {
    return {
      course_id: '',
      fetchedCourses: [],
      isopenConf: false,
      fetchedCourses1: [],
      isEnrolled: false,
      isopen: false,
      isopen1: false,
      loading: false
    }
  },
  components: {
    recomanded,
    confirm,
    FontAwesomeIcon,
    loginComponent,
    signupComponent,
    pencil,
    lessonTitles
  },
  setup() {
    const auth = useAuthStore()

    return { auth }
  },
  methods: {
    conferm() {
      this.isopenConf = !this.isopenConf;
      this.auth.openModal = !this.auth.openModal


    },
    enroll() {
      this.loading = true;
      if (useAuthStore().isLoggedIn) {
        axios.post(`${API_BASE_URL}/api/enrollments/enrollInCourse/${this.course_id}`, {}, { withCredentials: true })
          .then(() => {
            this.conferm(); // Update the courses data property with the fetched data
          })
          .then(() => { this.isEnrolled = true })
          .then(() => { this.checkIfEnrolled() })
          .catch(error => {
            console.error('Error fetching courses:', error);
          })
          .finally(() => { this.loading = false; })

      }
    },
    gotocourse() {
      this.$router.push({ name: 'fullcourse', params: { courseId: this.course_id, id: this.fetchedCourses[0]._id } });
    },
    toggleLogin() {
      this.isopen = !this.isopen
    },
    confirmLogin() {
      this.toggleLogin();
      this.conferm()

    },
    toggleSignup() {
      this.isopen1 = !this.isopen1;
    },
    checkIfEnrolled() {
      this.loading = true;
      axios.get(`${API_BASE_URL}/api/lessons/all-lessons-default/${this.course_id}`, { withCredentials: true })
        .then(response => {
          this.fetchedCourses = response.data;
          console.log(this.fetchedCourses);
          console.log(this.fetchedCourses[0]._id);
        })
        .then(() => {
          if (useAuthStore().isLoggedIn) {
            axios.get(`${API_BASE_URL}/api/enrollments/getCoursesByStudent`, { withCredentials: true })
              .then(response => {
                const foundCourse = response.data.courses.find(course => course._id === this.course_id);
                if (foundCourse !== undefined) {
                  this.isEnrolled = true;
                }
              })
              .finally(() => { this.loading = false; })
          } else {
            this.loading = false;
          }
        })
        .catch(error => {
          console.error('Error fetching lessons:', error);
        })

    }

  },
  async mounted() {

    this.checkIfEnrolled();

  }
  ,
  created() {
    this.course_id = this.$route.params.course_id
  },
};

</script>

<style scoped>
.lessonname {
  color: #696984;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  word-wrap: break-word;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;

}

.lessontitles {
  margin-top: 0;
}

.rate h3 {
  color: #2F327D;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  padding-left: 30px;
  padding-top: 30px;

}



.font-icon {
  margin-left: 10px;
  color: #fff;
}



ul {
  list-style: none;
  padding-left: 0;
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
  /* Set the z-index to a value higher than your modal */
}

li {
  color: #49BBBD;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  padding: 5px;
}

.fa {
  color: rgba(0, 0, 0, 0.5);
}

.thiscourse {
  margin-top: 25px;
  color: #000;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;
}

.linee {
  margin-top: 30px;
  height: 1px;
  width: 100%;
  stroke-width: 1px;
  background-color: #696984;
}

.buyn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background: #49BBBD;
  color: #FFF;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.enrolled {
  margin-top: 10px;
  margin-left: 70px;
  width: 60%;
  height: 50px;
  border-radius: 12px;
  background: #FFC300;
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.enrolled:hover {
  color: #fff;
  box-shadow: 0 0 10px #FFD700;

}




.buyn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
}

.hour11 {
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
  margin-left: 33%;

}

.loader {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.courseprice h4 {
  color: rgba(0, 0, 0, 0.5);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  display: inline;
  margin-left: 20px;
}

.courseprice h3 {
  color: #000;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.9px;
  display: inline;
}

.courseprice {
  margin-top: 10px;
}

.descripcourse {
  position: absolute;
  top: 280px;
  left: 850px;
  width: 350px;
  height: 680px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 20px solid #FFF;
  background: rgb(255, 255, 255);
  grid-column: 2;
  margin-bottom: 0px;
  display: grid;
  grid-template-rows: 4fr 1.5fr 1fr 2fr 1.5fr 4fr 1.5fr 2fr 1.5fr 1.5fr;
}


.imageblog img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Maintain aspect ratio and cover container */
  object-position: center center;
  /* Center the image */
}

.imageblog {
  width: 100%;
  height: 500px;
  /* Adjust the height as needed */
  overflow: hidden;
  position: relative;
}

.descriptimg {
  width: 100%;
  height: 200px;
  grid-row: 1;
  overflow: hidden;
  position: relative;
}

.descriptimg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Maintain aspect ratio and cover container */
  object-position: center center;
  /* Center the image */
}

.offre:hover,
.offre:active,
.offre:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}

.offre h6 {
  position: absolute;
  margin-left: 30px;
  margin-top: 180px;
  color: #FFF;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  /* 43.2px */
  letter-spacing: 0.48px;
}

.offre h5 {
  margin-left: 30px;
  margin-top: 130px;
  position: absolute;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.perce {
  margin-top: 30px;
  margin-left: 30px;
  position: absolute;
  border-radius: 12px;
  background: rgba(255, 0, 0, 0.6);
  width: 80px;
  padding-top: 25px;
  padding-bottom: 25px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

.topoffre h4 {
  padding-top: 0px;
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
  display: inline;
}

.topoffre p {
  display: inline;

  position: absolute;
  right: 100px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}

img {
  width: 100%;
  height: 100%;
}

.topoffre {
  height: 500px;
  grid-template-rows: 1fr 9fr;
}

.offre {
  width: 370px;
  height: 320.419px;
  flex-shrink: 0;
  border-radius: 20px;
  margin-right: 40px;
  transition: ease-in-out 0.2s;
}

.offrecont {
  margin-top: 30px;
  margin-left: 60px;
  display: flex;
  grid-row: 2;
}

.shape22 {
  position: absolute;
  margin-top: 210px;
  margin-left: 360px;
  width: 171px;
  height: 171px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #33EFA0;
  z-index: -1;
}

.shape11 {
  width: 108px;
  height: 108px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #23BDEE;
  position: absolute;
  z-index: -1;
}

.imgvid1 {
  margin-left: 15px;
  margin-top: 15px;
}

.textvid {
  margin-top: 50px;
  margin-left: 70px;
}

.imgvid {
  width: 500px;
  height: 350px;
}

.textvid p {
  color: #696984;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  /* 43.2px */
  letter-spacing: 0.48px;
}

.textvid h3 {
  color: #00CBB8;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  display: inline;
}

.textvid h4 {
  color: #2F327D;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  /* 57.6px */
  display: inline;
}

.videocont {
  margin-top: 120px;
  margin-left: 60px;
  width: 90%;
  height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.overviewcont {
  height: 100px;
  margin-left: 60px;
  margin-top: 30px;
  grid-column: 1;
}

.coursedetails {
  width: 100%;
  height: auto;
  padding-bottom: 30px;

}

.overview {
  margin-right: 30px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);
  width: 140px;
  height: 53px;
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.4);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rate {
  margin-top: 30px;
  margin-left: 60px;
  width: 750px;
  height: auto;
  border-radius: 20px;
  background: rgba(157, 204, 255, 0.3);
  grid-column: 1;
  padding-bottom: 30px;
}

@media (min-width: 1300px) {
  .descripcourse {
    left: 950px;
  }

  .rate {
    width: 820px;
  }


}

@media (min-width: 1420px) {
  .descripcourse {
    left: 1010px;
  }

  .rate {
    width: 850px;
  }


}

@media (min-width: 1500px) {
  .descripcourse {
    left: 1100px;
  }

  .rate {
    width: 1000px;
  }


}

@media (max-width: 1216px) {
  .descripcourse {
    display: flex;
    top: 500px;
    left: 50px;
    width: 80%;
    height: 280px;
    margin-top: -30px;
  }

  .rate {
    margin-top: 300px;
    margin-left: 60px;
    width: 80%;
    height: auto;
    border-radius: 20px;
    background: rgba(157, 204, 255, 0.3);
    grid-column: 1;
    padding-bottom: 30px;
  }

  .hour11 {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    margin-left: 10%;

  }

  .courseprice h3 {
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.9px;
    display: inline;
  }

  .descriptimg {
    width: 400px;
    height: 240px;
    grid-row: 1;
    overflow: hidden;
    position: relative;
    margin-right: 30px;
    border-radius: 8px;

  }

  .descriptimg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Maintain aspect ratio and cover container */
    object-position: center center;
    /* Center the image */
  }


  .hour11 {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    margin-left: 0px;
    margin-top: 15px;

  }

  .buyn {
    margin-top: 20px;
    width: 40%;
    height: 50px;
    border-radius: 12px;
    background: #49BBBD;
    color: #FFF;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .course-content {
    width: 70%;
  }



}
</style>
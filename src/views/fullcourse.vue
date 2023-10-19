
<template>
  <div v-if="!loading" class="container1">
    <div class="lessonscont">
      <div class="back-course">
        <div @click="goBack" class="back back-hover">
          <fa :icon="['fas', 'arrow-left']" style="color: #ffffff" />
        </div>
        <span class="back-p ">Go back to course</span>
      </div>
      <h3>Lessons</h3>
      <lessonb :fetchLesson="fetchLesson" v-for="(lesson, index) in fetchedCourses" :key="index" :lesson="lesson" />
    </div>

    <div class="lessonvideo">
      <div @click="openLessons" class="lessonsTag"><font-awesome-icon :icon="['fas', 'list']" /> Lessons
      </div>
      <div class="tittle">
        <h2 v-if="fetchedCourses && fetchedCourses.length">{{ fetchedCourses[0].course_id.courseName }}</h2>
        <h4>{{ fetchedLesson.lessonName }}</h4>
      </div>
      <div class="video">
        <iframe :src="fetchedLesson.video" width="640" height="360" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <h3 class="tit">Description of the lesson</h3>
      <p class="text">
        {{ fetchedLesson.description }}
      </p>


    </div>
  </div>
  <div v-else class="loader">
    <pencil />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
//import lessonContainer from '../components/lessonContainer.vue'
import lessonb from '../components/lessonbotton.vue'
import pencil from "../components/pencil.vue";
import { useRouter, } from 'vue-router'; // Import useRouter and useRoute
import { API_BASE_URL } from '../config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



export default {
  components: {
    pencil,
    //lessonContainer,
    FontAwesomeIcon,
    lessonb
  },
  setup() {
    // Create reactive refs for course_id, lesson_id, fetchedCourses, and fetchedLesson
    const course_id = ref('');
    const isOpen = ref(true);
    const lesson_id = ref('');
    const fetchedCourses = ref([]);
    const fetchedLesson = ref({
      lessonName: '',
      description: '',
      duration: '',
      video: '',
      watched: '',
    })


    const loading = ref(true);

    // Fetch lesson data

    const fetchLesson = () => {
      axios.get(`${API_BASE_URL}/api/lessons/${lesson_id.value}`, { withCredentials: true })
        .then(response => {
          fetchedLesson.value = response.data


        })
        .catch(error => {
          console.error('Error fetching lesson:', error);
        });
    };

    const router = useRouter(); // Get the router instance

    const goBack = () => {
      router.push({ name: 'coursedetail', params: { course_id: course_id.value } })
    }

    const openLessons = () => {
      isOpen.value = !isOpen.value
      console.log(isOpen.value)
    }




    onMounted(async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/lessons/all-lessons/${course_id.value}`, { withCredentials: true });
        fetchedCourses.value = response.data;
        console.log(fetchedCourses.value);
        await fetchLesson()
        loading.value = false;
      } catch (error) {
        console.error('Error fetching courses:', error);
        loading.value = false;

      }


    });


    return {
      course_id,
      lesson_id,
      fetchedCourses,
      fetchedLesson,
      fetchLesson,
      openLessons,
      loading,
      goBack,

    };
  },
  created() {
    this.lesson_id = this.$route.params.id;
    this.course_id = this.$route.params.courseId;
  },
  methods: {

  }
};
</script>


<style scoped>
.text {
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8%;
  color: #696984;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
}

.lessonscont {
  width: 100%;
  height: 100%;


  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.5), 5px 0px 10px rgba(0, 0, 0, 0.5);
  /* Shadow on top and right sides */
  z-index: 3
}

.lessonscont h3 {
  color: #000;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 20px;
  margin-top: 10px;
}

.back-course {
  display: flex;
  flex-direction: row;
}

.back {
  width: 30px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #49BBBD;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
  /* Add a transition for background-color */
}

.back-hover:hover {
  background-color: #388E8E;
  /* Change the background color on hover */
}

.back-p {
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  margin-top: 24px;
  margin-left: 10px;
  color: #49BBBD;
  pointer-events: none;
}


.video {
  padding-bottom: 40px;
  padding-top: 30px;
}

.video::after {
  content: "";
  display: block;
  border-bottom: 1px solid #000;
  width: 80%;
  margin-left: 10%;
  margin-top: 40px;
}


.tit {
  color: #252641;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 5%;
  margin-top: -10px;
}

.tittle h2 {
  color: #000;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  background-color: rgba(244, 140, 6, 0);
}


.loader {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tittle h4 {
  color: black;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  background-color: rgba(244, 140, 6, 0);
}

.tittle h4::after {
  content: "";
  display: block;
  border-bottom: 1px solid #000;
  width: 0;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  animation: expandLine 1s ease-in-out forwards;
}

@keyframes expandLine {
  0% {
    width: 0;
  }

  100% {
    width: 40%;
    /* Adjust the desired final width */
  }
}


.tittle {
  width: 100%;
  height: 90px;

  text-align: center;
  margin-top: 50px
}

iframe {
  margin-left: 5%;
  margin-top: 40px;
  width: 90%;
  height: 500px;
  border-radius: 20px;
}





.lessonvideo {
  width: 100%;
  background: rgba(244, 140, 6, 0.3);
  position: relative;
}

.lessonsTag {
  position: absolute;
  left: 1px;
  top: 20px;

}

.container1 {
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;

}

.book {
  margin-left: 10px
}




.popup-lessons {
  height: 100%;

  z-index: 10;
}

.lessonContainer {
  height: auto;
}


.lessonsTag {
  color: #fff;
  background: #49BBBD;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  border-radius: 0 15px 15px 0;
  padding: 5px 10px;
  transition: background-color 0.3s;
  cursor: pointer;
  /* Add a transition for background-color */
}

.lessonsTag:hover {
  background-color: #388E8E;
  /* Change the background color on hover */
}

/*@media (min-width: 1360px) {
  .lessonsTag {
    display: none;
  }

}*/

/*@media (max-width: 1360px) {
  .lessonscont {
    display: none
  }

  .container1 {

    display: flex;

  }

}*/

@media (max-width: 1004px) {

  .video {
    padding-bottom: 30px;
    padding-top: 20px;
  }
}

@media (max-width: 950px) {
  iframe {
    height: 400px;
  }

}

@media (max-width: 800px) {
  iframe {
    height: 350px;
  }

}

@media (max-width: 699px) {
  iframe {
    height: 340px;
  }

}

@media (max-width: 676px) {


  .tittle h2 {
    font-size: 26px;
  }

  .tittle h4 {
    font-size: 17px;

  }

}

@media (max-width: 655px) {
  iframe {
    height: 310px;
  }

}

@media (max-width: 611px) {
  iframe {
    height: 280px;
  }

}


@media (max-width: 586px) {
  .video {
    padding-top: 60px;
  }

}


@media (max-width: 544px) {
  iframe {
    height: 250px;
  }

}

@media (max-width: 493px) {
  iframe {
    height: 220px;
  }

  .video {
    padding-top: 50px;
    padding-bottom: 30px;
  }

}

@media (max-width: 429px) {
  iframe {
    height: 200px;
  }
}

@media (max-width: 390px) {


  .tittle h2 {
    font-size: 23px;
  }

  .tittle h4 {
    font-size: 14px;

  }

  iframe {
    height: 150px;
  }

}

/*
@media (max-width: 900px) {

}

@media (max-width: 890px) {

  .video {
    padding-bottom: 20px;
    padding-top: 10px;
  }

  .video::after {
    margin-top: 20px;
  }
}

/*@media (max-width: 950px) {

  .video {
    padding-bottom: 25px;
    padding-top: 10px;
  }
}*/
</style>
<template>
  <div v-if="!loading" class="container1">
    <div class="lessonscont">
      <div class="back">
        <fa @click="goBack" :icon="['fas', 'arrow-left']" style="color: #ffffff" />
      </div>
      <h3>Lessons</h3>
      <lessonb :fetchLesson="fetchLesson" v-for="(lesson, index) in fetchedCourses" :key="index" :lesson="lesson" />
    </div>
    <div class="lessonvideo">
      <div class="tittle">
        <h2 v-if="fetchedCourses && fetchedCourses.length">{{ fetchedCourses[0].course_id.courseName }}</h2>
        <h4>{{ fetchedLesson.lessonName }}</h4>
      </div>
      <div>


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
import lessonb from '../components/lessonbotton.vue'
import pencil from "../components/pencil.vue";
import { useRouter, } from 'vue-router'; // Import useRouter and useRoute



export default {
  components: {
    lessonb,
    pencil
  },
  setup() {
    // Create reactive refs for course_id, lesson_id, fetchedCourses, and fetchedLesson
    const course_id = ref('');
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
      axios.get(`http://localhost:8000/api/lessons/${lesson_id.value}`, { withCredentials: true })
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




    onMounted(async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/lessons/all-lessons/${course_id.value}`, { withCredentials: true });
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

.tit {
  color: #252641;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 5%;
  margin-top: 30px;
}

.tittle h2 {
  color: #000;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
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
}

.tittle {
  width: 100%;
  height: 90px;
  background-color: rgb(197, 220, 245);
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
  background: rgb(197, 220, 245);
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

.lessonscont {
  width: 100%;
  height: auto;

  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.5), 5px 0px 10px rgba(0, 0, 0, 0.5);
  /* Shadow on top and right sides */
  z-index: 3
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

.back:hover {
  background-color: #388E8E;
  /* Change the background color on hover */
}


.lessonscont h3 {
  color: #252641;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 20px;
  margin-top: 10px;
}
</style>
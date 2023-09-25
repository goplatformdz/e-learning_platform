<template>
  <div class="container1">
    <div class="lessonscont">
      <div class="back">
        <fa :icon="['fas', 'arrow-left']" style="color: #ffffff" />
      </div>
      <h3>Lessons</h3>
      <button class="lessonb" v-for="(lesson, index) in fetchedCourses" :key="index">
        <fa :icon="['fas', 'book-open']" class="book" style="color: #252641" />
        <h4 class="h3">{{ lesson.lessonName }}</h4>
      </button>
    </div>
    <div class="lessonvideo">
      <div class="tittle">
        <h2 v-if="fetchedCourses && fetchedCourses.length">{{ fetchedCourses[0].course_id.courseName }}</h2>
        <h4>Introduction about XD</h4>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c-6AaS7997w?si=oDyuJdq0SPvRf6wg"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <h3 class="tit">O6 Super Coins on the way</h3>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmod
      </p>

      <h3 class="tit">Who this course is for?</h3>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmod
      </p>

      <h3 class="tit">Archievable</h3>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmod
      </p>
    </div>
  </div>
</template>

<script>
import lessonb from "@/components/lessonbotton.vue";
import axios from 'axios';

export default {
  componenet: {
    lessonb,
  },
  data() {
    return {
      course_id: '',
      fetchedCourses: [],
    }
  },
  mounted() {
    axios.get(`http://localhost:8000/api/lessons/all-lessons/${this.course_id}`, { withCredentials: true })
      .then(response => {
        this.fetchedCourses = response.data;
        console.log(this.fetchedCourses)// Update the courses data property with the fetched data
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });

  },
  created() {
    this.course_id = this.$route.params.courseId
  },
};
</script>

<style scoped>
.text {
  margin-left: 5%;
  margin-right: 5%;
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

.lessonb {
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  width: 90%;
  height: 45px;
  border-radius: 12px;
  background: rgba(244, 140, 6, 0.3);
  text-align: left;
}

.h3 {
  color: #252641;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline;
  margin-left: 10px;
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
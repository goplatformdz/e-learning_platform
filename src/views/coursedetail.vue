<template>
  <div class="coursedetailpage">
    <div class="imageblog">
      <img src="@/assets/blogD.png" alt="" />
    </div>
    <div class="coursedetails">
      <div>
        <div class="overviewcont">
          <button class="overview" v-for="index in 4" :key="index">
            Overview
          </button>
        </div>
        <div class="rate">
          <h3 v-if="fetchedCourses && fetchedCourses.length">{{ fetchedCourses[0].courseName }}</h3>
          <h3 class="lessonname" v-for="(lesson, index) in fetchedCourses" :key="index" >{{ lesson.lessonName }}</h3>

          
        </div>
      </div>
      <div class="descripcourse">
        <div class="descriptimg"><img src="@/assets/blogD.png" alt="" /></div>
        <div class="courseprice">
          <h3>$49.65</h3>
          <h4>$99.99</h4>
          <h4>50% Off</h4>
        </div>
        <p class="hour11">11 hour left at this price</p>
        <div>
          <button class="buyn" @click="conferm">Enrollment</button>
          <div class="linee"></div>
        </div>
        <h3 class="thiscourse">this course included</h3>
        <div>
          <ul>
            <li>
              <fa :icon="['fas', 'sun']" />
              <spam class="fa"> Money Back Guarantee</spam>
            </li>
            <li>
              <fa :icon="['fas', 'camera']" />
              <spam class="fa"> Access on all devices</spam>
            </li>
            <li>
              <fa :icon="['fas', 'file']" />
              <spam class="fa"> Certification of completion</spam>
            </li>
          </ul>
          <div class="linee"></div>
        </div>
        <h3 class="thiscourse">Share this course</h3>
      </div>
    </div>

    <recomanded/>
    
   
    <confirm :isopen="isopen" :conferm="conferm" :enroll="enroll" :course_id="course_id" />







    <div class="videocont">
      <div class="textvid">
        <h4>
          Everything you can do in a physical <br />
          classroom,
        </h4>
        <h3>you can do with TOTC</h3>
        <p>
          TOTC’s school management software helps traditional <br />
          and online schools manage scheduling, attendance, <br />
          payments and virtual classrooms all in one secure cloud- <br />
          based system.
          <br />
          <br />
          <a href="">learn more</a>
        </p>
      </div>
      <div class="imgvid">
        <div class="shape11"></div>
        <div class="shape22"></div>
        <img class="imgvid1" src="@/assets/teacher.png" alt="" />
      </div>
    </div>
    <div class="topoffre">
      <h4>Top Education offers and deals are listed here</h4>
      <p>See all</p>
      <div class="offrecont">
        <div class="offre" v-for="index in 3" :key="index">
          <div class="perce">50%</div>
          <h5>FOR INSTRUCTORS</h5>
          <h6>
            TOTC’s school management <br />
            software helps traditional and <br />
            online schools manage <br />
            scheduling,
          </h6>
          <img src="@/assets/redhair3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import confirm from '../components/confirm.vue';
import recomanded from '../components/recomanded.vue';
export default {
  name: "coursedetail",
  components: {
   recomanded ,
   confirm,
   
  },
  methods: {
    conferm() {
      this.isopen = !this.isopen;
    },
    enroll(){
      axios.post(`http://localhost:8000/api/enrollments/enrollInCourse/${this.course_id}`,{} ,{ withCredentials:true })
    .then(response => {
        console.log(response.data); // Update the courses data property with the fetched data
    })
    .catch(error => {
        console.error('Error fetching courses:', error);
    });
    }
  },
  data() {
        return {
          course_id: '',
            fetchedCourses: [],
            isopen: false,
            fetchedCourses1: [],
        }
    },
    mounted() {

  axios.get(`http://localhost:8000/api/lessons/all-lessons/${this.course_id}`, { withCredentials:true })
    .then(response => {
        this.fetchedCourses = response.data; // Update the courses data property with the fetched data
    })
    .catch(error => {
        console.error('Error fetching courses:', error);
    });


    



},
created(){
  this.course_id = this.$route.params.course_id
},
};

</script>

<style scoped>
.lessonname{
  color: black;
 font-size: 20px;
 font-family: Poppins;
 font-weight: 600;
 letter-spacing: 0.60px;
 word-wrap: break-word
}
ul {
  list-style: none;
  padding-left: 0;
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
}
.buyn:hover{
  transform:scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.hour11 {
  color: #49BBBD;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
  margin-left: 80px;
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
  font-size: 42px;
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
  height: 855px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 20px solid #FFF;
  background: rgb(255, 255, 255);
  grid-column: 2;
  margin-bottom: 700px;
  display: grid;
  grid-template-rows: 4fr 1.5fr 1fr 2fr 1.5fr 4fr 1.5fr 2fr 1.5fr 1.5fr;
}
.descriptimg {
  width: 100%;
  height: 200px;
  grid-row: 1;
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
  line-height: 180%; /* 43.2px */
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
  line-height: 180%; /* 43.2px */
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
  line-height: 160%; /* 57.6px */
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
  height: 700px;
  display: grid;
  grid-template-columns: 3fr 2fr;
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
  margin-left: 60px;
  width: 650px;
  height: 500px;
  border-radius: 20px;
  background: rgba(157, 204, 255, 0.3);
  grid-column: 1;
}
</style>
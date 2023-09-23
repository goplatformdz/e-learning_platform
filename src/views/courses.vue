<template>
  <main>
    <div class="searchcont">
    <div>
      <input type="search" name="" class="search" placeholder="Search your favourite course" v-model="courseName" />
      <button class="srchbtn" @click="searchCourse">Search</button>
      <img src="@/assets/searchimg.png" alt="" />
    </div>
  </div>
  <div class="courses-searched">
    <markCard v-for=" (course,index) in searchData" :key="index" :course-data="course" />
  </div>
    <!-- <div class="yourles">
      <h3>Welcome back, ready for your next lesson?</h3>
      <p class="see">See all</p>
      <div class="lessonscards">
        <lessons v-for="index in 3" :key="index" />
      </div>
    </div> -->
    <div class="categories">
      <h3>Choose your favorite course from top category</h3>
      <div>
        <div class="grid-container" v-if="!loading">
          <categCard v-for="(category, index) in fetchedCategories" :key="index" :category-data="category" />
        </div>
        <div class="grid-container" v-else>
          <categCardSkeleton v-for="index in 8" :key="index" />
        </div>
      </div>
    </div>
  <recomanded/>
  <div class="topoffre">
    <h4>Top Education offers and deals are listed here</h4>
    <p>See all</p>
    <div class="offrecont">
      <div class="offre" v-for="index in 3" :key="index">
        <div class="perce">50%</div>
        <h5>Lorem ipsum dolor</h5>
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
  </main>
</template>

<script>
// import lessons from "@/components/lessons.vue";
import categCard from "@/components/categCard.vue";

import markCard from "@/components/markCard.vue";
import recomanded from "../components/recomanded.vue";

import categCardSkeleton from "@/components/categCardSkeleton.vue";

//import markCard from "@/components/markCard.vue";
import axios from 'axios';
//import Cookies from 'js-cookie';
export default {
  data() {
    return {
      fetchedCategories: [],
      searchData: [], // Initialize an empty array to store the fetched data
      courseName: "",
      loading: true,
    }
  },
  name: "courses",
  components: {
    // lessons,
    categCard,
    markCard,
    recomanded,
    categCardSkeleton,
  },
  methods: {
    async searchCourse() {
      //const courseName = this.courseName;
      try {
        const response = await axios.post("http://localhost:8000/api/courses/search_course", { courseName: this.courseName })
        this.searchData = response.data.result;
      }
      catch (error) {
        console.error(error);
      }
    },

  },
  mounted() {
    axios.get('http://localhost:8000/api/categories/all-categories', { withCredentials: true })
      .then(response => {
        // Simulate a delay of 2 seconds (2000 milliseconds)
        setTimeout(() => {
          this.fetchedCategories = response.data;
          this.loading = false; // Set loading to false after the delay
        }, 10000); // Adjust the delay time as needed (in milliseconds)
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      })

  },
 
};
</script>

<style>
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
  background: #49BBBD;
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
  margin-top: 40px;
  height: 500px;
  grid-template-rows: 1fr 9fr;
}

.offre {
  width: 370px;
  height: 320.419px;
  flex-shrink: 0;
  border-radius: 20px;
  margin-right: 40px;
  margin-top: 20px;
  transition: ease-in-out 0.2s;
}

.offrecont {
  display: relative;
  margin-top: 30px;
  margin-left: 60px;
  display: flex;
  flex-wrap: wrap;
  grid-row: 2;
}

.courses-searched {
  display: flex;
  flex-wrap: wrap;
  margin-left: 4.5%;
}

.search {
  border-radius: 10px;
  background: #FFF;
  width: 70%;
  height: 50px;
  border: 0;
  position: absolute;
  margin-top: 5%;
  margin-left: 15%;
  padding-left: 3%;
  padding-right: 3%;
  color: rgba(0, 0, 0, 0.6);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
  outline: none;
}

.searchcont {
  margin-top: 80px;
}

.srchbtn {
  color: #FFF;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 12px;
  background: #49BBBD;
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  position: absolute;
  margin-top: 11%;
  margin-left: 46%;
}

.srchbtn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
  background-color: rgb(40, 161, 163);
}
.m {
  margin-top: 20px;
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}

.s {
  margin-top: 25px;
  position: absolute;
  right: 80px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}

.Rcard {
  margin-top: 30px;
  display: flex;
  gap: 30;
  padding-left: 50px;
  grid-row: 2;
}

.recomended {
  width: 100%;
  height: 500px;
  background-color: rgb(197, 220, 245);
  display: grid;
  grid-template-rows: 1fr 9fr;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Adjust the column width as needed */
  gap: 20px;
  /* Adjust the gap between grid items */
}

.categories h3 {
  margin-left: 60px;
  padding-top: 80px;
  color: #252641;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.categories {
  width: 100%;
  height: auto;
  margin-bottom: 60px;
}

.see {
  margin-top: 35px;
  position: absolute;
  right: 80px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}

.lessonscards {
  display: flex;
  margin-left: 60px;
  margin-top: 20px;
}

.yourles {
  margin-top: 80px;
  width: 100%;
  height: 500px;
  background-color: rgb(197, 220, 245);
  display: grid;
  grid-template-rows: 1fr 9fr;
}

.yourles h3 {
  margin-left: 60px;
  padding-top: 25px;
  color: #252641;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  grid-row: 1;
}
</style>
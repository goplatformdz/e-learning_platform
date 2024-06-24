<template>
  <main>
    <div class="search-section">
      <div class="img-search"><img src="@/assets/searchimg.png" alt="" /></div>
      <input type="search" name="" class="search" placeholder="Search courses by name" v-model="courseName" />
      <button class="srchbtn" @click="searchCourse">Search</button>
    </div>
    <div v-if="searched && searchData.length" class="courses-searched">
      <h3>Courses found for " {{ varSearched }} "</h3>
      <div class="grid-container-searched">
        <markCard v-for=" (course, index) in searchData" :key="index" :course-data="course" />
      </div>
    </div>
    <div v-if="!searched" class="not-searched">
      <h2>Search courses, you will find them here <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass"
          size="xl" /></h2>
    </div>
    <div v-if="searched && !searchData.length" class="not-searched">
      <h2>No courses found for " {{ varSearched }} "<font-awesome-icon class="icon" size="xl"
          icon="fa-solid fa-magnifying-glass-minus" /></h2>
    </div>

    <!-- <div class="yourles">
      <h3>Welcome back, ready for your next lesson?</h3>
      <p class="see">See all</p>
      <div class="lessonscards">
        <lessons v-for="index in 3" :key="index" />
      </div>
    </div> -->
    <div class="categories">
      <h3 class="cateH">Or discover from searching by categories you want</h3>
      <div>
        <div class="grid-container" v-if="!loading">
          <categCard v-for="(category, index) in fetchedCategories" :key="index" :category-data="category" />
        </div>
        <div class="grid-container" v-else>
          <categCardSkeleton v-for="index in 8" :key="index" />
        </div>
      </div>
    </div>
    <myCourses />
    <recomanded />
    <div class="topoffre">
      <div class="topoffre-header">
        <h4>Top Education offers and deals are listed here</h4>
        <p>See all</p>
      </div>
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
import recomanded from "@/components/recomanded.vue";
import myCourses from "@/components/myCourses.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import categCardSkeleton from "@/components/categCardSkeleton.vue";

//import markCard from "@/components/markCard.vue";
import axios from 'axios';
import { API_BASE_URL } from "../config";
//import Cookies from 'js-cookie';
export default {
  data() {
    return {
      fetchedCategories: [],
      myCourses: [],
      searchData: [], // Initialize an empty array to store the fetched data
      courseName: "",
      loading: true,
      searched: false,
      varSearched: ''
    }
  },
  name: "courses",
  components: {
    // lessons,
    categCard,
    markCard,
    recomanded,
    categCardSkeleton,
    FontAwesomeIcon,
    myCourses
  },

  methods: {
    async searchCourse() {
      //const courseName = this.courseName;
      try {
        const response = await axios.post(`${API_BASE_URL}/api/courses/search_course`, { courseName: this.courseName })
        this.searchData = response.data.result;
        this.varSearched = this.courseName
        this.searched = true;
        console.log(this.searchData)
      }
      catch (error) {
        console.error(error);

      }
    },

  },
  mounted() {
    axios.get(`${API_BASE_URL}/api/categories/all-categories`, { withCredentials: true })
      .then(response => {
        this.fetchedCategories = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        this.loading = false;
      })

    axios.get(`${API_BASE_URL}/api/courses/my-courses`, { withCredentials: true })
      .then(response => {
        this.myCourses = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        this.loading = false;
      })



  },

};
</script>

<style scoped>
.search-section {
  width: 100%;
  height: 200px;

}

.img-search {
  width: 100%;
  height: 100%;
  /* Adjust the height as needed */
  overflow: hidden;
}

.img-search img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Maintain aspect ratio and cover container */
  object-position: center center;
}

.search-section .search {
  display: block;
  margin: 0px auto;
  border-radius: 10px;
  background: #FFF;
  width: 70%;
  height: 50px;
  border: 0;
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

.search-section .srchbtn {
  display: block;
  margin: 15px auto;
  color: #FFF;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 12px;
  background: #00A9FF;
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.srchbtn:hover,
.srchbtn:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #388E8E;
}

.courses-searched {
  width: 100%;
  height: auto;
  background-color: rgb(197, 220, 245);


}

.courses-searched h3 {
  margin-left: 5%0px;
  margin-bottom: 20px;
  color: #252641;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.not-searched {
  margin-top: -5px;
  text-align: center;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  padding-bottom: 40px;
  background-color: #fff
}

.not-searched h2 {
  padding-top: 50px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.not-searched h2 .icon {
  margin-left: 20px;
}

.categories {
  text-align: center;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  position: relative;
}

.categories h3 {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 60px 30px;
  margin-bottom: 30px;
  color: #252641;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}


.topoffre {
  margin-bottom: 40px;
  margin-top: 40px;
  height: auto;
  grid-template-rows: 1fr 9fr;
}

.topoffre .topoffre-header {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
}

.topoffre h4 {
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
  margin: 0 3px;
}

.topoffre p {
  color: #49BBBD;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}

.topoffre .offrecont {
  width: 95%;
  margin: 20px auto;
  background-color: #fff;
  display: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.topoffre .offrecont .offre {
  margin: 20px auto;
  width: 370px;
  height: 320.419px;
  flex-shrink: 0;
  border-radius: 20px;
  /* margin-right: 40px;
  margin-top: 20px; */
  transition: ease-in-out 0.2s;
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

.topoffre .offrecont .offre .perce {
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


.cateH {
  position: absolute;
  margin-top: -15px;
  margin-bottom: 15px;
  left: 10px;
}



img {
  width: 100%;
  height: 100%;
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
  padding-top: 90px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Adjust the column width as needed */
  gap: 20px;
  /* Adjust the gap between grid items */
}

.grid-container-searched {
  padding-top: 10px;
  padding-left: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Adjust the column width as needed */
  gap: 0px;
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

main {
  width: 100%;
}

@media only screen and (max-width: 751px) {
  .categories h3 {

    font-size: 22px;

  }

  .grid-container {

    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    /* Adjust the column width as needed */
    gap: 20px;
    /* Adjust the gap between grid items */
  }
}

@media only screen and (max-width: 704px) {
  .topoffre p {
    margin: 0 auto;
  }



}

@media only screen and (max-width: 618px) {

  .grid-container-searched {
    grid-template-columns: repeat(2, minmax(200px, 1fr));

  }
}

@media only screen and (max-width: 519px) {

  .grid-container {
    padding-left: 10%;
  }
}



@media only screen and (max-width: 404px) {
  .topoffre .offrecont .offre {
    width: 90%;
  }
}

@media only screen and (max-width: 370px) {
  .categories h3 {

    font-size: 19px;

  }

  .grid-container {
    padding-left: 5%;
  }
}
</style>
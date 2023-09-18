<template>
  <div class="searchcont">
    <div>
      <input type="search" name="" class="search" placeholder="Search your favourite course" v-model="courseName" />
      <button class="srchbtn" @click="searchCourse">Search</button>
      <img src="@/assets/searchimg.png" alt="" />
    </div>
  </div>
  <div class="courses-searched">
    <markCard v-for=" course in searchData" :key="course" :course-data="course" />
  </div>



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
</template>

<script>
import axios from "axios";
import markCard from "@/components/markCard.vue";
export default {
  data() {
    return {
      searchData: [], // Initialize an empty array to store the fetched data
      courseName: "", // Initialize a variable to store the course name
    };
  },
  components: {
    markCard,

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
};

</script>

<style  scoped>
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
  flex-wrap: wrap;
  gap: 30;
  padding-left: 50px;
  grid-row: 2;
}

.recomended {
  margin-top: 50px;
  width: 100%;
  background-color: rgb(197, 220, 245);
  display: grid;
  gap: 0;
  grid-template-rows: 1fr 9fr;
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
</style>


<template>
    <div class="recomended">
      <h4 class="m">Recomended for you</h4>
      <p class="s">See all</p>
      <div class="Rcard">
        <markCard v-for="(recomended, index) in fetchedCourses" :key="index" :course-Data="recomended" />
      </div>
    </div>
  </template>
  <script>
  import markCard from "@/components/markCard.vue";
  import axios from 'axios';
  export default {
    name: "recomanded",
    components: {
      markCard,
    },
    data() {
    return {
      fetchedCourses: [],
      items: [
        { title: "UX/UI", img: "../assets/react.png" },
        // { title: "React", img: "react.png" },
        // { title: "PHP", img: "php.png" },
        //{ title: "JavaScript", img: "js.png" },
      ],
    };
  },
  mounted() {

   axios.get('http://localhost:8000/api/courses/recommended-courses',{ withCredentials: true})
    .then(response => {
        this.fetchedCourses = response.data; // Update the courses data property with the fetched data
      console.log(response.data)
    })
    .catch(error => {
        console.error('Error fetching courses:', error);
    });

  },
  };
  </script>
  <style scooped>
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
    margin-top: 50px;
    width: 100%;
    padding-bottom: 40px;
    background-color: rgb(197, 220, 245);
    display: grid;
    gap: 0;
    grid-template-rows: 1fr 9fr;
  }
  </style>
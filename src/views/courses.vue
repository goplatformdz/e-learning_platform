<template>
  <main>
    <div class="yourles">
      <h3>Welcome back, ready for your next lesson?</h3>
      <p class="see">See all</p>
      <div class="lessonscards">
        <lessons v-for="index in 3" :key="index" />
      </div>
    </div>
    <div class="categories">
      <h3>Choose your favorite course from top category</h3>
      <div class="grid-container">
        <categCard v-for="(category, index) in fetchedCategories" :key="index" :category-data="category" />
      </div>
    </div>
  </main>
</template>

<script>
import lessons from "@/components/lessons.vue";
import categCard from "@/components/categCard.vue";
//import markCard from "@/components/markCard.vue";
import axios from 'axios';
//import Cookies from 'js-cookie';
export default {
  data() {
    return {
      fetchedCategories: [],
    }
  },
  name: "courses",
  components: {
    lessons,
    categCard,
    // markCard,
  },
  mounted() {


    axios.get('http://localhost:8000/api/categories/all-categories', { withCredentials: true })
      .then(response => {
        this.fetchedCategories = response.data; // Update the courses data property with the fetched data

      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  },
  methods: {

  },
};
</script>

<style>
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
<template>
  <div class="blog-page">

    <div class="related">
      <h5>Reading blog list</h5>
      <div v-if="!loading" class="grid-container">
        <relatedCard v-for="(blog, index) in fetchedBlogs" :key="index" :blog-data="blog" />
      </div>
      <div v-else class="grid-container">
        <relatedCardSkeleton v-for="index in 6" :key="index" />
      </div>
    </div>


  </div>
</template>



<script>
//import blogCard from "@/components/blogComponent.vue";
import relatedCard from "@/components/relatedCard.vue";
import relatedCardSkeleton from "@/components/relatedCardSkeleton.vue";
//import recomanded from "../components/recomanded.vue";
import axios from "axios";
import { API_BASE_URL } from "../config";
export default {
  data() {
    return {
      fetchedBlogs: [],
      loading: true,
    }
  },
  name: "blog",
  components: {
    //blogCard,
    relatedCard,
    relatedCardSkeleton
    //recomanded,
  },
  mounted() {
    axios.get(`${API_BASE_URL}/api/blogs/all-blogs`, { withCredentials: true })
      .then(response => {
        this.fetchedBlogs = response.data;
        this.loading = false;
        console.log(this.fetchedBlogs[0].photo1, this.fetchedBlogs[0].photo2)

      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        this.loading = false;
      })

  }

};
</script>
<style  scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Display two columns */
  gap: 0px;
  /* Adjust the gap between grid items */
  margin-top: 20px;
  /* Add margin to separate from the content above */
}



.related {
  width: 100%;
  height: auto;
  background-color: #F5F5F5;
  padding-left: 50px;
  padding-top: 100px;


}

.related h4 {
  margin-top: 70px;
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-column: 1;
  grid-row: 1;
}

.related p {
  margin-top: 70px;
  position: absolute;
  right: 80px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-column: 2;
  grid-row: 1;
}



.read-blog {
  width: 100%;
  height: 360px;
  display: grid;
  grid-template-rows: 1fr 9fr;
  gap: 0px;
}

h5 {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
  margin-top: 40px;
}

.img {
  margin-top: 40px;
  margin-left: 35px;
  height: 80%;
  width: 80%;
  grid-column: 2;
  grid-row-start: 1;
  /* Start at the second row */
  grid-row-end: 5;
}



h3 {
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline;
}

h4 {
  color: #49BBBD;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline;
}



h1 {
  color: #2F327D;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  grid-column: 1;
  grid-row: 2;
  margin: 0;
  margin-left: 60px;
  margin-top: 5px;
}

p {
  color: #696984;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  /* 43.2px */
  letter-spacing: 0.48px;
  grid-column: 1;
  grid-row: 3;
  margin: 0;
  margin-left: 60px;
  margin-top: 15px;
}

.btn-start {
  margin-left: 60px;
  margin-top: 20px;
  width: 150px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #49BBBD;
  color: #FFF;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-column: 1;
  grid-row: 4;
  border: 0;
}

.btn-start:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.blog-page {
  width: 100%;
  height: 100%;
  background-color: white;
}

img {
  width: 100%;
  height: 100%;
}
</style>
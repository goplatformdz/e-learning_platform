<template>
  <div class="Bdetail">
    <div class="imageblog">
      <img :src="blogData.panoramic_image" alt="" />
    </div>
    <div class="blogtext">
      <h3>{{ blogData.title }}</h3>
      <p>
        {{ blogData.content }}
      </p>

      <center>
        <div class="line"></div>
      </center>
      <div class="bloger">

        <div class="writen">
          <h2>Written by: {{ blogData.author }}.<br> Posted the: {{ blogData.date }}.</h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import moment from "moment";
import { API_BASE_URL } from "../config";
export default {
  data() {
    return {
      blogData: {
        title: "",
        content: "",
        author: "",
        date: "",
        panoramic_image: "",
      },
    }
  },
  name: "blogdetail",
  components: {

  },
  mounted() {
    this.blog_id = this.$route.params.id;
    this.fetchBlogData(); // Call the method to fetch blog data
  },
  methods: {
    fetchBlogData() {
      axios
        .get(`${API_BASE_URL}/api/blogs/${this.blog_id}`, {
          withCredentials: true,
        })
        .then((response) => {
          // Update the blogData object with the response data and format the date
          this.blogData.title = response.data.title;
          this.blogData.content = response.data.content;
          this.blogData.author = response.data.author;
          // Format the date using Moment.js
          this.blogData.date = moment(response.data.createdAt).format("MMMM Do YYYY, h:mm a");
          this.blogData.panoramic_image = response.data.photo2;
          console.log(this.blogData);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scooped>
.relatedCard1 {
  margin-top: 30px;
  display: flex;
  margin-left: 12%;
  width: 80%;
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}

.related1 {
  width: 100%;
  height: 700px;
  background-color: rgb(197, 220, 245);
  margin-top: 50px;
  display: grid;
  grid-template-rows: 1fr 8fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.imageblog {
  width: 100%;
  height: 500px;
  /* Adjust the height as needed */
  overflow: hidden;
  position: relative;
}

.imageblog img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Maintain aspect ratio and cover container */
  object-position: center center;
  /* Center the image */
}

.related1 .h4 {
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

.related1 .p {
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

.follow {
  border-radius: 10px;
  border: 1px solid #49BBBD;
  background: rgba(73, 187, 189, 0);
  width: 152px;
  height: 45px;
  flex-shrink: 0;
  margin-top: 45px;
  margin-left: 900px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.bloger {
  display: flex;
}

.writen h2 {
  margin-bottom: 40px;
  margin-left: 43px;
  color: #696984;
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;
  grid-row: 2;
}

.writen text {
  margin-top: 30px;
  color: #696984;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.24px;
  grid-row: 1;
}

.writen {
  margin-top: 18px;
  margin-left: 20px;
  width: 100%;
  display: flex;
}



.line {
  margin-top: 30px;
  width: 90%;
  height: 0.5px;
  background: #696984;
}

.btncat {
  margin-top: 20px;
  margin-left: 60px;
  border-radius: 36px;
  background: rgba(73, 187, 189, 0.1);
  width: 136px;
  height: 49px;
  flex-shrink: 0;
  color: #696984;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.blogtext {
  display: grid;
}

.blogtext h3 {
  margin-top: 20px;
  color: #2F327D;
  text-align: center;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
  /* 79.2px */
}

.blogtext p {
  margin-left: 60px;
  color: #696984;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  /* 43.2px */
  letter-spacing: 0.48px;
}

.imageblog {
  margin-top: 80px;
  width: 100%;
  height: 450px;
}
</style>
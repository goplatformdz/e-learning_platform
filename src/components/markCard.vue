<template>
  <div class="markcard" @click="passdatatodetail">
    <div class="img">
      <img :src="courseData.photo1" alt="" />
    </div>
    <div class="m3d">
      <p class="d">{{ courseData.category.name }}</p>
    </div>
    <h4>
      {{ courseData.courseName }}
    </h4>
    <div class="circle1">
      <h6>{{ courseData.instructor }}</h6>
    </div>
    <div class="price">
      <h1>$80</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "markCard1",
  props: {
    courseData: {
      type: Object,
      required: false
    }
  },

  // You can update the image source dynamically in your methods

  methods: {
    passdatatodetail() {
      this.$router.push({ name: 'coursedetail', params: { course_id: this.courseData._id } });
      console.log(this.courseData);

    },

  },

};
</script>

<style scoped>
.price {
  bottom: 10px;
  right: 10px;
  position: absolute;
}

.price h1 {
  margin-top: 3px;
  margin-left: 200px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: 0.48px;
}

.circle1 h6 {
  margin-top: 30px;
  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.36px;
}

.circle1 {
  margin-top: 10px;
  margin-left: 17px;
  width: 100%;
  height: 30px;
  border-radius: 50%;
  display: flex;
  bottom: 5px;
}

.markcard h5 {
  margin-top: 3px;
  margin-left: 17px;
  color: #696984;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  /* 32.4px */
  letter-spacing: 0.36px;
  grid-row: 4;
  margin-bottom: 0;
}

.markcard h4 {
  color: #252641;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 17px;
  grid-row: 3;
  grid-column: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* Number of lines to display */
  -webkit-box-orient: vertical;
  overflow: hidden;

}

/*.markcard h4::after {
  content: '...';

  position: absolute;

  bottom: 0;

  right: 0;

  background-color: white;
}*/

.markcard p {
  color: #696984;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  /* 25.2px */
  letter-spacing: 0.28px;
}

.markcard {
  width: 250px;
  height: 350px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px rgba(47, 50, 125, 0.1);
  display: flex;
  flex-direction: column;
  margin-right: 72px;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

}

.markcard:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.img {
  margin-top: 12px;
  margin-left: 5%;
  width: 90%;
  height: 150px;
  grid-row: 1;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  background-color: #171B41;
}



.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Maintain aspect ratio and cover container */
  object-position: center center;
  /* Center the image */
}

.d {
  grid-row: 2;
  margin-left: 17px;
}

.m3 {
  margin-left: 130px;
  grid-row: 2;
}

.m3d {
  display: flex;
  flex-direction: row;
}
</style>
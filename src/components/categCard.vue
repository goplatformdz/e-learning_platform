<template>
  <div class="main" @click="navigateToCoursesByCategoryPage">

    <img :src="categoryData.image" alt="" />

    <h1>{{ categoryData.name }}</h1>

  </div>
</template>

<script>
export default {
  name: "categCard",
  props: {
    categoryData: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateToCoursesByCategoryPage() {
      this.$router.push({ name: 'coursesByCategory', params: { categoryName: this.categoryData.name } });
    }
  }
};
</script>

<style scoped>
.main p {
  color: #696984;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  grid-row: 2;
}

.main h1 {
  margin-top: 10px;
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;

}

img {
  margin-top: 10px;
  width: 70px;
  margin-bottom: 10px;
  height: 70px;

  grid-row: 1;
}

.container {
  display: flex;
  flex-direction: column;

}

.main {
  margin-top: 30px;
  margin-left: 60px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 30px 60px 0px rgba(47, 50, 125, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.main:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.04);
  transition: ease-in-out 0.1s;
}
</style>
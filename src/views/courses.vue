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
      <h3>Choice favourite course from top category</h3>
      <div v-for="row in 2" :key="row" class="grid-row">
        <categCard v-for="index in 4" :key="index" />
      </div>
    </div>
    <div class="recomended">
      <h4 class="m">Marketing Articles</h4>
      <p class="s">See all</p>
      <div class="Rcard">
        <markCard v-for="index in 4" :key="index" />
      </div>
    </div>
  </main>
</template>

<script>
import lessons from "@/components/lessons.vue";
import categCard from "@/components/categCard.vue";
import markCard from "@/components/markCard.vue";
export default {
  name: "courses",
  components: {
    lessons,
    categCard,
    markCard,
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
  width: 100%;
  height: 520px;
  background-color: rgb(197, 220, 245);
  display: grid;
  gap: 0;
  grid-template-rows: 1fr 9fr;
}
.grid-row {
  display: flex;
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
  height: 800px;
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
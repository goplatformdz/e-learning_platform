<template>
  <div class="blog-page">
    <div class="start-learning">
      <div class="text1">
        <h3>By Themadbrains in</h3>
        <h4>inspiration</h4>
      </div>
      <h1>
        Why Swift UI Should Be on the <br />
        Radar of Every Mobile <br />
        Developer
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
        sed do eiusmod tempos Lorem ipsum dolor sitamet, <br />
        consectetur adipiscing elit, sed do eiusmod tempor
      </p>
      <button class="btn-start">Start learning now</button>
      <div class="img"><img src="@/assets/computer.png" alt="" /></div>
    </div>
    <div class="read-blog">
      <h5>Reading blog list</h5>
      <div class="blogcard1">
        <blogCard1
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :img="item.img"
        />
      </div>
    </div>

    <div class="related">
      <h4>Related Blog</h4>
      <p>See all</p>
      <div class="relatedCard">
        <relatedCard v-for="index in 2" :key="index" />
      </div>
    </div>
   <recomanded />
  </div>
</template>



<script>
import blogCard1 from "@/components/blogCard.vue";
import relatedCard from "@/components/relatedCard.vue";
import recomanded from "../components/recomanded.vue";
export default {
  name: "blog",
  components: {
    blogCard1,
    relatedCard,
    recomanded,
  },

};
</script>
<style  scoped>
.kcard {
  margin-top: 30px;
  display: flex;
  gap: 30;
  padding-left: 50px;
}
.marketing {
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-rows: 1fr 9fr;
}
.marketing h4 {
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
.marketing p {
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

.relatedCard {
  margin-top: 30px;
  display: flex;
  margin-left: 12%;
  width: 80%;
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}
.related {
  width: 100%;
  height: 700px;
  background-color: rgb(197, 220, 245);
  margin-top: 50px;
  display: grid;
  grid-template-rows: 1fr 8fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
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
.blogcard1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  margin-left: 60px;
}
.read-blog {
  width: 100%;
  height: 360px;
  display: grid;
  grid-template-rows: 1fr 9fr;
  gap: 0px;
}
h5 {
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.img {
  margin-top: 40px;
  margin-left: 35px;
  height: 80%;
  width: 80%;
  grid-column: 2;
  grid-row-start: 1; /* Start at the second row */
  grid-row-end: 5;
}
.start-learning {
  margin-top: 80px;
  width: 100%;
  height: 460px;
  background-color: rgb(197, 220, 245);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr 2fr; /* Four rows */
  gap: 0px;
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
.text1 {
  grid-column: 1;
  grid-row: 1;
  left: 0;
  margin-left: 60px;
  margin-top: 15px;
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
  line-height: 180%; /* 43.2px */
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
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}
img {
  width: 100%;
  height: 100%;
}
</style>
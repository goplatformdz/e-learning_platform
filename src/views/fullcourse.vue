<template>
  <div class="container1">
    <div class="lessonscont">
      <div class="back">
        <fa :icon="['fas', 'arrow-left']" style="color: #ffffff" />
      </div>
      <h3>Lessons</h3>
      <button class="lessonb" v-for="index in 10" :key="index">
        <fa :icon="['fas', 'book-open']" style="color: #252641" />
        <h4 class="h3">lesson 01:lesson name</h4>
      </button>
    </div>
    <div class="lessonvideo">
      <div class="tittle">
        <h2>Learn about Adobe XD & Prototyping</h2>
        <h4>Introduction about XD</h4>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c-6AaS7997w?si=oDyuJdq0SPvRf6wg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h3 class="tit">O6 Super Coins on the way</h3>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmod
      </p>

      <h3 class="tit">Who this course is for?</h3>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmod
      </p>

      <h3 class="tit">Archievable</h3>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmod
      </p>
    </div>
  </div>
</template>

<script>
import lessonb from "@/components/lessonbotton.vue";
export default {
  componenet: {
    lessonb,
  },
};
</script>

<style scoped>
.text {
  margin-left: 5%;
  margin-right: 5%;
  color: #696984;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
}

.tit {
  color: #252641;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 5%;
  margin-top: 30px;
}
.tittle h2 {
  color: #FFF;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.tittle h4 {
  color: #FFF;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.tittle {
  width: 100%;
  height: 90px;
  background-color: rgba(73, 187, 189, 1);
  text-align: center;
}
iframe {
  margin-left: 5%;
  margin-top: 40px;
  width: 90%;
  height: 500px;
  border-radius: 20px;
}
.lessonb {
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  width: 90%;
  height: 45px;
  border-radius: 12px;
  background: rgba(244, 140, 6, 0.3);
  text-align: left;
}
.h3 {
  color: #252641;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline;
  margin-left: 10px;
}
.lessonvideo {
  width: 100%;
  background: #9DCCFF;
}
.container1 {
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.lessonscont {
  width: 100%;
  height: 700px;
}
.back {
  width: 30px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #49BBBD;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  border-radius: 5px;
}
.lessonscont h3 {
  color: #252641;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 20px;
  margin-top: 10px;
}
</style>
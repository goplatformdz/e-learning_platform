<template>
  <div class="Bdetail">
    <div class="imageblog">
      <img src="@/assets/blogD.png" alt="" />
    </div>
    <div class="blogtext">
      <h3>Why Swift UI Should Be on the Radar of Every Mobile Developer</h3>
      <p>
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place. TOTC is a platform that allows educators
        to create online classes whereby they can store the course materials
        online; manage assignments, quizzes and exams; monitor due dates; grade
        results and provide students with feedback all in one place. TOTC is a
        platform that allows educators to create online classes whereby they can
        store the course materials online; manage assignments, quizzes and
        exams; monitor due dates; grade results and provide students with
        feedback all in one place. TOTC is a platform that allows educators to
        create online classes whereby they can store the course materials
        online; manage assignments, quizzes and exams; monitor due dates; grade
        results and provide students with feedback all in one place. TOTC is a
        platform that allows educators to create online classes whereby they can
        store the course materials online; manage assignments, quizzes and
        exams; monitor due dates; grade results and provide students with
        feedback all in one place. TOTC is a platform that allows educators to
        create online classes whereby they can store the course materials
        online; manage assignments, quizzes and exams; monitor due dates; grade
        results and provide students with feedback all in one place...
      </p>
      <div class="btncats">
        <button class="btncat" v-for="index in 4" :key="index">
          affordable
        </button>
      </div>
      <center><div class="line"></div></center>
      <div class="bloger">
        <div class="blogerimg"><img src="@/assets/teengirl1.png" alt="" /></div>
        <div class="writen">
          <text>Written by</text>
          <h2>lina</h2>
        </div>
        <button class="follow">follow</button>
      </div>
    </div>
    <div class="related1">
      <h4 class="h4">Related Blog</h4>
      <p class="p">See all</p>
      <div class="relatedCard1">
        <relatedCard v-for="index in 2" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import relatedCard from "@/components/relatedCard.vue";
export default {
  name: "blogdetail",
  components: {
    relatedCard,
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
  margin: 0;
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
  width: 70px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.blogerimg {
  margin-top: 30px;
  margin-left: 60px;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  background: url(<path-to-image>) lightgray -16.806px -5.738px / 125% 161.839% no-repeat;
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
  line-height: 180%; /* 79.2px */
}
.blogtext p {
  margin-left: 60px;
  color: #696984;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 43.2px */
  letter-spacing: 0.48px;
}
.imageblog {
  margin-top: 80px;
  width: 100%;
  height: 450px;
}
</style>
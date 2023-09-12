<template>
  <div class="lessoncard">
    <div class="img"><img src="@/assets/computer.png" alt="" /></div>
    <h5>AWS Certified Solutions Architect</h5>
    <div class="circ">
      <img src="@/assets/teengirl1.png" alt="" />
      <h6>Lina</h6>
    </div>
    <div class="percent">
      <div class="per"></div>
    </div>
    <p>Lesson 5 of 7</p>
  </div>
</template>

<script>
export default {
  name: "lessons",
};
</script>

<style scoped>
.percent {
  border-radius: 5px;
  background: #D9D9D9;
  width: 93%;
  height: 8px;
  flex-shrink: 0;
  margin-left: 3.5%;
  margin-top: 5px;
  grid-row: 4;
}

.per {
  width: 70%;
  height: 8px;
  border-radius: 5px;
  background: #49BBBD;
}

.lessoncard p {
  grid-row: 5;
  grid-column: 1;
  color: rgba(0, 0, 0, 0.5);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  margin-left: 315px;
  margin-top: 5px;
}

.lessoncard {
  margin-right: 20px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px rgba(47, 50, 125, 0.1);
  width: 400px;
  height: 350px;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 7fr 1.5fr 1.5fr 1fr 1fr;
}

.lessoncard .img {
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 3.5%;
  width: 93%;
  height: 195px;
  background-color: chocolate;
  grid-row: 1;
  grid-column: 1;
}

.lessoncard h5 {
  padding: 0;
  margin-bottom: 0;
  margin-top: 5px;
  margin-left: 18px;
  color: #252641;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
  grid-row: 2;
  grid-column: 1;
}

.circ {
  margin-left: 18px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #D9D9D9;
  display: flex;
  grid-row: 3;
  grid-column: 1;
}

.circ h6 {
  color: #000;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.36px;
  margin-top: 9px;
  margin-left: 10px;
}</style>
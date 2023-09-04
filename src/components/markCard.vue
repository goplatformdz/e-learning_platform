<template>
  <div class="markcard">
    <div class="img">
      <img src="" alt="" />
    </div>
    <div class="m3d">
      <p class="d">Design</p>
      <p class="m3">3 Month</p>
    </div>
    <h4>
      AWS Certified solutions <br />
      Architect
    </h4>
    <h5>
      Lorem ipsum dolor sit amet, <br />
      consectetur adipising elit, sed do <br />
      eiusmod tempor
    </h5>
    <div class="circle1">
      <img src="@/assets/teengirl1.png" alt="" />
      <h6>lina</h6>
      <h1>$80</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "markCard1",
};
</script>

<style>
.circle1 h1 {
  margin-top: 3px;
  margin-left: 120px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: 0.48px;
}
.circle1 h6 {
  margin-top: 7px;
  margin-left: 10px;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #D9D9D9;
  display: flex;
}
.markcard h5 {
  margin-top: 3px;
  margin-left: 17px;
  color: #696984;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 32.4px */
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
}
.markcard p {
  color: #696984;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 25.2px */
  letter-spacing: 0.28px;
}
.markcard {
  width: 250px;
  height: 380px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px
    rgba(47, 50, 125, 0.1);
  display: grid;
  grid-template-rows: 4fr 1fr 1.5fr 2fr 1.5fr;
  grid-template-columns: 1fr;
  margin-right: 72px;
}
.markcard:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  transition: ease-in-out 0.2s;
}
.markcard .img {
  margin-top: 12px;
  margin-left: 5%;
  width: 90%;
  height: 150px;
  grid-row: 1;
  border-radius: 20px;
  background-color: #171B41;
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
}
</style>
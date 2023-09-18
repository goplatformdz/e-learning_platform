<template>
  <div class="card1">
    <router-link to="/blogdetail">
      <div class="img">
        <img src="@/assets/redhair2.png" alt="" />
      </div>
      <h4>
        Class adds $30 million to its balance sheet for a <br />
        Zoom-friendly edtech solution
      </h4>
      <div class="circle">
        <img src="@/assets/teengirl1.png" alt="" />
        <h3>lina</h3>
      </div>
      <p>
        Class, launched less than a year ago by Blackboard co-founder <br />
        Michael Chasen, integrates exclusively...
      </p>
      <p><a href="">read more</a></p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scooped>
a {
  text-decoration: none;
}
.circle {
  width: 40px;
  height: 40px;
  background-color: #D9D9D9;
  border-radius: 50%;
  margin-left: 25px;
  margin-top: 5px;
  display: flex;
}
.circle h3 {
  color: #000;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;
  margin-left: 10px;
  margin-top: 8px;
}
.card1 p {
  color: #696984;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  letter-spacing: 0.4px;
  margin-left: 15px;
}

.card1 {
  margin-right: 150px;
  width: 450px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px
    rgba(47, 50, 125, 0.1);
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr 1fr;
}
.card1:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  transition: ease-in-out 0.1s;
}
.card1 h4 {
  color: #252641;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%; /* 46.8px */
  grid-row: 2;
  margin-left: 15px;
  margin-top: 5px;
}
.img {
  grid-row: 1;
  width: 420px;
  height: 220px;
  margin-top: 20px;
  margin-left: 15px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
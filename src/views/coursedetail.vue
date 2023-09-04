<template>
  <div class="coursedetailpage">
    <div class="imageblog">
      <img src="@/assets/blogD.png" alt="" />
    </div>
    <div class="coursedetails">
      <div>
        <div class="overviewcont">
          <button class="overview" v-for="index in 4" :key="index">
            Overview
          </button>
        </div>
        <div class="rate"></div>
      </div>
      <div class="descripcourse"></div>
    </div>

    <div class="recomended">
      <h4 class="m">Marketing Articles</h4>
      <p class="s">See all</p>
      <div class="Rcard">
        <markCard v-for="index in 4" :key="index" />
      </div>
    </div>

    <div class="videocont">
      <div class="textvid">
        <h4>
          Everything you can do in a physical <br />
          classroom,
        </h4>
        <h3>you can do with TOTC</h3>
        <p>
          TOTC’s school management software helps traditional <br />
          and online schools manage scheduling, attendance, <br />
          payments and virtual classrooms all in one secure cloud- <br />
          based system.
          <br />
          <br />
          <a href="">learn more</a>
        </p>
      </div>
      <div class="imgvid">
        <div class="shape11"></div>
        <div class="shape22"></div>
        <img class="imgvid1" src="@/assets/teacher.png" alt="" />
      </div>
    </div>
    <div class="topoffre">
      <h4  >Top  Education offers and deals are listed here</h4>
      <p >See all</p>
      <div class="offrecont">
       <div class="offre" v-for="index in 3" :key="index">
         
          <img src="@/assets/redhair3.png" alt="">
       </div>
     </div>



    </div>








  </div>
</template>

<script>
import markCard from "@/components/markCard.vue";
export default {
  name: "coursedetail",
  components: {
    markCard,
  },
};
</script>

<style>
.topoffre h4 {
  padding-top: 15px;
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}
.topoffre p {
  margin-top: 0px;
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





img{ 
  width:100%;
  height:100%;
}
.topoffre{
  height:500px;
  grid-template-rows:1fr 9fr ;
}
.offre{
  background-color:blueviolet;
width: 370px;
height: 320.419px;
flex-shrink: 0;
border-radius: 20px;
margin-right:40px;
}
.offrecont{
  margin-top:30px;
  margin-left:60px;
display:flex;
grid-row:2;
}
.shape22 {
  position: absolute;
  margin-top: 210px;
  margin-left: 360px;
  width: 171px;
  height: 171px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #33EFA0;
  z-index: -1;
}
.shape11 {
  width: 108px;
  height: 108px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #23BDEE;
  position: absolute;
  z-index: -1;
}
.imgvid1 {
  margin-left: 15px;
  margin-top: 15px;
}
.textvid {
  margin-top: 50px;
  margin-left: 70px;
}
.imgvid {
  width: 500px;
  height: 350px;
}
.textvid p {
  color: #696984;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 43.2px */
  letter-spacing: 0.48px;
}
.textvid h3 {
  color: #00CBB8;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  display: inline;
}
.textvid h4 {
  color: #2F327D;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 57.6px */
  display: inline;
}
.videocont {
  margin-top: 120px;
  margin-left: 60px;
  width: 90%;
  height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.descripcourse {
  position: absolute;
  top: 280px;
  left: 850px;
  width: 350px;
  height: 855px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 20px solid #FFF;
  background: rgba(157, 204, 255, 0.3);
  grid-column: 2;
  margin-bottom: 700px;
}
.overviewcont {
  height: 100px;
  margin-left: 60px;
  margin-top: 30px;
  grid-column: 1;
}
.coursedetails {
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: 3fr 2fr;
}
.overview {
  margin-right: 30px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);
  width: 140px;
  height: 53px;
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.4);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.rate {
  margin-left: 60px;
  width: 650px;
  height: 500px;
  border-radius: 20px;
  background: rgba(157, 204, 255, 0.3);
  grid-column: 1;
}
</style>
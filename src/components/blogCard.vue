<template>
  <div class="card">
    <div class="blogtitle">
      <center>{{ title }}</center>
    </div>
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  name: "blogCard1",
  data() {
    return {};
  },
  props: ["blogData"],
};
</script>

<style scooped>
.blogtitle {
  position: absolute;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  width: 156px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
  z-index: 2;
  margin-left: 50px;
  margin-top: 170px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.card {
  width: 256px;
  height: 227px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #171B41;
  margin: 0%;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  transition: ease-in-out 0.2s;
}

img {
  width: 100%;
  height: 100%;
}</style>
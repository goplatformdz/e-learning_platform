<template>
  <div class="main">
    <center>
      <div class="iconcateg"></div>
      <h1>Design</h1>
      <p>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit, <br />
        sed do eiusmodadipiscing elit, <br />
        sed do eiusmod
      </p>
    </center>
  </div>
</template>

<script>
export default {
  name: "categCard",
};
</script>

<style scooped>
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
  margin-top: 50px;
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;
}
.iconcateg {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  background-color: rgba(73, 187, 189, 0.3);
  grid-row: 1;
}
.main {
  margin-top: 30px;
  margin-left: 60px;
  width: 250px;
  height: 280px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 30px 60px 0px rgba(47, 50, 125, 0.1);
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.main:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  transition: ease-in-out 0.1s;
}
</style>
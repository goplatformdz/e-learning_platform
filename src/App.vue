<template>
  <navbar />
  <router-view />
  <footerr />
</template>

<script>
import navbar from "./components/navbar.vue";
import footerr from "./components/footer.vue";

export default {
  name: "app",
  components: {
    navbar,
    footerr,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.max-width {
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
}

button {
  border: 0;
}

h1 {
  color: #FFF;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline;
}
</style>
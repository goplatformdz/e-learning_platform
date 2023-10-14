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
</style>
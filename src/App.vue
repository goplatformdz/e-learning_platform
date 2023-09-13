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

<style></style>
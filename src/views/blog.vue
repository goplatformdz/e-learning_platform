<template>
  <div class="blog-page">
    <navbar />
    <footerr />
  </div>
</template>



<script>
import navbar from "@/components/navbar.vue";
import footerr from "@/components/footer.vue";
export default {
  name: "blog",
  components: {
    navbar,
    footerr,
  },
};
</script>
<style  scoped>
.blog-page {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
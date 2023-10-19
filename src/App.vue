<template>
  <navbar />
  <router-view />
  <footerr />
</template>

<script>
import navbar from "./components/navbar.vue";
import footerr from "./components/footer.vue";
import { useAuthStore } from "./store/auth";
import { watch } from "vue"; // Import the 'watch' function from Vue


export default {
  name: "app",
  components: {
    navbar,
    footerr,
  },
  setup() {
    const auth = useAuthStore();

    // Watch both auth.openLogin and auth.openSignup
    watch(
      () => auth.openModal,
      (newOpenModal, oldOpenModal) => {
        if (newOpenModal) {
          document.body.classList.add("no-scroll");
          console.log(oldOpenModal)
        } else {
          document.body.classList.remove("no-scroll");
        }
      }
    );

    return { auth };
  }
}
</script>

<style>
.no-scroll {
  overflow-y: hidden;
}


body {
  overflow-x: hidden;
}
</style>
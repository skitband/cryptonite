<template>
  <div class="home">
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Main,Footer
  },
};
</script>

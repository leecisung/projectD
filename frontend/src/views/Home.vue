<template>
  <Header />
    <div class="inner">
        <Feeds/>
    </div>
  <Footer />
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Feeds from "../components/Feeds";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Feeds,
},
  watch: {
    $route() {
      this.closeAllHeaderModals();
    },
  },
  methods: {
    closeAllHeaderModals() {
      this.$store.commit("header/closeModals");
    },
  },
};
</script>

<style scoped>
.inner{padding:50px 0;}
</style>

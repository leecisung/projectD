<template>
  <div id="view-wrap" class="view-wrap">
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
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

<style>
#view-wrap {position: relative;width:100%;min-width:360px;height:100%;background-color:#fff;}
.inner{margin:0 auto;width:100%;max-width:1024px;height:100%;box-sizing:border-box;background-color:#fff;}  
</style>

<template>
  <div class="highlights">
    <Highlight v-for="circle in 10" :key="circle" />
  </div>
</template>

<script>
import Highlight from './Highlight'
export default {
  name: 'Highlights',
  components: {
    Highlight
  }
}
</script>

<style scoped>
  .highlights{display:flex;margin:0 auto;margin-bottom:45px;max-width:680px;width:95%;overflow-x:scroll;}
</style>

<template>
  <div class="template">
    <div class="guide">
        <img src="../../../static/images/guide_01.jpg" alt="">
        <img src="../../../static/images/guide_02.jpg" alt="">
        <img src="../../../static/images/guide_03.jpg" alt="">
        <img src="../../../static/images/guide_04.jpg" alt="">
        <img src="../../../static/images/guide_05.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .guide {
    width: 100%;
    background-color: #262834;
}
.template .guide img {
    width: 100%;
}
</style>

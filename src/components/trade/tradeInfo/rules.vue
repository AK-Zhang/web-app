<template>
  <div class="template">
    <div class="img_box">
      <img src="../../../assets/images/rule-1.png" alt="">
      <img src="../../../assets/images/rule-2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "rules",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img_box,
.img_box img {
  width: 100%;
}
</style>

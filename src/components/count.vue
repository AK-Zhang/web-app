<template>
  <div class="template">
    <canvas id="paint">
      your browser does not support the canvas tag
    </canvas>
  </div>
</template>

<script>
import "../store/store";
import "../store/count";

export default {
  name: "aboutUs",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paint {
  width: 100%;
  height: 250px;
  background-color: #fff;
}
</style>

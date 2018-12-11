<template>
  <div class="template">
    <div class="myNews">
      <div class="myNews_box">
        {{msg}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      msg: "暂无消息"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myNews_box {
  text-align: center;
  height: 500px;
  line-height: 500px;
}
</style>

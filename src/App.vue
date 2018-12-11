<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <div class="template alert_box" v-if="isShow">

    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from "./components/footer-nav/footer-nav.vue";
import Header from "./components/header/header.vue";
export default {
  name: "App",
  components: {
    BottomNav,
    Header
  },
  data() {
    return {
      isShow: true
    };
  }
  // watch: {
  //   $route: function(newroute, oldroute) {
  //     var path = newroute.path.toLowerCase();
  //     if (path == "/trade/tradeInfo") {
  //       setInterval(i);
  //     } else {
  //       window.clearInterval(i);
  //     }
  //   }
  // }
};
</script>

<style>
#app {
  width: 100%;
  max-width: 768px;
  font-family: "MicrosoftYaHei";
  margin: 60px auto 45px;
  position: relative;
}
#app .template {
  max-width: 768px;
}
template {
  height: 100%;
}
.mint-toast .mint-toast-text {
  color: #fff;
}
</style>

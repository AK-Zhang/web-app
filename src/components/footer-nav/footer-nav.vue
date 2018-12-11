<template>
  <div class="template">
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="javascript:;">
        <span class="mui-icon iconfont icon-zhuye1"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="javascript:;">
        <span class="mui-icon mui-icon-extra mui-icon-extra-prech"></span>
        <span class="mui-tab-label">询价</span>
      </a>
      <a class="mui-tab-item" href="javascript:;">
        <span class="mui-icon mui-icon-extra mui-icon-extra-gold"></span>
        <span class="mui-tab-label">交易</span>
      </a>
      <a class="mui-tab-item" href="javascript:;">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>

<script>
// import '../../../static/mui/js/mui.min.js'
export default {
  name: "bottom_nav",
  data() {
    return {
      msg: "欢迎来到赢在期权！",
      indexs: [0, 1, 2, 3]
    };
  },
  watch: {
    $route: function(newroute, oldroute) {
      var path = newroute.path.toLowerCase();
      if (path == "/indexpage") {
        //$(".mui-bar > a").removeClass("mui-active");
        //$(".mui-bar > a:eq(0)").addClass("mui-active");
      } else if (path == "/referprice") {
        //$(".mui-bar > a").removeClass("mui-active");
        //$(".mui-bar > a:eq(1)").addClass("mui-active");
      } else if (path == "/trade/home" || path == "/trade/position") {
        $(".mui-bar > a").removeClass("mui-active");
        $(".mui-bar > a:eq(2)").addClass("mui-active");
      } else if (
        path == "/mine" ||
        path == "/mine/myNews" ||
        path == "/mine/setting" ||
        path == "/mine/mygold"
      ) {
        $(".mui-bar > a").removeClass("mui-active");
        $(".mui-bar > a:eq(3)").addClass("mui-active");
      } else {
        $(".mui-bar > a").removeClass("mui-active");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .template {
    max-width: 590px;
} */
.template .mui-bar {
  background-color: #262834;
  border-top: 0px;
  box-shadow: none;
  max-width: 768px;
  margin: 0 auto;
}
.template .mui-bar .mui-tab-item .mui-icon,
.template .mui-bar .mui-tab-item .mui-tab-label {
  color: #555763;
}
.template .mui-bar .mui-tab-item.mui-active .mui-icon,
.template .mui-bar .mui-tab-item.mui-active .mui-tab-label {
  color: #c4c7d3;
}
</style>
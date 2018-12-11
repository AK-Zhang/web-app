<template>
  <div class="template">
    <!-- <header>
        <div class="head_title">赢在期权</div>
        <div class="btn_back_box">
          <button class="btn_back iconfont icon-zuojiantou" @click="backto">返回</button>
        </div>
    </header> -->
    <header id="header" class="mui-bar">
      <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
      <h1 class="mui-title">{{title}}</h1>
      <button class="mui-btn mui-btn-link mui-btn-nav mui-pull-left" v-if="isshow" @click="backto">
        <span class="mui-icon mui-icon-left-nav"></span>
        返回
      </button>
    </header>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      isshow: false,
      title: "期权"
    };
  },
  beforeCreate() {
    // setTimeout(function(){
    // 		var haha = getgoodsObject();
    // 	var num = 0;
    // 	for (var key in haha){
    // 		num += haha[key];
    // 	}
    // 	console.log(num);
    // 	vm.$emit(COUNTSTR, num);
    // 	},500)
  },
  methods: {
    backto: function() {
      if (this.$route.path.toLowerCase() == "/login") {
        this.$router.go(-2);
      } else {
        this.$router.go(-1);
      }
    }
  },
  watch: {
    $route: function(newroute, oldroute) {
      var path = newroute.path.toLowerCase();
      //console.log(path.slice(1, 16));
      if (path == "/indexpage") {
        this.isshow = false;
        this.title = "期权";
      } else if (path == "/referprice") {
        this.isshow = true;
        this.title = "询价";
      } else if (path == "/mine") {
        this.isshow = true;
        this.title = "我的";
      } else if (path == "/trade/home") {
        this.isshow = true;
        this.title = "交易";
      } else if (path == "/trade/position") {
        this.isshow = true;
        this.title = "持仓";
      } else if (path == "/recharge") {
        this.isshow = true;
        this.title = "充值";
      } else if (path == "/help") {
        this.isshow = true;
        this.title = "帮助说明";
      } else if (path == "/lastNews") {
        this.isshow = true;
        this.title = "最新交易";
      } else if (path == "/optimalTrade") {
        this.isshow = true;
        this.title = "最优交易";
      } else if (path == "/newsInfo") {
        this.isshow = true;
        this.title = "资讯详情";
      } else if (path == "/news/newsList") {
        this.isshow = true;
        this.title = "资讯";
      } else if (path == "/login") {
        this.isshow = true;
        this.title = "登陆";
      } else if (path == "/lastnews") {
        this.isshow = true;
        this.title = "最新交易";
      } else if (path == "/optimaltrade") {
        this.isshow = true;
        this.title = "最优交易";
      } else if (path.slice(1, 16) == "trade/tradeinfo") {
        this.isshow = true;
        this.title = path.slice(24, 30);
      } else {
        this.isshow = true;
        this.title = "期权";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  lastNews-->
<style scoped>
header {
  background-color: #1c1c20;
  color: #ffffff;
  padding: 10px;
  height: 60px;
  max-width: 768px;
  margin: 0 auto;
}
header::before {
  box-shadow: 0;
}
.mui-title,
.mui-btn,
.mui-icon,
.mui-btn:focus,
.mui-icon:focus {
  color: #ffffff;
}
.mui-bar {
  top: 0;
  box-shadow: none;
}
.mui-bar .mui-btn-link {
  color: #ffffff;
}
</style>

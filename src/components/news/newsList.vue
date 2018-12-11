<template>
  <div class="template">
    <div class="tabs clear">
      <ul>
        <li class="active" @click="tabsChange (indexs[0])">
          <span>要闻</span>
        </li>
        <li @click="tabsChange (indexs[1])">
          <span>操盘必读</span>
        </li>
        <li @click="tabsChange (indexs[2])">
          <span>行业研究</span>
        </li>
        <li @click="tabsChange (indexs[3])">
          <span>新闻快讯</span>
        </li>
        <li @click="tabsChange (indexs[4])">
          <span>全球股市</span>
        </li>
      </ul>
    </div>
    <div class="optimal_trade">
      <ul>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="optimal_trade hide">
      <ul>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="optimal_trade hide">
      <ul>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="optimal_trade hide">
      <ul>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="optimal_trade hide">
      <ul>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="trade_detail">
            <router-link to="/newsInfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">午间看盘:沪指震荡上行涨0.17% 工业互联网再爆发</h3>
                <p class="news_resource">来源：网易财经&nbsp;&nbsp;2018-03-19&nbsp;&nbsp;11:45:41</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common";
import { Toast } from "mint-ui";

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      hide: false,
      indexs: [0, 1, 2, 3, 4],
      Abstract: []
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    tabsChange(index) {
      $(".tabs > ul > li").removeClass("active");
      $(".tabs > ul > li:eq(" + index + ")").addClass("active");
      $(".optimal_trade").addClass("hide");
      $(".optimal_trade:eq(" + index + ")").removeClass("hide");
    },
    getNews(type) {
      var url = common.apidomain + "/api/News/GetNewsListByType";
      this.$api.post(url, { NewsType: 2 }, response => {
        if (response.data.Code == 0) {
          this.Abstract = response.data.Data;
        } else {
          Toast(response.data.Msg);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*指数样式*/
.template .tabs,
.template .optimal_trade {
  width: 100%;
  padding: 0 15px;
  background-color: #1c1f26;
}
.template .tabs {
  background-color: #262834;
  position: fixed;
}
.template .tabs ul {
  width: 100%;
  float: left;
  display: flex;
  padding: 5px 0px;
}
.template .tabs ul li {
  width: 20%;
  text-align: center;
  padding: 5px;
}
.template .tabs ul li.active span {
  position: relative;
  color: #ff302f;
}
.template .tabs ul li.active span::after {
  content: "";
  width: 60px;
  height: 3px;
  background-color: #ff302f;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.template .tabs .more {
  line-height: 40px;
  width: 30%;
  float: right;
  text-align: right;
  cursor: pointer;
}
.template .tabs .more span {
  font-family: "Simsun";
  font-size: 13px;
  font-weight: 700;
  position: relative;
}
.template .tabs .more span::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 20px;
  background-color: #444;
  top: -3px;
  left: -15px;
}
.template .optimal_trade {
  padding: 0px;
}
.template .optimal_trade ul li {
  border-top: 1px solid #333;
  padding: 8px 15px;
  display: flex;
  font-size: 14px;
}
.template .optimal_trade ul li .trade_detail,
.template .optimal_trade ul li .trade_detail a,
.template .optimal_trade ul li .trade_detaila .trade_detail_main {
  width: 100%;
}
.template .optimal_trade ul li .trade_detail .trade_detail_main {
  display: flex;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_main_left,
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_right {
  width: 40%;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_middle {
  width: 20%;
}
.template .optimal_trade ul li .trade_detail p {
  color: #7b7f8a;
  font-size: 13px;
  margin-bottom: 0px;
}
.template .optimal_trade ul li .trade_detail h3 {
  color: #ff302f;
  font-size: 23px;
  padding-bottom: 5px;
}
.template .optimal_trade ul li .trade_detail p span {
  color: #c4c7d3;
  font-size: 15px;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_main_left
  p
  span {
  padding-right: 5px;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_middle,
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_right {
  text-align: right;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_middle
  p,
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_right
  p {
  font-size: 13px;
}
.template .optimal_trade ul li .trade_detail .news_box {
  display: block;
  padding: 3px 0px;
}
.template .optimal_trade ul li .trade_detail .news_title {
  font-size: 13px;
  color: #c4c7d3;
  padding-bottom: 0px;
  line-height: 20px;
}
.template .optimal_trade ul li .trade_detail .news_resource {
  padding-bottom: 4px;
  font-size: 12px;
}
.hide {
  display: none;
}
.template .optimal_trade {
  padding-top: 40px;
}
</style>

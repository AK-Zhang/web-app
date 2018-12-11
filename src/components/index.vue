<template>
  <div class="template">
    <div class="banner">
      <img src="../assets/images/banner_01.jpg" alt="赢在期权">
    </div>
    <div class="contents">
      <div class="contents_data">
        <ul class="clear">
          <li>
            <h2>3280.95</h2>
            <div>
              <span>-0.16</span>
              <span>-0.01%</span>
            </div>
            <h3>上证指数</h3>
          </li>
          <li>
            <h2>10581.8</h2>
            <div>
              <span>-39.69</span>
              <span>-0.39%</span>
            </div>
            <h3>深证指数</h3>
          </li>
          <li>
            <h2>3280.95</h2>
            <div>
              <span>-9.99</span>
              <span>-0.55%</span>
            </div>
            <h3>创业板指</h3>
          </li>
        </ul>
      </div>
      <div class="contents_line"></div>
      <div class="contents_nav">
        <ul>
          <li>
            <router-link to="/referprice">
              <img src="../../static/images/grid_01.png">
              <h3>一键询价</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/mine/myoptional">
              <img src="../../static/images/grid_02.png">
              <h3>我的自选</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/user/recharge">
              <img src="../../static/images/grid_03.png">
              <h3>充值中心</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/guide">
              <img src="../../static/images/grid_04.png">
              <h3>新手指引</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabs clear">
      <ul>
        <li class="active" @click="tabslChange()">
          <span>最新动态</span>
        </li>
        <li @click="tabsrChange()">
          <span>最优交易</span>
        </li>
      </ul>
      <div class="more">
        <router-link to="/lastNews">
          <span>
            更多 >
          </span>
        </router-link>
      </div>
      <div class="more hide">
        <router-link to="/optimalTrade">
          <span>
            更多 >
          </span>
        </router-link>
      </div>
    </div>
    <!-- 最新动态 -->
    <div class="latest_trendst" id="latest_trendst">
      <ul>
        <li v-for="item in list">
          <div class="dynamic_code">
            <h3>{{item.TargetName}}</h3>
            <span>{{item.TargetCode}}</span>
          </div>
          <div class="dynamic_price">
            <h2>{{item.TradeType}}</h2>
            <span>认购</span>
          </div>
          <div class="dynamic_detail">
            <h3><img src="../../static/images/profile.png">{{item.CreatorName}}</h3>
            <span>{{item.CreateTime | datefmt('MM/DD')}}</span>
            <span>{{item.CreateTime | datefmt('HH:mm')}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 最优交易 -->
    <div class="optimal_trade" id="optimal_trade">
      <ul>
        <li v-for="item in list_best">
          <div class="medal"></div>
          <div class="trade_detail">
            <router-link v-bind="{to:'/trade/tradeInfo'+item.TargetCode+item.TargetName}">
              <div class="trade_detail_main">
                <div class="trade_detail_main_left">
                  <p>收益率</p>
                  <h3>{{item.ProfitPercent.toFixed(2)}}%</h3>
                  <p>
                    <span>{{item.TargetName}}</span>{{item.TargetCode}}</p>
                </div>
                <div class="trade_detail_middle">
                  <p>买价</p>
                  <p>
                    <span>{{item.NominalPrice}}</span>
                  </p>
                  <p>卖价</p>
                  <p>
                    <span>{{item.ExercisePrice}}</span>
                  </p>
                </div>
                <div class="trade_detail_right">
                  <p>盈亏</p>
                  <p>
                    <span>{{item.Profit}}</span>
                  </p>
                  <p>数量</p>
                  <p>
                    <span>{{item.ExerciseCount}}</span>
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>

    <div class="tabs-new clear">
      <ul>
        <li>
          <span>资讯</span>
        </li>
      </ul>
      <div class="more">
        <router-link to="/news/newsList">
          <span>
            更多 >
          </span>
        </router-link>
      </div>
    </div>
    <div class="optimal_trade">
      <ul>
        <li v-for="item in list_news">
          <div class="trade_detail">
            <router-link to="/newsinfo">
              <div class="trade_detail_main news_box">
                <h3 class="news_title">{{item.Title}}</h3>
                <p class="news_resource">来源：{{item.Source}}&nbsp;{{item.CreateTime | datefmt("YYYY-MM-DD HH:mm:ss")}}</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="riskTip" v-show="isShow">
      <div class="riskTip_box">
        <div class="riskTip_title">
          风险提示书
        </div>
        <div class="riskTip_contents">
          <h3>尊敬的用户：</h3>
          <p>当您进行期权交易的时候，可能获得较高的投资收益，但同时也存在着较大的投资风险。为了使您更好地了解其中的风险，请在交易前仔细阅读以下风险揭示书。且除以下揭示的风险外还有其他的外部风险，均需要用户自行承担，平台不承担相关责任：</p>
          <p>
            <span>1、宏观经济风险：</span>国家宏观经济形势的变化以及国际经济环境和其他证券市场的变化，可能引起证券市场的波动，使您存在亏损的可能，您将承担由此可能造成的损失。</p>
          <p>
            <span>2、政策监管风险：</span>因宏观政策、监管导向、行业政策、地区发展政策等因素引起的无法实现交易合作的风险。</p>
          <p>
            <span>3、技术风险：</span>由于本平台属于网络技术服务，其中交易通讯、交易下单、行情揭示等都是通过电子通讯技术和网络技术来实现的，这些技术存在着被网络黑客和计算机病毒攻击的可能，同时通讯技术、电脑技术和相关软件存在缺陷的可能，这些风险均有可能造成服务中断或者延迟。</p>
          <p>
            <span>4、不可抗力因素导致的风险：</span>不可抗力因素包括但不限于以下情形：平台系统停机维护；平台所依赖的通讯设备出现故障不能进行数据传输；因台风、地震、海啸、洪水 、停电、战争、恐怖袭击等不可抗力之因素，造成本平台系统障碍不能执行业务。</p>
          <p>
            <span>5、其他风险：</span>由于您密码失密、操作不当、投资决策失误等原因可能会使您发生亏损。</p>
          <div>
            <p>
              <span>温馨提示：</span>市场有风险，入市须谨慎！如果用户不同意本协议的任意内容，或者无法准确理解以上风险及可能存在的其他风险，请不要进行后续操作。</p>
            <p>以上《风险揭示书》本人已阅读并完全理解，愿意自行承担投资市场的各种风险。</p>
          </div>
        </div>
        <div class="riskAffirm">
          我已阅读并同意
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../kits/common.js";
import { Toast } from "mint-ui";

export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      hide: false,
      isShow: true,
      list: [], //最新交易
      list_best: [], //最优交易
      list_news: [] //新闻资讯
    };
  },
  created() {
    this.getOrder(); //最新交易
    this.getBestOrder(); //最优交易
    this.getNews(); //获取新闻
    //this.getExponent();
  },
  methods: {
    tabsrChange() {
      $(".tabs > ul > li:eq(1)").addClass("active");
      $(".tabs > ul > li:eq(0)").removeClass("active");
      $("#optimal_trade").css("display", "block");
      $("#latest_trendst").css("display", "none");
      $(".tabs .more:eq(0)").addClass("hide");
      $(".tabs .more:eq(1)").removeClass("hide");
    },
    tabslChange() {
      $(".tabs > ul > li:eq(0)").addClass("active");
      $(".tabs > ul > li:eq(1)").removeClass("active");
      $("#optimal_trade").css("display", "none");
      $("#latest_trendst").css("display", "block");
      $(".tabs .more:eq(1)").addClass("hide");
      $(".tabs .more:eq(0)").removeClass("hide");
    },
    getOrder() {
      var url = common.apidomain + "/api/Order/GetLatestOrders";
      var postData = {
        PageNo: 0,
        PageSize: 5,
        PageCount: 0,
        RecordCount: 0
      };
      this.$api.post(url, postData, response => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data.Code == 0) {
            // console.log(response.data.Msg); //请求成功，response为成功信息参数
            this.list = response.data.Data;
            // console.log(this.list);
          } else {
            alert(response.data.Msg); //请求失败，response为失败信息
            // console.log(response.data.msg)
            //$(".tips").css({ visibility: "visible" });
            //$(".tips > span").html(response.data.Msg);
          }
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
    },
    getBestOrder() {
      var url = common.apidomain + "/api/Order/GetBestProfitTrades";
      var postData = {
        PageNo: 0,
        PageSize: 5,
        PageCount: 0,
        RecordCount: 0
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          // console.log(response.data.Msg); //请求成功，response为成功信息参数
          this.list_best = response.data.Data;
        } else {
          // alert(response.msg);//请求失败，response为失败信息
          //$('.tips').css({'visibility':'visible'})
          //$('.tips > span').html(response.data.msg)
        }
      });
    },
    getNews() {
      var url = common.apidomain + "/api/News/FirstPageNewsList"; //接口待修改
      var postData = { Num: 5 };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          // console.log(response.data.Msg); //请求成功，response为成功信息参数
          this.list_news = response.data.Data;
        } else {
          // alert(response.msg);//请求失败，response为失败信息
          //$('.tips').css({'visibility':'visible'})
          //$('.tips > span').html(response.data.msg)
          Toast(response.data.Msg);
        }
      });
    },
    getExponent() {
      var url = "http://hq.sinajs.cn/list=sh000001";
      this.$api.get(url, {}, response => {
        var s = response.hq_str_sh000001;
        console.log(s);
      });
      // http://192.168.1.205:81/api/Stock/GeStockGif
      // $.get("http://hq.sinajs.cn/list=sh000001", function(result) {
      //   console.log(result);
      // });
      // $.ajaxSetup({
      //   headers: {
      //     // 默认添加请求头
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // });
      // $.ajax({
      //   url: "http://hq.sinajs.cn",
      //   type: "post",
      //   dataType: "json",
      //   // data: { Code: "sh600143"list=sh000001 },
      //   data: { list: "sh000001" },

      //   success: res => {
      //     var result = eval(res);
      //     console.log(result);
      //   }
      // });
      // return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* banner图样式 */
.template .banner {
  width: 100%;
  padding: 15px 5px 0px;
  background-color: #1c1f26;
  text-align: center;
}
.template .banner > img {
  width: 100%;
  height: 100%;
}
/*指数样式*/
.template .contents,
.template .tabs,
.template .tabs-new,
.template .latest_trendst,
.template .optimal_trade {
  width: 100%;
  padding: 0 15px;
  background-color: #1c1f26;
}
.template .contents .contents_data,
.template .contents .contents_data ul,
.template .contents .contents_nav {
  width: 100%;
}
.template .contents .contents_data ul > li {
  width: 33%;
  float: left;
  text-align: center;
}
.template .contents .contents_data ul > li h2 {
  color: #3bb34f;
  font-size: 20px;
  line-height: 20px;
}
.template .contents .contents_data ul > li span {
  color: #3bb34f;
  font-size: 12px;
  padding: 5px 10px;
}
.template .contents .contents_data ul > li h3 {
  color: #c4c7d3;
  font-size: 12px;
  padding: 0px 5px 15px;
}
.template .contents .contents_line {
  width: 94%;
  height: 1px;
  background-color: #333;
  margin: 0 auto;
}
.template .contents .contents_nav ul {
  display: flex;
}
.template .contents .contents_nav ul li {
  width: 25%;
  flex-direction: column;
  padding: 10px;
  text-align: center;
}
.template .contents .contents_nav ul li img {
  width: 40px;
  height: 40px;
}
.template .contents .contents_nav ul li h3 {
  font-size: 12px;
  color: #888;
}
.template .tabs,
.template .tabs-new {
  /* padding: 5px 15px; */
  margin-top: 10px;
}
.template .tabs ul,
.template .tabs-new ul {
  width: 60%;
  float: left;
  display: flex;
  padding: 5px 0px;
}
.template .tabs ul li,
.template .tabs-new ul li {
  padding: 5px 10px;
}
.template .tabs ul li.active span {
  position: relative;
  color: #ff302f;
}
.template .tabs-new ul li span {
  position: relative;
}
.template .tabs ul li.active span::after {
  content: "";
  width: 20px;
  height: 3px;
  background-color: #ff302f;
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}
.template .tabs-new ul li span::after {
  content: "";
  width: 3px;
  height: 15px;
  background-color: #ff302f;
  position: absolute;
  bottom: 0px;
  left: -24px;
}
.template .tabs-new .more {
  display: block;
}
.template .tabs .more,
.template .tabs-new .more {
  line-height: 40px;
  width: 30%;
  float: right;
  text-align: right;
  cursor: pointer;
}
.template .tabs .more span,
.template .tabs-new .more span {
  font-family: "Simsun";
  font-size: 13px;
  font-weight: 700;
  position: relative;
}
.template .tabs .more span::after,
.template .tabs-new .more span::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 20px;
  background-color: #444;
  top: -3px;
  left: -15px;
}
.template .latest_trendst {
  padding: 0px;
}
.template .optimal_trade {
  padding: 0px;
}
#optimal_trade {
  display: none;
}
.template .latest_trendst ul li,
.template .optimal_trade ul li {
  border-top: 1px solid #333;
  padding: 8px 15px;
  display: flex;
  font-size: 14px;
}
.template .optimal_trade ul li:nth-of-type(1) .medal {
  background: url(../../static/images/rank_01.png) no-repeat 2px 22px;
}
.template .optimal_trade ul li:nth-of-type(2) .medal {
  background: url(../../static/images/rank_02.png) no-repeat 2px 22px;
}
.template .optimal_trade ul li:nth-of-type(3) .medal {
  background: url(../../static/images/rank_03.png) no-repeat 2px 22px;
}
.template .latest_trendst ul li h3 {
  font-size: 14px;
  color: #c4c7d3;
}
.template .latest_trendst ul li span {
  font-size: 12px;
}
.template .latest_trendst ul li .dynamic_code,
.template .latest_trendst ul li .dynamic_price,
.template .latest_trendst ul li .dynamic_detail {
  /* flex-grow: 1; */
  width: 33%;
}
.template .latest_trendst ul li .dynamic_code {
  padding-left: 5px;
}
.template .latest_trendst ul li .dynamic_price {
  text-align: center;
}
.template .latest_trendst ul li .dynamic_price h2 {
  font-size: 20px;
  color: #ff302f;
  line-height: 15px;
}
.template .latest_trendst ul li .dynamic_detail {
  text-align: right;
}
.template .latest_trendst ul li .dynamic_detail h3 {
  line-height: 15px;
}
.template .latest_trendst ul li .dynamic_detail img {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
  margin-top: -8px;
  margin-right: 5px;
  position: relative;
  top: 5px;
}
.template .optimal_trade ul li .medal {
  width: 50px;
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
  .trade_detail_main_left {
  width: 50%;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_middle {
  width: 12%;
}
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_right {
  width: 38%;
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
  .trade_detail_middle {
  text-align: center;
}
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
.template .riskTip {
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: #fff;
}
.template .riskTip .riskTip_box {
  width: 85%;
  height: 50%;
  margin: 40% auto;
  overflow: hidden;
  border-radius: 5px;
}
.template .riskTip .riskTip_box .riskTip_contents {
  width: 100%;
  height: 78%;
  overflow: scroll;
  background-color: #262834;
  padding: 20px;
  border-bottom: 1px solid #333;
}
.template .riskTip .riskTip_box .riskTip_title {
  font-size: 16px;
  color: #fff;
  background-color: #1c1c20;
  padding: 10px 20px;
}
.template .riskTip .riskTip_box .riskTip_contents h3 {
  font-size: 16px;
  color: #b8bac6;
  padding-bottom: 15px;
}
.template .riskTip .riskTip_box .riskTip_contents p,
.template .riskTip .riskTip_box .riskTip_contents p span {
  color: #b8bac6;
  font-size: 13px;
}
.template .riskTip .riskTip_box .riskTip_contents p span {
  font-weight: 700;
}
.template .riskTip .riskTip_box .riskAffirm {
  padding: 10px;
  text-align: center;
  background-color: #262834;
  font-size: 15px;
  color: #b8bac6;
}
.hide {
  display: none;
}
</style>

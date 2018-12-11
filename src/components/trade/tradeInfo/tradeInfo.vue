<template>
    <div class="template">
        <div class="contents_box">
            <div class="trade_top" @click="fold()">
                <div class="trade_top_info flexeable">
                    <div class="info_left">
                        <h3>{{obj.Trade}}</h3>
                        <p>
                            <span>{{obj.PriceChange}}</span>
                            <span>-9.96%</span>
                        </p>
                    </div>
                    <div class="info_right">
                        <ul class="flexeable">
                            <li>
                                <p>昨收</p>
                                <span>{{obj.Settlement}}</span>
                            </li>
                            <li>
                                <p>今开</p>
                                <span>{{obj.Open}}</span>
                            </li>
                            <li>
                                <p>振幅</p>
                                <span>{{obj.ChangePercent}}%</span>
                            </li>
                            <li>
                                <p>最高</p>
                                <span>{{obj.High}}</span>
                            </li>
                            <li>
                                <p>最低</p>
                                <span>{{obj.Low}}</span>
                            </li>
                            <li>
                                <p>成交量</p>
                                <span>{{(obj.Volume/10000).toFixed(2)}}万</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trade_top_toggle">
                    <ul class="flexeable">
                        <li>总市值
                            <span>156.40 亿</span>
                        </li>
                        <li>市盈率
                            <span>292.15</span>
                        </li>
                        <li>市净率
                            <span>5.41</span>
                        </li>
                        <li>内盘
                            <span>--</span>
                        </li>
                        <li>外盘
                            <span>--</span>
                        </li>
                        <li></li>
                        <li>成交额
                            <span>9.92</span>
                        </li>
                        <li>流通市值
                            <span>136.15 亿</span>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="trade_top_fold">
                    <span class="mui-icon mui-icon-arrowdown"></span>
                </div>
            </div>
            <div class="trade_middle trade_news">
                <div class="trade_news_tab">
                    <ul class="flexeable">
                        <li class="active tabMarket" @click="tabMarket(0)">分时</li>
                        <li class="tabMarket" @click="tabMarket(1)">日K</li>
                        <li class="tabMarket" @click="tabMarket(2)">周K</li>
                        <li class="tabMarket" @click="tabMarket(3)">月K</li>
                    </ul>
                </div>
                <div class="minHours day">
                    <div class="minHour flexeable">
                        <img :src="imgs[0]" alt="分时图" class="minHour_img">
                        <div class="pricelist">
                            <ul>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>13.97</span>
                                    <span>32</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="day hide">
                    <img :src="imgs[1]" alt="日K" class="day_img">
                </div>
                <div class="day hide">
                    <img :src="imgs[2]" alt="周K" class="day_img">
                </div>
                <div class="day hide">
                    <img :src="imgs[3]" alt="月K" class="day_img">
                </div>
            </div>
            <div class="trade_news">
                <div class="trade_news_tab">
                    <ul class="flexeable">
                        <li class="active tabNews" @click="tabNews(0)">新闻</li>
                        <li class="tabNews" @click="tabNews(1)">公告</li>
                        <li class="tabNews" @click="tabNews(2)">资金</li>
                        <li class="tabNews" @click="tabNews(3)">研报</li>
                    </ul>
                </div>
                <div class="newsAbstract newsType">
                    <ul>
                        <li>
                            <h3>佳都科技(600728)人脸识别竞争白热化 融资争夺战打响</h3>
                            <p>
                                <span>来源：财经信息网</span>
                                <span>20180410</span>
                            </p>
                        </li>
                        <li>
                            <h3>佳都科技(600728):拟发行12.5亿元可转债 投资人工智能等项目</h3>
                            <p>
                                <span>来源：中国证券报</span>
                                <span>20180402</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span>来源：财经信息网</span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>佳都科技(600728)2017年净利翻番轨交公共安全业务爆发</h3>
                            <p>
                                <span>来源：证券时报</span>
                                <span>20180317</span>
                            </p>
                        </li>
                        <li>
                            <h3>佳都科技(600728)融资融券信息(03-15)</h3>
                            <p>
                                <span>来源：东方财富网</span>
                                <span>20180316</span>
                            </p>
                        </li>
                        <li class="more1">
                            <router-link to="/newsInfo">
                                <p class="color">
                                    点击查看更多
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="newsAbstract notice newsType hide">
                    <ul>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li class="more1">
                            <router-link to="/newsInfo">
                                <p class="color">
                                    点击查看更多
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="fund  newsType hide">
                    <img src="../../../../static/images/canvas.png" alt="">
                    <h3>最近5日主力增减仓</h3>
                    <img src="../../../../static/images/canvas_02.png" alt="">
                    <div>
                        <ul class="flexeable">
                            <li>04-12</li>
                            <li>04-13</li>
                            <li>04-16</li>
                            <li>04-17</li>
                            <li>04-18</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="flexeable">
                            <li>
                                <span></span>资金流入</li>
                            <li>
                                <span></span>资金流出</li>
                            <li>
                                <span></span>
                            </li>
                            <li>单位（万元）</li>

                        </ul>
                    </div>
                </div>
                <div class="newsAbstract newsType report hide">
                    <ul>
                        <li>
                            <h3>佳都科技(600728)2017年年报点评：智慧城市及轨交业务助力业绩提升 新区域拓展致毛利率下降</h3>
                            <p>
                                <span>来源：信达证券</span>
                                <span>20180321</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>佳都科技(600728)2017年年报点评：智慧城市及轨交业务助力业绩提升 新区域拓展致毛利率下降</h3>
                            <p>
                                <span>来源：信达证券</span>
                                <span>20180321</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li>
                            <h3>佳都科技(600728)2017年年报点评：智慧城市及轨交业务助力业绩提升 新区域拓展致毛利率下降</h3>
                            <p>
                                <span>来源：信达证券</span>
                                <span>20180321</span>
                            </p>
                        </li>
                        <li>
                            <h3>AI+场景逐步落地 人工智能龙头企业受关注</h3>
                            <p>
                                <span></span>
                                <span>20180318</span>
                            </p>
                        </li>
                        <li class="more1">
                            <router-link to="/newsInfo">
                                <p class="color">
                                    点击查看更多
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from "../../../kits/common";
import { Toast } from "mint-ui";
export default {
  name: "aboutUs",
  data() {
    return {
      imgs: [],
      Code: "",
      obj: {}
    };
  },
  created() {
    this.Code = this.$route.params.code.slice(0, 8);
    console.log(this.Code);
  },
  mounted() {
    this.getImgs();
    this.getInfo(this.Code);
    // if (i) {
    //   clearInterval(i);
    // } else {
    //   setInterval(i);
    // }
    // var i = setInterval(this.getImgs, 5000);
  },

  methods: {
    fold() {
      $(".trade_top_toggle").toggle();
      $(".trade_top_fold > span")
        .toggleClass("mui-icon-arrowup")
        .toggleClass("mui-icon-arrowdown");
      console.log(this.Code);
    },
    tabMarket(index) {
      $(".tabMarket").removeClass("active");
      $(".tabMarket:eq(" + index + ")").addClass("active");
      $(".day").addClass("hide");
      $(".day:eq(" + index + ")").removeClass("hide");
    },
    tabNews(index) {
      $(".tabNews").removeClass("active");
      $(".tabNews:eq(" + index + ")").addClass("active");
      $(".newsType").addClass("hide");
      $(".newsType:eq(" + index + ")").removeClass("hide");
    },
    getImgs() {
      //   if (length < 8) {
      //     Toast("参数格式不正确");
      //   } else {
      var url = common.apidomain + "/api/Stock/GeStockGif";
      var postData = { Code: this.Code };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.imgs = response.data.Data;
          // console.log(this.imgs);
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
      //   }
    },
    getInfo(id) {
      var url = common.apidomain + "/api/Stock/GetByCode";
      var postData = { code: id };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.obj = response.data.Data;
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
    },
    //获取新闻公告 待修改
    getNews(id) {
      var url = common.apidomain + "/api/Stock/GetByCode";
      var postData = { code: id };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.obj = response.data.Data;
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .contents_box {
  width: 100%;
}
.template .contents_box .trade_top,
.template .contents_box .trade_middle {
  margin-bottom: 10px;
  padding: 10px;
  padding-bottom: 0px;
  background-color: #1c1f26;
}
.template .contents_box .trade_top,
.template .contents_box .trade_top .trade_top_info,
.template .contents_box .trade_top .trade_top_info .info_right,
.template .contents_box .trade_top .trade_top_info .info_right ul {
  width: 100%;
}
.template .contents_box .trade_top .trade_top_info .info_left {
  width: 150px;
  padding: 0px 10px;
}
.template .contents_box .trade_top .trade_top_info .info_left h3 {
  font-size: 25px;
  color: #ff302f;
  padding-bottom: 5px;
}
.template .contents_box .trade_top .trade_top_info .info_left p span {
  color: #ff302f;
  font-size: 12px;
  padding-right: 5px;
}
.template .contents_box .trade_top .trade_top_info .info_right {
  padding-left: 30px;
}
.template .contents_box .trade_top .trade_top_info .info_right ul {
  flex-wrap: wrap;
}
.template .contents_box .trade_top .trade_top_info .info_right ul li {
  width: 30%;
  padding-right: 20px;
}
.template .contents_box .trade_top .trade_top_info .info_right ul li p {
  color: #7b7f8a;
  margin-bottom: -5px;
  font-size: 13px;
}
.template .contents_box .trade_top .trade_top_info .info_right ul li span {
  color: #c4c7d3;
  font-size: 12px;
}
.template .contents_box .trade_top .trade_top_toggle {
  display: none;
}
.template .contents_box .trade_top .trade_top_toggle ul {
  flex-wrap: wrap;
}
.template .contents_box .trade_top .trade_top_toggle ul li {
  width: 33%;
  padding: 3px 5px;
  font-size: 13px;
}
.template .contents_box .trade_top .trade_top_toggle ul li span {
  color: #c4c7d3;
  font-size: 13px;
  padding-left: 4px;
}
.template .contents_box .trade_top .trade_top_fold {
  text-align: center;
}
/* 新闻部分 */
.template .contents_box .trade_middle,
.template .contents_box .trade_news {
  padding-top: 0px;
  background-color: #1c1f26;
}
.template .contents_box .trade_news .trade_news_tab ul li {
  width: 25%;
  font-size: 15px;
  text-align: center;
  padding: 8px;
  border-bottom: 2px solid #1c1f26;
}
.template .contents_box .trade_news .trade_news_tab ul li.active {
  color: #ff302f;
  border-bottom: 2px solid #ff302e;
}
.template .contents_box .trade_news .newsAbstract ul li {
  border-bottom: 1px solid #444;
  padding: 10px;
}
.template .contents_box .trade_news .newsAbstract ul li h3 {
  font-size: 13px;
  color: #c4c7d3;
}
.template .contents_box .trade_news .newsAbstract ul li p {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
}
.template .contents_box .trade_news .newsAbstract ul li p span {
  font-size: 10px;
  display: inline-block;
  width: 49%;
}
.template .contents_box .trade_news .newsAbstract ul li p span:nth-of-type(2) {
  text-align: right;
}
.template .contents_box .trade_news .notice,
.template .contents_box .trade_news .report {
  /* display: none; */
}
.template .contents_box .trade_news .fund img {
  width: 100%;
}
/* .hide {
  display: none;
} */
.minHour {
  width: 100%;
}
.minHour .minHour_img {
  width: 75%;
  height: 75%;
}
.minHour .pricelist {
  width: 25%;
}
.minHour .pricelist li {
  height: 20px;
  padding: 1px;
  padding-right: 0px;
}
.minHour .pricelist li span {
  font-size: 12px;
  display: inline-block;
  height: 14px;
}
.minHour .pricelist li span:nth-of-type(1) {
  background-color: #3bb34f;
  padding: 3px;
  color: #fff;
  line-height: 8px;
  border-radius: 3px;
}
.minHour .pricelist li span:nth-of-type(2) {
  color: #3bb34f;
}
.minHour .pricelist li span:nth-of-type(3) {
  text-align: right;
  display: inline-block;
  width: 20%;
}
.minHour .pricelist li:nth-last-of-type(-n + 5) span:nth-of-type(1) {
  background-color: #ff302f;
}
.day {
  width: 100%;
}
.day .day_img {
  width: 100%;
}
.hide {
  display: none;
}
.more1 {
  height: 80px;
  padding-bottom: 20px;
}
.more1 .color {
  color: #7b7f8a;
  text-align: center;
}
</style>

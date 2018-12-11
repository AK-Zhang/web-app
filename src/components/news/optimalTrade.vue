<template>
    <div class="template">
        <div class="contents">
            <div class="optimal_trade" id="optimal_trade">
                <ul>
                    <li v-for="item in list">
                        <div class="medal"></div>
                        <div class="trade_detail">
                            <a href="javascript:;">
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
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "optimalTrade",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getBestOrder();
  },
  methods: {
    getBestOrder() {
      var postData = {
        PageNo: 1,
        PageSize: 20,
        PageCount: 1,
        RecordCount: 1
      };
      this.$api.post("/api/Order/GetBestProfitTrades", postData, response => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data.Code == 0) {
            console.log(response.data.Msg); //请求成功，response为成功信息参数
            this.list = response.data.Data;
          } else {
            Toast(response.data.Msg);
          }
        } else {
          Toast(response.data.Msg); //请求失败，response为失败信息
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .optimal_trade {
  padding: 0px;
  background-color: #1c1f26;
}
.template .optimal_trade ul li {
  border-top: 1px solid #333;
  padding: 8px 15px;
  display: flex;
  font-size: 14px;
}
.template .optimal_trade ul li:nth-of-type(1) .medal {
  background: url(../../../static/images/rank_01.png) no-repeat 2px 22px;
}
.template .optimal_trade ul li:nth-of-type(2) .medal {
  background: url(../../../static/images/rank_02.png) no-repeat 2px 22px;
}
.template .optimal_trade ul li:nth-of-type(3) .medal {
  background: url(../../../static/images/rank_03.png) no-repeat 2px 22px;
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
.template
  .optimal_trade
  ul
  li
  .trade_detail
  .trade_detail_main
  .trade_detail_right
  p:nth-of-type(2)
  span {
  /* color: blue; */
  color: #ff302f;
}
</style>

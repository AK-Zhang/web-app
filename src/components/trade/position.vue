<template>
  <div class="template">
    <div class="tabs clear">
      <ul>
        <li>
          <router-link to="/trade/home" class="large">
            <span>认购</span>
          </router-link>
        </li>
        <li class="active">
          <span>持仓</span>
        </li>
      </ul>
    </div>
    <div class="mui-content holdSub">
      <div style="padding: 10px 10px;" class="tab_title">
        <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative">
          <a class="mui-control-item mui-active" @click="holdPosition()">
            持仓中
          </a>
          <a class="mui-control-item" @click="closePosition()">
            已结算
          </a>
          <a class="mui-control-item" @click="unfinishedPosition()">
            未完成
          </a>
        </div>
      </div>
      <div class="contents">
        <div id="item1" class="mui-control-content mui-active">
          <div id="scroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <table class="mui-table-view">
                <tr class="mui-table-view-cell">
                  <td style="width:20%">
                    <span>股票代码</span>
                  </td>
                  <td style="width:20%">
                    <span>当前价<br>期初价</span>
                  </td>
                  <td style="width:20%">
                    <span>权利金<br>持有份数</span>
                  </td>
                  <td style="width:20%">
                    <span>认购日期<br>到期日期</span>
                  </td>
                  <td style="width:20%">
                    <span>参考盈亏</span>
                  </td>
                </tr>
                <tr class="mui-table-view-cell color" v-for="item in position">
                  <td style="width:20%">
                    <span class="color">{{item.TargetCode}}</span>
                  </td>
                  <td style="width:20%">
                    <span class="color">{{item.CurrentPrice}}<br>{{item.NominalPrice}}</span>
                  </td>
                  <td style="width:20%">
                    <span class="color">{{item.RefProfit.toFixed(2)}}<br>{{Math.round(item.PremiumAmount)}}</span>
                  </td>
                  <td style="width:20%">
                    <span>{{item.ConfirmTime | datefmt("YY/MM/DD")}}<br>{{item.ThruTime | datefmt("YY/MM/DD")}}</span>
                  </td>
                  <td style="width:20%">
                    <span class="color">{{item.NominalCount}}</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="item2" class="mui-control-content">
          <div id="scroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <table class="mui-table-view">
                <tr class="mui-table-view-cell">
                  <td style="width:20%">
                    <span>股票代码</span>
                  </td>
                  <td style="width:20%">
                    <span>行权价<br>期初价</span>
                  </td>
                  <td style="width:20%">
                    <span>行权份数</span>
                  </td>
                  <td style="width:20%">
                    <span>权利金<br>行权日</span>
                  </td>
                  <td style="width:20%">
                    <span>盈亏金额</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!-- <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                第二个选项卡子项-1
              </li>
            </ul> -->
        </div>
        <div id="item3" class="mui-control-content">
          <div id="scroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <table class="mui-table-view">
                <tr class="mui-table-view-cell">
                  <td style="width:20%">
                    <span>股票代码</span>
                  </td>
                  <td style="width:20%">
                    <span>当前价<br>委托价</span>
                  </td>
                  <td style="width:20%">
                    <span>名义本金</span>
                  </td>
                  <td style="width:20%">
                    <span>权利金</span>
                  </td>
                  <td style="width:20%">
                    <span>方向</span>
                  </td>
                </tr>
                <tr class="mui-table-view-cell color" v-for="item in UnComplete">
                  <td style="width:20%">
                    <span class="color">{{item.TargetCode}}</span>
                  </td>
                  <td style="width:20%">
                    <span class="color">{{item.CurrentPrice}}<br>{{item.EntrustPrice}}</span>
                  </td>
                  <td style="width:20%">
                    <span>{{item.NominalAmount}}</span>
                  </td>
                  <td style="width:20%">
                    <span class="color">{{item.PremiumAmount}}</span>
                  </td>
                  <td style="width:20%">
                    <span>{{(item.Direction == 0)?"认购":"行权"}}</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!-- <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                第三个选项卡子项-1
              </li>
            </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      indexs: [0, 1, 2, 3, 4, 5],
      position: [], //持仓中
      Complete: [], //已完成
      UnComplete: [] //未完成待确认
    };
  },
  created() {
    this.getPosition();
    this.getUnComp();
    this.getComplete();
  },
  methods: {
    holdPosition() {
      $("#segmentedControl > a:eq(0)").addClass("mui-active");
      $("#segmentedControl > a:eq(1)").removeClass("mui-active");
      $("#segmentedControl > a:eq(2)").removeClass("mui-active");
      $("#item1").addClass("mui-active");
      $("#item2").removeClass("mui-active");
      $("#item3").removeClass("mui-active");
    },
    closePosition() {
      $("#segmentedControl > a:eq(1)").addClass("mui-active");
      $("#segmentedControl > a:eq(0)").removeClass("mui-active");
      $("#segmentedControl > a:eq(2)").removeClass("mui-active");
      $("#item2").addClass("mui-active");
      $("#item1").removeClass("mui-active");
      $("#item3").removeClass("mui-active");
    },
    unfinishedPosition() {
      $("#segmentedControl > a:eq(2)").addClass("mui-active");
      $("#segmentedControl > a:eq(0)").removeClass("mui-active");
      $("#segmentedControl > a:eq(1)").removeClass("mui-active");
      $("#item3").addClass("mui-active");
      $("#item1").removeClass("mui-active");
      $("#item2").removeClass("mui-active");
    },
    getPosition() {
      var url = common.apidomain + "/api/Order/GetPositionOrders";
      var postData = { accountID: window.userID };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          if (response.data.Data == "") {
            Toast("暂无数据");
          } else {
            this.position = response.data.Data;
          }
          //his.list_position = response.data.Data;
        } else {
          //Toast(response.data.Msg);
        }
      });
    },
    getUnComp() {
      var url = common.apidomain + "/api/Order/GetEntrustOrders";
      var postData = { accountID: window.userID };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          if (response.data.Data == "") {
            Toast("暂无数据");
          } else {
            this.UnComplete = response.data.Data;
          }
          //his.list_position = response.data.Data;
        } else {
          //Toast(response.data.Msg);
        }
      });
    },
    getComplete() {
      var url = common.apidomain + "/api/Order/GetClosedOrders";
      var postData = {
        accountID: window.userID,
        PageNo: 1,
        PageSize: 10,
        PageCount: 0,
        RecordCount: 0
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          if (response.data.Data == "") {
            Toast("暂无数据");
          } else {
            this.Complete = response.data.Data;
          }
          //his.list_position = response.data.Data;
        } else {
          //Toast(response.data.Msg);
        }
      });
    }
  }
};
</script>

<!-- 增加 "scoped" 使样式只在本页生效 -->
<style scoped>
.mui-content {
  background-color: #1c1f26;
  height: 100%;
  overflow-y: auto;
  padding-top: 41px;
  position: relative;
}
.mui-content .tab_title {
  position: fixed;
  z-index: 99;
  background-color: #1c1f26;
}
.mui-content .contents {
  padding-top: 50px;
  position: relative;
}
/* .template .holdSub {
  display: none;
  padding-top: 60px;
} */
.mui-segmented-control-negative.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: #ff302f;
  border-bottom: 2px solid #ff302f;
  background: none;
}
.template .tabs {
  /* padding: 5px 15px; */
  /* margin-top: 10px; */
  width: 100%;
  background-color: #262834;
  position: fixed;
  z-index: 999;
}
.template .tabs ul {
  width: 100%;
  float: left;
  display: flex;
}
.template .tabs ul li {
  padding: 15px 10px 5px;
  width: 50%;
  text-align: center;
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
  width: 30px;
  height: 3px;
  background-color: #ff302f;
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}
.mui-scroll-wrapper,
.mui-scroll {
  position: relative;
}
.mui-scroll .mui-table-view {
  width: 100%;
  background-color: #1c1f26;
  height: 100%;
  position: relative;
  padding-top: 41px;
}
.mui-scroll .mui-table-view tr {
  /* background-color: #262834; */
  border-bottom: 1px solid #262834;
}
.mui-scroll .mui-table-view tr:nth-of-type(1) {
  /* position: fixed; */
  width: 100%;
  background-color: #1c1f26;
}
.mui-scroll .mui-table-view-cell {
  /* background-color: #1C1F26; */
}
.mui-scroll .mui-table-view::before,
.mui-scroll .mui-table-view::after {
  height: 0;
}
/*.mui-scroll .mui-table-view-cell,
.mui-scroll .mui-table-view-cell {
  top: 1px;
}*/
.mui-scroll .mui-table-view-cell::before,
.mui-scroll .mui-table-view-cell::after {
  height: 0;
}
.mui-scroll .mui-table-view .mui-table-view-cell {
  /* border: 0px; */
  padding: 5px;
}
.mui-scroll .mui-table-view .mui-table-view-cell td {
  border: 0px;
  padding: 5px;
  font-size: 14px;
  text-align: center;
}

.template {
  position: relative;
}
.color {
  color: #c4c7d3;
}
.colorred {
  color: #ff302f;
}
.template .bgc {
  background-color: #1c1f26;
  color: #1c1f26;
}
.large {
  display: block;
  height: 100%;
  width: 100%;
}

.template .mui-table-view-cell:nth-of-type(n + 2) td:nth-of-type(1) span {
  color: #888;
}
.template .mui-table-view-cell:nth-of-type(n + 2) td:nth-of-type(2) span.up {
  color: #ff302f;
}
.template .mui-table-view-cell:nth-of-type(n + 2) td:nth-of-type(2) span.down {
  color: #3bb34f;
}
</style>

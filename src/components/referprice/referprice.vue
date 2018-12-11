<template>
  <div class="template">
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks">
        标的股票:
      </div>
      <div class="form_stocks flexeable">
        <div class="stocks_kinds">
          <input type="text" :placeholder="stockName" v-model="pams" @keyup="getOptions(pams)">
          <i class="mui-icon mui-icon-compose"></i>
          <div class="stock_list">
            <ul>
              <li v-for="item in list_s" @click="selected(item.TargetName,item.TargetCode,item.TargetCode)">{{item.TargetName}} {{item.TargetCode}}</li>
              <!-- <li>平安银行 000001</li> -->
            </ul>
          </div>
          <p>当前价：
            <span>{{currentPrice}}</span>
          </p>
        </div>
        <div class="market">
          <router-link v-bind="{to:'/trade/tradeInfo'+stockId+stockname}">
            <p>行情
              <i>></i>
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks">
        名义本金:
      </div>
      <div class="form_stocks flexeable form-stocks_r">
        <div class="stocks_kinds">
          <input type="text" placeholder="自定义金额20万起" v-numbers @keyup="chuanzhi(principals)" :principals="principal" v-model="principals">
          <i>万元</i>
          <div class="principal flexeable principal_a">
            <p class="active" @click="moneySelect(indexs[0])">20万</p>
            <p @click="moneySelect(indexs[1])">30万</p>
            <p @click="moneySelect(indexs[2])">40万</p>
            <p @click="moneySelect(indexs[3])">50万</p>
            <p @click="moneySelect(indexs[4])">80万</p>
            <p @click="moneySelect(indexs[5])">100万</p>
          </div>
        </div>
      </div>
    </div>
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks">
        行权周期:
      </div>
      <div class="form_stocks flexeable form-stocks_r">
        <div class="stocks_kinds">
          <div class="principal flexeable principal_b" id="princ">
            <p @click="periodExercise(index,item.OID)" :class="CName+index" v-for="(item,index) in list">{{item.Name}}</p>
          </div>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="askPrice" @click="referPrice()">询价</a>
    <router-link to="/help" class="help">
      <span class="mui-icon mui-icon-info"></span> 帮助说明</router-link>
    <!-- <alerts :principals="principal" :isShow="isDisplay" ref="changeb" :info="list_s"></alerts>     -->
    <div class="referPriceResult" v-if="isDisplay">
      <div class="referPriceResult_box">
        <div class="result_title flexeable">
          <h3>询价结果</h3>
          <span @click="closeAlert()">×</span>
        </div>
        <div class="result_info">
          <ul>
            <li>
              <div class="info_left">标的股票：</div>
              <div class="info_right">{{stockName}}</div>
            </li>
            <li>
              <div class="info_left">名义本金：</div>
              <div class="info_right">{{principal}}万元</div>
            </li>
            <li>
              <div class="info_left">行权周期：</div>
              <div class="info_right">{{VestPeriod}}</div>
            </li>
            <li>
              <div class="info_left">报价比例：</div>
              <div class="info_right">{{parseInt(rate*10000)/100}}%</div>
            </li>
            <li>
              <div class="info_left">权利金：</div>
              <div class="info_right">{{Math.floor(royalty)}}元</div>
            </li>
          </ul>
        </div>
        <div class="result_rate">
          <table>
            <tr>
              <td>预期涨幅</td>
              <td>盈亏比例</td>
              <td>盈利金额</td>
            </tr>
            <tr>
              <td>{{referRate.ExpectProfits[0].PricePercent}}</td>
              <td>{{referRate.ExpectProfits[0].ProfitPercent}}</td>
              <td>{{referRate.ExpectProfits[0].Profit}}</td>
            </tr>
            <tr>
              <td>{{referRate.ExpectProfits[1].PricePercent}}</td>
              <td>{{referRate.ExpectProfits[1].ProfitPercent}}</td>
              <td>{{referRate.ExpectProfits[1].Profit}}</td>
            </tr>
            <tr>
              <td>{{referRate.ExpectProfits[2].PricePercent}}</td>
              <td>{{referRate.ExpectProfits[2].ProfitPercent}}</td>
              <td>{{referRate.ExpectProfits[2].Profit}}</td>
            </tr>
          </table>
        </div>
        <router-link v-bind="{to:'/trade/home'+order}" class="askPrice">立即认购</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common.js";
import { Toast } from "mint-ui";
import "../../store/store";

export default {
  name: "referprice",
  data() {
    return {
      indexs: [0, 1, 2, 3, 4, 5],
      list: [], //用于接收行权周期
      list_s: [], //用于接收股票列表
      pams: "", //用于股票名字和id
      currentPrice: "12.25", //当前价格
      stockId: "", //股票id
      stockName: "", //股票名称+id
      stockname: "", //股票名称
      isDisplay: false, //是否显示
      principal: 20, //名利本金
      VestPeriod: "一个月", //行权周期
      periodId: "", //行权周期id
      principals: "",
      principalsp: "",
      royalty: "",
      referRate: [],
      SName: "",
      rate: 0,
      CName: "chosed",
      order: "",
      idIndex: 0,
      periodIdIndex: 0
    };
  },
  //   components: {alerts},
  created() {
    //   this.getStorks(this.sort);
    //   this.defaStock(this.list_s)
    this.randomDisplay();
    this.getPerid();
  },
  methods: {
    moneySelect(index) {
      $(".principal_a > p:eq(" + index + ")")
        .addClass("active")
        .siblings()
        .removeClass("active");
      this.principal = parseInt($(".principal_a > p:eq(" + index + ")").html());
      this.principalsp = this.principal * 10000;
      this.principals = "";
      this.idIndex = index;
    },
    periodExercise(index, id) {
      $(".principal_b > p:eq(" + index + ")")
        .addClass("active")
        .siblings()
        .removeClass("active chosed0");
      this.VestPeriod = $(".principal_b> p:eq(" + index + ")").html();
      this.periodId = id;
      this.periodIdIndex = index;
      console.log(this.periodId);
      //this.getRate();
    },
    getPerid() {
      this.principalsp = parseInt(this.principal * 10000);
      var url = common.apidomain + "/api/ExercisePeriod/GetList";
      var postData = { containDisabled: true };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.list = response.data.Data;
          this.periodId = this.list[0].OID;
          this.VestPeriod = this.list[0].Name;
        } else {
          Toast("该股票暂无行权周期"); //请求失败，response为失败信息
        }
      });
    },
    getStocks(item) {
      var url = common.apidomain + "/api/Stock/GetPagedList";
      var postData = {
        codeOrName: item,
        PageNo: 1,
        PageSize: 1,
        PageCount: 0,
        RecordCount: 0,
        containDisabled: false
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.currentPrice = response.data.Data[0].Trade;
          this.stockname = response.data.Data[0].Name;
          if (this.currentPrice == "") {
            Toast("暂无报价");
          }
        } else {
          Toast("暂无报价"); //请求失败，response为失败信息
          return;
        }
      });
    },
    getOptions(param) {
      var url = common.apidomain + "/api/Option/GetPagedList";
      var postData = {
        codeOrName: param,
        PageNo: 1,
        PageSize: 0,
        ResetPageNo: false,
        containDisabled: false
      };
      if (param.length == 0) {
        $(".stock_list").css("display", "none");
        return false;
      }
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          // console.log(response.data.Msg); //请求成功，response为成功信息参数
          this.list_s = response.data.Data;
          // console.log(this.list_s);
          if (this.list_s.length == 0) {
            $(".stock_list").css("display", "none");
          } else {
            $(".stock_list").css("display", "block");
          }
        } else {
          return; //请求失败，response为失败信息
        }
      });
    },
    randomDisplay() {
      var randomNumber = parseInt(Math.random() * 100);
      //this.stockId = randomNumber;
      var url = common.apidomain + "/api/Option/GetPagedList";
      var postData = {
        codeOrName: randomNumber,
        PageNo: 1,
        PageSize: 1,
        ResetPageNo: false,
        containDisabled: false
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.list_s = response.data.Data;
          this.stockname = this.list_s[0].TargetName;
          this.stockName =
            this.list_s[0].TargetName + " " + this.list_s[0].TargetCode;
          this.stockId = this.list_s[0].TargetCode;
          console.log(this.stockId);
          this.getStocks(randomNumber);
        } else {
          return;
        }
      });
    },
    selected(paramsN, paramss, id) {
      this.pams = paramsN + " " + paramss;
      $(".stock_list").css("display", "none");
      //this.currentPrice = curP;
      this.stockName = this.pams;
      this.stockname = paramsN;
      this.stockId = paramss;
      this.getStocks(id);
    },
    //询价
    referPrice() {
      var url = common.apidomain + "/api/Order/Enquiry";
      if (this.periodId == "") {
        Toast("请选择行权周期");
      } else {
        var sum = this.principalsp;
        var postData = {
          Data: {
            TargetCode: this.stockId,
            ExercisePeriodID: this.periodId,
            NominalAmount: sum,
            TargetPrice: this.currentPrice
          }
        };
        this.$apim.post(url, postData, response => {
          if (response.data.Code == 0) {
            this.isDisplay = !this.isDisplay;
            this.changeBgc();

            this.referRate = response.data.Data;
            this.rate = this.referRate.PremiumRateValue;
            this.royalty = this.principalsp * this.rate;
            this.referRate.ExpectProfits[0].PricePercent =
              this.referRate.ExpectProfits[0].PricePercent * 100 + "%";
            this.referRate.ExpectProfits[1].PricePercent =
              this.referRate.ExpectProfits[1].PricePercent * 100 + "%";
            this.referRate.ExpectProfits[2].PricePercent =
              this.referRate.ExpectProfits[2].PricePercent * 100 + "%";

            this.referRate.ExpectProfits[0].ProfitPercent =
              Math.floor(
                this.referRate.ExpectProfits[0].ProfitPercent * 10000
              ) /
                10000 *
                100 +
              "%";
            this.referRate.ExpectProfits[1].ProfitPercent =
              Math.round(
                Math.floor(
                  this.referRate.ExpectProfits[1].ProfitPercent * 10000
                ) /
                  10000 *
                  100 *
                  100
              ) /
                100 +
              "%";
            this.referRate.ExpectProfits[2].ProfitPercent =
              Math.round(
                Math.floor(
                  this.referRate.ExpectProfits[2].ProfitPercent * 10000
                ) /
                  10000 *
                  100 *
                  100
              ) /
                100 +
              "%";
            var Rdata = JSON.stringify({
              TargetCode: this.stockId,
              principalsp: this.principalsp,
              principal: this.principal,
              periodId: this.periodId,
              royalty: this.royalty,
              rate: this.rate,
              stockName: this.stockName,
              stockname: this.stockname,
              currentPrice: this.currentPrice,
              VestPeriod: this.VestPeriod,
              principalID: this.idIndex, //名义本金的id
              periodIdIndex: this.periodIdIndex //行权周期idindex
            });
            // this.$store.commit("param", Rdata);
            this.order = Rdata;
          } else {
            Toast("暂无当前标的报价，请重新选择");
          }
        });
      }
    },
    //获取报价比例
    getRate() {
      // this.isDisplay = !this.isDisplay;
      var url = common.apidomain + "/api/Order/Enquiry";
      var sum = this.principalsp;
      var postData = {
        Data: {
          TargetCode: this.stockId,
          ExercisePeriodID: this.periodId,
          NominalAmount: sum,
          TargetPrice: this.currentPrice
        }
      };
      this.$apim.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.rate = response.data.Data.PremiumRateValue;
          console.log(this.rate);
        } else {
          return;
        }
      });
      // this.royalty = this.principal * 10000 * 0.052;
      this.royalty = parseInt(this.principal * 10000 * this.rate);
      // this.changeBgc();
    },
    //关闭弹出框
    closeAlert() {
      this.isDisplay = !this.isDisplay;
      this.changeBgc();
    },
    //改变背景颜色
    changeBgc() {
      if (this.isDisplay) {
        $(".underly_stocks_box").css("background-color", "#15161B");
      } else {
        $(".underly_stocks_box").css("background-color", "#1C1F26");
      }
    },
    chuanzhi(num) {
      if (this.principals.length == 0) {
        this.principal = 20;
      } else {
        this.principal = num;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template {
  position: relative;
}
.template .underly_stocks_box {
  padding: 15px;
  background-color: #1c1f26;
  margin-bottom: 10px;
}
.template .underly_stocks_box .underly_stocks {
  font-size: 14px;
  width: 22%;
}
.template .underly_stocks_box .form_stocks {
  font-size: 14px;
  padding-left: 15px;
  width: 84%;
}
.template .underly_stocks_box .form_stocks .stocks_kinds {
  width: 90%;
  position: relative;
}
.template .underly_stocks_box .form_stocks .stocks_kinds .stock_list {
  position: absolute;
  width: 100%;
  background-color: #1c1f26;
  padding-left: 10px;
  border: 1px solid #7b7f8a;
  max-height: 175px;
  overflow: auto;
  z-index: 99;
  display: none;
}
.template .underly_stocks_box .form_stocks .stocks_kinds .stock_list ul li {
  padding: 3px;
  font-size: 13px;
}
.template .underly_stocks_box .form-stocks_r .stocks_kinds {
  width: 100%;
}
.template .underly_stocks_box .form_stocks input {
  background-color: inherit;
  border: 1px solid #7b7f8a;
  border-radius: 3px;
  height: 30px;
  width: 100%;
  font-size: 14px;
  margin-bottom: 5px;
  color: #c4c7d3;
}
.template .underly_stocks_box .form_stocks .stocks_kinds i {
  position: absolute;
  top: 3px;
  right: 5px;
}
.template .underly_stocks_box .form_stocks p {
  color: #c4c7d3;
  margin-bottom: 0px;
}
.template .underly_stocks_box .form_stocks p span {
  color: #ff302f;
}
.template .underly_stocks_box .form_stocks p i {
  font-family: "simsun";
  font-weight: 700;
  font-style: normal;
  padding-left: 5px;
}
.template .underly_stocks_box .market {
  line-height: 55px;
  width: 32%;
  text-align: right;
}
.template .underly_stocks_box .form-stocks_r .stocks_kinds .principal {
  width: 100%;
  flex-wrap: wrap;
}
.template .underly_stocks_box .form-stocks_r .stocks_kinds .principal p {
  border: 1px solid #7b7f8a;
  border-radius: 3px;
  margin: 10px 5px 0px 0px;
  width: 31%;
  text-align: center;
  color: #7b7f8a;
  padding: 3px 10px;
  font-size: 14px;
}
.template .underly_stocks_box .form-stocks_r .stocks_kinds .principal p.chosed0,
.template .underly_stocks_box .form-stocks_r .stocks_kinds .principal p.active {
  border: 1px solid #ff302f;
  color: #ff302f;
}
.template
  .underly_stocks_box
  .form-stocks_r
  .stocks_kinds
  .principal_b
  p:nth-of-type(1),
.template
  .underly_stocks_box
  .form-stocks_r
  .stocks_kinds
  .principal_b
  p:nth-of-type(2),
.template
  .underly_stocks_box
  .form-stocks_r
  .stocks_kinds
  .principal_b
  p:nth-of-type(3) {
  margin-top: 0px;
}
.template .askPrice {
  display: block;
  width: 95%;
  background-color: #c33f00;
  margin: 0 auto;
  margin-top: 19px;
  text-align: center;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
}
.template .help {
  display: block;
  width: 95%;
  margin: 0 auto;
  text-align: right;
  font-size: 13px;
  color: #5195de;
  margin-top: 20px;
}
.template .help .mui-icon {
  font-size: 18px;
  color: #5195de;
}
.template .referPriceResult {
  position: fixed;
  width: 100%;
  /* height: 100%; */
  padding: 25% 10%;
  top: 0;
}
.template .referPriceResult .referPriceResult_box {
  width: 100%;
  height: 100%;
  background-color: #1c1f26;
  padding: 10px;
}
.template .referPriceResult .referPriceResult_box .result_title {
  position: relative;
  padding: 10px;
}
.template .referPriceResult .referPriceResult_box .result_title h3 {
  width: 100%;
  color: #c4c7d3;
  font-size: 16px;
  text-align: center;
}
.template .referPriceResult .referPriceResult_box .result_title span {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 28px;
  padding: 10px;
  padding-right: 5px;
}
.template .referPriceResult .referPriceResult_box .result_info {
  padding: 0px 10px 10px;
}
.template .referPriceResult .referPriceResult_box .result_info ul li {
  padding: 8px 0px;
  display: flex;
}
.template
  .referPriceResult
  .referPriceResult_box
  .result_info
  ul
  li
  div:nth-of-type(1) {
  width: 30%;
}
.template
  .referPriceResult
  .referPriceResult_box
  .result_info
  ul
  li
  div:nth-of-type(2) {
  width: 70%;
  text-align: right;
  color: #c4c7d3;
}
/* .template .referPriceResult .referPriceResult_box .result_info ul li:nth-of-type(1) div:nth-of-type(2) {
    color: #C4C7D3;
} */
.template
  .referPriceResult
  .referPriceResult_box
  .result_info
  ul
  li:nth-of-type(2)
  div:nth-of-type(2),
.template
  .referPriceResult
  .referPriceResult_box
  .result_info
  ul
  li:nth-of-type(5)
  div:nth-of-type(2) {
  color: #ff302f;
}
.template .referPriceResult .referPriceResult_box .result_rate table {
  width: 100%;
  border: 1px solid #272e38;
}
.template .referPriceResult .referPriceResult_box .result_rate table tr,
.template .referPriceResult .referPriceResult_box .result_rate table td {
  border: 1px solid #272e38;
}
.template .referPriceResult .referPriceResult_box .result_rate table td {
  text-align: center;
  padding: 5px;
  font-size: 12px;
  color: #ff302f;
}
.template
  .referPriceResult
  .referPriceResult_box
  .result_rate
  table
  tr:nth-of-type(1)
  td {
  color: #7b7f8a;
}

.template .referPriceResult .askPrice {
  width: 100%;
}
</style>

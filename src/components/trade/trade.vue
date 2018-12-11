<template>
  <div class="template">
    <div class="tabs clear">
      <ul>
        <li class="active">
          <span>认购</span>
        </li>
        <li>
          <router-link to="/trade/position" class="large">
            <span>持仓</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks" @click="getRate">
        标的股票:
      </div>
      <div class="form_stocks flexeable">
        <div class="stocks_kinds">
          <input type="text" :placeholder="stockName" v-model="pams" @keyup="getOptions(pams)">
          <i class="mui-icon mui-icon-compose"></i>
          <div class="stock_list">
            <ul>
              <li v-for="item in list_s" @click="selected(item.Name,item.Code,item.Trade)">{{item.Name}} {{item.Code}}</li>
              <!-- <li>平安银行 000001</li> -->
            </ul>
          </div>
          <p>当前价：
            <span>{{currentPrice}}</span>
          </p>
        </div>
        <div class="market">
          <router-link v-bind="{to:(stockId.length<8)?'/trade/home':'/trade/tradeInfo'+stockId+stockname}">
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
          <input type="text" placeholder="自定义金额20万起" @keyup="chuanzhi(principals)" :principals="principal" v-model="principals">
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
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks">
        报价比例:
      </div>
      <div class="form_stocks flexeable form-stocks_r colorred">
        <!-- 按当天14:30-14:57均价成交 -->
        {{parseInt(rate*10000)/100}}%
      </div>
    </div>
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks">
        均价交易:
      </div>
      <div class="form_stocks flexeable form-stocks_r">
        按当天14:30-14:57均价成交
      </div>
    </div>
    <div class="underly_stocks_box flexeable">
      <div class="underly_stocks">
        支付金额:
      </div>
      <div class="form_stocks flexeable form-stocks_r">
        <span class="payfigure">{{Math.floor(royalty)}}元</span>
      </div>
    </div>
    <a href="javascript:;" class="askPrice" @click="getRate1(periodId)">立即认购</a>
    <div class="deal flexeable">
      <input type="checkbox" checked>
      <span>我已阅读</span>
      <router-link to="/agreement" class="help">《委托合作协议》</router-link>
      <router-link to="/trade/rules" class="help">
        <span class="mui-icon mui-icon-info"></span> 交易规则</router-link>
    </div>

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
            <li>
              <div class="info_left">均价交易：</div>
              <div class="info_right">按当天14:30-14:57均价成交</div>
            </li>
            <li>
              <div class="info_left" id="w">参考到期日：</div>
              <div class="info_right">{{ThruDate | datefmt("YYYY-MM-DD")}}</div>
            </li>
          </ul>
        </div>
        <div class="result_rate">

        </div>
        <a class="askPrice" @click="Pache()">立即认购</a>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common.js";
import { Toast } from "mint-ui";
import "../../store/store";

export default {
  data() {
    return {
      indexs: [0, 1, 2, 3, 4, 5],
      list: [], //用于接收行权周期
      list_s: [], //用于接收股票列表
      pams: "", //用于股票名字和id
      currentPrice: "0", //当前价格
      stockId: "", //股票id
      stockName: "请输入股票代码或名称", //股票名称
      stockname: "",
      isDisplay: false, //是否显示
      principal: 20, //名利本金
      VestPeriod: "", //行权周期
      periodId: "", //行权周期id
      principals: "",
      royalty: 0,
      CName: "HL", //类名
      referRate: [],
      list_position: [], //持仓中
      rate: "",
      ThruDate: "",
      rateId: "", //权利金比例ID
      order: {},
      principalsp: "",
      PremiumRateID: "",
      principalID: 0, //名义本金的id
      periodIdIndex: 0, //行权周期idindex
      once: true
    };
  },
  created() {
    // this.getPerid();
    //this.getStocks(this.stockId);
    //this.getRate();
    this.order = eval("(" + this.$route.params.order + ")");
    // this.orderss();
  },
  mounted() {
    this.getPerid();
    this.orderss();
  },
  // updated() {
  //   this.defaultCss(this.principalID, this.periodIdIndex);
  // },
  methods: {
    orderss() {
      var obj = this.order;
      this.royalty = obj.royalty;
      this.rate = obj.rate;
      this.periodId = obj.periodId;
      this.principal = obj.principal;
      this.principalsp = obj.principalsp;
      this.stockId = obj.TargetCode;
      this.stockName = obj.stockName;
      this.PremiumRateID = obj.PremiumRateID;
      this.currentPrice = obj.currentPrice;
      this.stockname = obj.stockname;
      this.VestPeriod = obj.VestPeriod;
      this.principalID = obj.principalID; //名义本金的id
      this.periodIdIndex = obj.periodIdIndex; //行权周期idindex
      console.log(this.principalID);
      // console.log(this.periodIdIndex);
      // console.log(this.periodId);
    },
    defaultCss(index, indexp) {
      $(".principal_a > p:eq(" + index + ")")
        .addClass("active")
        .siblings()
        .removeClass("active HL0");
      $(".principal_b > p:eq(" + indexp + ")")
        .addClass("active")
        .siblings()
        .removeClass("active HL0");
      console.log($(".principal_b > p:eq(" + indexp + ")"));
    },
    moneySelect(index) {
      $(".principal_a > p:eq(" + index + ")")
        .addClass("active")
        .siblings()
        .removeClass("active HL0");
      this.principal = parseInt($(".principal_a > p:eq(" + index + ")").html());
      //this.getRate();
      this.principals = "";
      this.principalsp = this.principal * 10000;
      this.royalty = this.principalsp * this.rate;
    },
    periodExercise(index, id) {
      // this.periodId = id;
      $(".principal_b > p:eq(" + index + ")")
        .addClass("active")
        .siblings()
        .removeClass("active HL0");
      this.VestPeriod = $(".principal_b> p:eq(" + index + ")").html();
      // this.getRate();
      // console.log(index);
      this.periodId = id;

      var url = common.apidomain + "/api/Order/Enquiry";
      var sum = this.principalsp;
      var postData = {
        Data: {
          TargetCode: this.stockId,
          ExercisePeriodID: id,
          NominalAmount: sum,
          TargetPrice: this.currentPrice
        }
      };
      this.$apim.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.rate = response.data.Data.PremiumRateValue;
          // console.log(this.rate);
          this.royalty = this.principal * 10000 * this.rate;
        } else {
          return;
        }
      });
    },
    getPerid() {
      this.principalsp = parseInt(this.principal * 10000);
      var url = common.apidomain + "/api/ExercisePeriod/GetList";
      var postData = { containDisabled: true };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.list = response.data.Data;
          this.periodId = this.list[0].OID;
          // console.log(this.periodId);
          // console.log(this.list);
          console.log(this.periodIdIndex);
          this.$nextTick(() => {
            // 在这里面去获取DOM
            this.defaultCss(this.principalID, this.periodIdIndex);
          });
        } else {
          Toast("该股票暂无行权周期"); //请求失败，response为失败信息
        }
      });
      $(".principal_b > p:eq(" + this.periodIdIndex + ")")
        .addClass("active")
        .siblings()
        .removeClass("active HL0");
    },
    getThruData(id) {
      var date = this.getNowFormatDate();
      var url = common.apidomain + "/api/ExercisePeriod/CalcThruDate";
      var postData = {
        fromDate: date,
        id: id
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          // console.log(response.data.Msg); //请求成功，response为成功信息参数
          this.ThruDate = response.data.Data;
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
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
          this.stockname = response.data.Date[0].Name;
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
    },
    getOptions(param) {
      var url = common.apidomain + "/api/Stock/GetPagedList";
      var postData = {
        codeOrName: param,
        PageNo: 1,
        PageSize: 0,
        ResetPageNo: false,
        containDisabled: false
      };
      if (param.length === 0) {
        $(".stock_list").css("display", "none");
        return false;
      }
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          console.log(response.data.Msg); //请求成功，response为成功信息参数
          this.list_s = response.data.Data;
          // console.log(this.list_s);
          if (this.list_s.length === 0) {
            $(".stock_list").css("display", "none");
          } else {
            $(".stock_list").css("display", "block");
          }
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
    },
    selected(paramsN, paramss, curP) {
      this.pams = paramsN + " " + paramss;
      $(".stock_list").css("display", "none");
      this.currentPrice = curP;
      this.stockName = this.pams;
      this.stockname = paramsN;
      this.stockId = paramss;
      //this.getThruData();
      // console.log(this.periodId);
      var url = common.apidomain + "/api/Order/Enquiry";
      var sum = this.principalsp;
      var postData = {
        Data: {
          TargetCode: paramss,
          ExercisePeriodID: this.periodId,
          NominalAmount: sum,
          TargetPrice: this.currentPrice
        }
      };
      this.$apim.post(url, postData, response => {
        if (response.data.Code == 0) {
          this.rate = response.data.Data.PremiumRateValue;
          this.PremiumRateID = response.data.Data.PremiumRateID;
          this.royalty = this.principalsp * this.rate;
        } else {
          return;
        }
      });
    },
    //获取报价比例
    getRate() {
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
          this.PremiumRateID = response.data.Data.PremiumRateID;
        } else {
          return;
        }
      });
      //this.royalty = parseInt(this.principal * 10000 * this.rate);
    },
    getRate1(id) {
      if (this.royalty == 0) {
        Toast("请选择标的股票");
      } else {
        this.getThruData(id);
        this.isDisplay = !this.isDisplay;
        this.changeBgc();
        // console.log(this.periodId);
      }
    },
    closeAlert() {
      this.isDisplay = !this.isDisplay;
      this.changeBgc();
    },
    changeBgc() {
      if (this.isDisplay) {
        $(".underly_stocks_box").css("background-color", "#15161B");
        $(".askPrice").addClass("bgc");
      } else {
        $(".underly_stocks_box").css("background-color", "#1C1F26");
        $(".askPrice").removeClass("bgc");
      }
    },
    chuanzhi(p) {
      if (this.principals.length == 0) {
        this.principal = 20;
        this.royalty = 0;
      } else {
        this.principal = p;
        //this.getRate();
        this.royalty = p * 10000 * this.rate;
      }
    },
    Pache() {
      var url = "/api/Order/OfferToBuy";
      var postData = {
        Data: {
          TargetCode: this.stockId,
          TargetPrice: this.currentPrice,
          ExercisePeriodID: this.periodId,
          NominalAmount: this.principalsp,
          PremiumRateID: this.PremiumRateID,
          PremiumRateValue: this.rate,
          PremiumAmount: this.royalty,
          OrderPriceType: 0,
          CreatorID: window.userID,
          CreatorName: window.userName
        }
      };
      //console.log(postData);
      this.$apim.post(url, postData, response => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data.Code == 0) {
            window.location.href = "#/trade/position";
          }
        } else {
          Toast("参数错误！");
        }
      });
    },
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  }
};
</script>

<!-- 增加 "scoped" 使样式只在本页生效 -->
<style scoped>
.mui-content {
  background-color: #1c1f26;
}
/* .template .holdSub {
  display: none;
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
.template .underly_stocks_box {
  padding: 15px;
  background-color: #1c1f26;
  margin-bottom: 10px;
}
.template .underly_stocks_box .underly_stocks {
  font-size: 14px;
}
.template .underly_stocks_box:nth-of-type(6) .form_stocks {
  color: #c4c7d3;
}
.template .underly_stocks_box .form_stocks {
  font-size: 14px;
  padding-left: 55px;
  width: 84%;
}
.template .underly_stocks_box .form_stocks .stocks_kinds {
  width: 68%;
  position: relative;
}
.template .underly_stocks_box .form-stocks_r .stocks_kinds {
  width: 100%;
}
.template .underly_stocks_box .form-stocks_r .payfigure {
  color: #ff302f;
}
.template .underly_stocks_box .form_stocks input {
  background-color: inherit;
  border: 1px solid #7b7f8a;
  border-radius: 3px;
  height: 30px;
  width: 100%;
  font-size: 12px;
  margin-bottom: 5px;
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
.template .underly_stocks_box .form-stocks_r .stocks_kinds .principal p.HL0,
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
.template .help .mui-icon {
  font-size: 18px;
  color: #5195de;
}
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
.template .underly_stocks_box .form-stocks_r .stocks_kinds .principal p.HL0,
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

.template .deal {
  padding: 8px 5px 40px 10px;
}
.template .deal input {
  margin-top: 5px;
  margin-right: 5px;
}
.template .help {
  display: inline-block;
  width: 30%;
  margin: 0 auto;
  margin-right: 5px;
  text-align: right;
  font-size: 13px;
  color: #5195de;
  /* margin-top: 20px; */
}
.template .deal .help:nth-of-type(1) {
  text-align: left;
  margin-left: 0px;
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
#w {
  width: 50%;
}
</style>

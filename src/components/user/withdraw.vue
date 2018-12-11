<template>
  <div class="template">
    <div class="comtainner">
      <div class="user_info">
        <div class="user_info_in flexeable">
          <div class="user_profile">
            <img src="../../../static/images/profile.png" alt="">
          </div>
          <div class="user_name">
            <h3>{{userInfo.Name}}</h3>
            <p>可提现金额：
              <span>{{userInfo.AccountMoney}}</span>元</p>
          </div>
        </div>
      </div>
      <div class="withdraw_money">
        <div class="withdraw_money_box flexeable">
          <span class="withMoney">提现金额</span>
          <input type="text" placeholder="请输入提现金额" class="input_box" v-model="withMoney">
        </div>
        <div class="withdraw_money_box flexeable">
          <span class="service_charge">手续费：2.00元</span>
        </div>
      </div>
      <div class="withdraw_option">
        <div class="option_title">
          <span>提现方式</span>
        </div>
        <div class="option_seclect  flexeable">
          <span class="fz"></span>
          <span>银联提现</span>
          <span class="fz ps"></span>
        </div>
        <form action="">
          <ul>
            <li class="withdraw_money_box flexeable">
              <span class="withMoney pdd">省份城市</span>
              <input type="text" class="input_box" style="padding-left:14px;" disabled @click="seclected">
              <span class="iconfont icon-youjiantou"></span>

            </li>
            <li class="withdraw_money_box flexeable">
              <span class="withMoney pdd">卡号</span>
              <input type="number" class="input_box">
            </li>
            <li class="withdraw_money_box flexeable">
              <span class="withMoney pdd">身份证号</span>
              <input type="text" class="input_box" maxlength="18">
            </li>
            <li class="withdraw_money_box flexeable">
              <span class="withMoney pdd">持卡人</span>
              <input type="text" class="input_box">
            </li>
            <li class="withdraw_money_box flexeable">
              <span class="withMoney pdd">已验证手机</span>
              <input type="number" class="input_box color" v-model="userInfo.Phone" disabled>
            </li>
            <li class="withdraw_money_box flexeable">
              <span class="withMoney pdd">验证码</span>
              <input type="number" style="padding-left:34px;" class="input_box" placeholder="请输入短信验证码">
              <span class="pdd1 getcode" @click="getCode()">获取验证码</span>
            </li>
          </ul>
        </form>
      </div>
      <div class="tips">
        <span>{{Msg}}</span>
      </div>
      <div class="mui-content-padded">
        <!-- <router-link to="/"> -->
        <button id='login' class="mui-btn mui-btn-block mui-btn-danger" disabled>立即提现</button>
        <!-- </router-link> -->
      </div>
      <mt-popup v-model="popupVisible" position="bottom">
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common.js";
import { Popup, Picker, Toast } from "mint-ui";

export default {
  data() {
    return {
      popupVisible: false,
      userInfo: {},
      withMoney: "",
      Msg: "&nbsp;",
      AccountName: "",
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot3",
          textAlign: "left"
        }
      ]
    };
  },
  created() {
    this.getMoney();
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    getMoney() {
      var url = common.apidomain + "/api/Account/GetCurrAccount";
      this.$api.post(url, {}, response => {
        if (response.data.Code == 0) {
          //Toast("查询成功");
          this.userInfo = response.data.Data;
        } else {
          Toast(response.data.Msg);
        }
      });
    },
    seclected() {
      this.popupVisible = this.popupVisible;
    },
    withDraw() {
      var url = common.apidomain + "/api/Account/AccountWithdraw";
      var postData = {
        AccountID: window.userID,
        WithdrawMoney: this.withMoney
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          //Toast("充值成功");
        } else {
          Toast(response.data.Msg);
        }
      });
    },
    getCode() {
      if (this.withMoney == null) {
        Toast("请输入金额");
      } else {
        var counts = 60;
        var i;
        //   $('.getcode').text('60s后重新获取');
        var url = common.apidomain + "/api/Message/SendMessage";
        var postData = {
          Phone: this.userInfo.Phone,
          MessageType: 1
        };
        this.$api.post(url, postData, response => {
          if (response.data.Code == 0) {
            this.Msg = response.data.Msg; //请求成功，response为成功信息参数
            // this.lists = response.data.data;
            if (counts == 0) {
              $(".getcode").text("获取验证码");
              counts = 60;
              clearInterval(i);
            } else {
              $(".getcode").html(counts + "s后重新获取");
              counts--;
              i = setInterval(function() {
                if (counts == 0) {
                  $(".getcode").text("获取验证码");
                  //clearInterval(i);
                } else {
                  $(".getcode").html(counts + "s后重新获取");
                  counts--;
                }
              }, 1000);
            }
          } else {
            // alert(response.msg);//请求失败，response为失败信息
            // console.log(response.data.msg)
            $(".tips").css({ visibility: "visible" });
            $(".tips > span").html(response.data.Msg);
            return false;
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-popup-bottom {
  width: 100%;
}
.comtainner {
  padding: 10px;
  padding-bottom: 30px;
}
.user_info,
.withdraw_money,
.withdraw_money_box,
.option_title,
.option_seclect,
.withdraw_option ul li {
  border-bottom: 1px solid #1c1c20;
}
.withdraw_money,
.option_seclect {
  border-top: 1px solid #1c1c20;
  margin-top: 10px;
}
.user_info_in .user_profile {
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
}
.user_info_in .user_profile img {
  width: 100%;
}
.user_info_in .user_name {
  padding-left: 10px;
}
.user_info_in .user_name h3 {
  font-size: 18px;
  padding-top: 5px;
  color: #c4c7d3;
}
.user_info_in .user_name p {
  font-size: 14px;
  padding-top: 10px;
  color: #c4c7d3;
}
.user_info_in .user_name p span {
  color: #ff302f;
  padding-right: 5px;
}
.withMoney {
  width: 25%;
  padding: 10px 5px;
  font-size: 14px;
}
.option_title span {
  padding: 10px 5px;
}
.input_box {
  width: 75%;
  color: #c4c7d3;
  border: 0;
  font-size: 14px;
  padding-left: 0;
  background-color: inherit;
  margin-bottom: 0px;
}
.service_charge {
  padding: 5px;
  color: #cccccc;
}
.withdraw_option span {
  padding: 10px 5px;
  color: #c4c7d3;
}
.option_seclect span:nth-of-type(2) {
  width: 70%;
}
.iconfont {
  font-size: 35px;
}
.fz {
  width: 30px;
  height: 30px;
  background: url(../../../static/images/icon.png) no-repeat;
  background-position: -266px -182px;
  background-size: 1600%;
  margin-left: 10px;
  margin-right: 10px;
}
.ps {
  background-size: 1600%;
  background-position: -318px -182px;
}
.pdd {
  width: 30%;
}
.withdraw_money_box .pdd1 {
  color: #4fa9ee;
  width: 46%;
  text-align: right;
}
.color {
  color: #4fa9ee;
}
.template .mui-content-padded .mui-btn-danger {
  background-color: #c33f00;
  border: 1px solid #c33f00;
  height: 40px;
  padding: 0px;
  font-size: 16px;
}
.tips {
  visibility: hidden;
  padding: 0px 15px 20px;
}
.tips span {
  color: #ff302f;
}
</style>

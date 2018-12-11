<template>
  <div class="template">
    <div class="recharge_title">
      <h3>默认金额</h3>
    </div>
    <div class="recharge_money_seclect">
      <ul class="flexeable">
        <li>
          <p class="Mony seclected" @click="moneySelect(indexs[0])">
            10
            <i class="pitched"></i>
          </p>
        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[1])">10000
            <i></i>
          </p>

        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[2])">20000
            <i></i>
          </p>

        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[3])">30000
            <i></i>
          </p>

        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[4])">40000
            <i></i>
          </p>

        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[5])">50000
            <i></i>
          </p>

        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[6])">80000
            <i></i>
          </p>

        </li>
        <li>
          <p class="Mony" @click="moneySelect(indexs[7])">99999
            <i></i>
          </p>

        </li>
      </ul>
    </div>
    <div class="recharge_title">
      <h3>自定义金额</h3>
    </div>
    <div class="define_money flexeable">
      <span class="iconfont icon-renminbi"></span>
      <input type="number" placeholder="请输入金额" v-model="money" @focus="onBlur()">
    </div>
    <a href="javascript:;" class="askPrice" @click="charge()">立刻充值</a>
    <div class="deal flexeable">
      <input type="checkbox" v-bind="{checked:'check'}" @click="isChecked">
      <span>我已阅读</span>
      <router-link to="/help" class="help">《支付服务协议》</router-link>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      indexs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      money: "",
      check: true
    };
  },
  methods: {
    moneySelect(index) {
      $(".flexeable > li > p,.flexeable > li > p > i").removeClass(
        "seclected pitched"
      );
      $(
        ".flexeable > li:eq(" +
          index +
          ") > p,.flexeable > li:eq(" +
          index +
          ") > p> i"
      ).addClass("seclected pitched");
      this.money = parseInt($(".flexeable > li:eq(" + index + ") > p").html());
    },
    onBlur() {
      this.money = null;
      $(".flexeable > li > p,.flexeable > li > p > i").removeClass(
        "seclected pitched"
      );
    },
    isChecked() {
      this.check = !this.check;
    },
    charge() {
      if (this.check == false) {
        Toast("请勾选支付服务协议！");
        return;
      }
      var url = common.apidomain + "/api/Account/AccountRecharge";
      var postData = {
        AccountID: window.userID,
        Money: this.money
      };
      this.$api.post(url, postData, response => {
        if (response.data.Code == 0) {
          Toast("充值成功");
          window.location.href = "#/mine/mygold";
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
.template .recharge_title h3 {
  padding: 10px;
  font-size: 14px;
}
.template .recharge_money_seclect,
.template .define_money,
.template .define_money input {
  background-color: #1c1f26;
  margin-bottom: 0px;
}
.template .recharge_money_seclect .flexeable {
  flex-wrap: wrap;
  padding: 0 8px;
}
.template .recharge_money_seclect li {
  width: 33.333%;
  padding: 4px 8px;
}
.template .recharge_money_seclect li p {
  color: #7b7f8a;
  padding: 5px;
  text-align: center;
  border: 1px solid #7b7f8a;
  border-radius: 2px;
  position: relative;
}
.template .recharge_money_seclect li p.seclected {
  border: 1px solid #ff302f;
  color: #ff302f;
  background: rgba(255, 48, 47, 0.05);
}
i.pitched {
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: 16px;
  right: 0;
  bottom: 0;
  background-image: url(../../../static/images/icon-select.png);
}
.template .define_money {
  padding: 20px;
}
.template .define_money input {
  border: 0px;
  font-size: 24px;
}
.template .define_money span {
  color: #c4c7d3;
  padding-top: 10px;
  font-size: 18px;
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
.template .deal {
  padding: 5px;
  padding-left: 10px;
}
.template .deal input {
  margin-top: 5px;
  margin-right: 5px;
}
.template .help {
  font-size: 13px;
  color: #5195de;
  /* margin-top: 20px; */
}
</style>

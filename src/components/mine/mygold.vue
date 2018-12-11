<template>
  <div class="template">
    <div class="account">
      <div class="account_card">
        <div class="account_title">
          账户余额（元）
        </div>
        <div class="account_sum">
          <h3>
            {{money}}
          </h3>
        </div>
        <div class="line"></div>
        <div class="account_function flexeable">
          <router-link to="/user/recharge">
            <div class="account_recharge">
              <span></span>我要充值
            </div>
          </router-link>
          <router-link to="/user/withdraw">
            <div class="account_deposit">
              <span></span>我要提现
            </div>
          </router-link>
        </div>
      </div>
      <div class="account_record">
        <br> 暂无搜索记录
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
      money: 0
    };
  },
  created() {
    this.getMoney();
  },
  methods: {
    getMoney() {
      var url = common.apidomain + "/api/Account/GetCurrAccount";
      this.$api.post(url, {}, response => {
        if (response.data.Code == 0) {
          //Toast("查询成功");
          this.money = response.data.Data.AccountMoney;
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
.template .account {
  width: 100%;
  background-color: #1c1f26;

  padding: 20px;
}
.template .account .account_card {
  width: 100%;
  background-image: linear-gradient(90deg, #ff7c4f, #ff5329);
  border-radius: 8px;
  text-align: center;
  padding: 5px;
}
.template .account .account_card .account_title {
  font-size: 15px;
  color: #ffccbd;
  padding-top: 10px;
}
.template .account .account_card .account_sum h3 {
  font-size: 26px;
  color: #ffe6df;
  font-weight: 400;
}
.template .account .account_card .line {
  width: 90%;
  height: 1px;
  background-color: #ff9470;
  margin: 0 auto;
  margin-top: 20px;
}
.template .account .account_card .account_function a {
  width: 50%;
  padding: 8px;
  padding-top: 10px;
  color: #fff7f5;
}
.template .account .account_card .account_function .account_recharge {
  font-size: 15px;
}
.template .account .account_record {
  text-align: center;
  height: 100%;
}
</style>

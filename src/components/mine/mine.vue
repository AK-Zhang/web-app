<template>
  <div class="template">
    <div class="profile_top">
      <div class="profile_info flexeable">
        <div class="profile_info_left flexeable">
          <div class="profile_img">
            <router-link to="/mine/setting">
              <img src="../../../static/images/profile.png" alt="">
            </router-link>
          </div>
          <div class="profile_info_account">
            <h3>赢在期权</h3>
            <p>账户余额：
              <span>--</span>元</p>
          </div>
        </div>
        <router-link class="profile_info_right" to="/mine/setting">
          <i class="iconfont icon-jiagongjilu"></i>
        </router-link>
      </div>
      <div class="account_tab flexeable">
        <p>
          <router-link to="/user/recharge">充值</router-link>
        </p>
        <p>
          <router-link to="/user/withdraw">
            提现
          </router-link>
        </p>
      </div>
    </div>
    <div class="contents_pro">
      <ul>
        <li class="flexeable">
          <i class="iconfont icon-xiazai10"></i>
          <router-link to="/mine/broker">我的推广</router-link>
          <span>></span>
        </li>
        <li class="flexeable">
          <i class="iconfont icon-xiaoxi1"></i>
          <router-link to="/mine/myNews">我的消息</router-link>
          <span>></span>
        </li>
      </ul>
    </div>
    <div class="contents_pro">
      <ul>
        <li class="flexeable">
          <i class="iconfont icon-dingdandaifukuan"></i>
          <router-link to="/trade/position">我的订单</router-link>
          <span>></span>
        </li>
        <li class="flexeable">
          <i class="iconfont icon-icon--"></i>
          <router-link to="/mine/mygold">资金明细</router-link>
          <span>></span>
        </li>
      </ul>
    </div>
    <div class="contents_pro">
      <ul>
        <li class="flexeable">
          <i class="iconfont icon-qiandinghezuoxieyi"></i>
          <router-link to="/agreement">合作协议</router-link>
          <span>></span>
        </li>
        <li class="flexeable">
          <i class="iconfont icon-kefu"></i>
          <router-link to="/agreement">客服热线</router-link>
          <span>></span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import common from "../../kits/common.js";
import { Toast, Popup } from "mint-ui";
export default {
  name: "mine",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tel: "",
      pwd: "",
      UserI: [],
      isShow: false,
      popupVisible: true
    };
  },
  methods: {
    getUserInfo() {
      var url = common.apidomain + "/api/Account/Login";
      var postData = { phone: this.tel, password: this.pwd };
      this.$apim.post(url, postData, response => {
        if (response.data.Code == 0) {
          console.log(response.data.Msg); //请求成功，response为成功信息参数
          // this.lists = response.data.data;
          window.location.href = "#/mine";
        } else {
          // alert(response.msg);//请求失败，response为失败信息
          // console.log(response.data.msg)
          $(".tips").css({ visibility: "visible" });
          $(".tips > span").html(response.data.msg);
        }
      });
    },
    UserInfo1(list) {
      // console.log(this.$refs.GetUserInfo)
      // this.$refs.GetUserInfo.userInfo;
      this.UserI = list;
      console.log(this.UserI);
    }
  },
  created() {
    // this.getUserInfo()
    // console.log(this.tel)
    this.UserInfo1(this.UserI);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .profile_top {
  width: 100%;
  padding: 20px 10px 10px;
  background-color: #1c1f26;
}
.template .profile_top .profile_info,
.template .profile_top .profile_tab {
  width: 100%;
}
.template .profile_top .profile_info .profile_info_left {
  width: 90%;
}
.template .profile_top .profile_info .profile_info_left .profile_img {
  padding: 5px;
}
.template .profile_top .profile_info .profile_info_left .profile_img img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.template .profile_top .profile_info .profile_info_left .profile_info_account {
  padding: 5px;
}
.template
  .profile_top
  .profile_info
  .profile_info_left
  .profile_info_account
  h3 {
  font-size: 18px;
  color: #c2c4d0;
  padding: 5px;
}
.template
  .profile_top
  .profile_info
  .profile_info_left
  .profile_info_account
  p {
  color: #7b7f8a;
  padding-left: 5px;
}
.template .profile_top .profile_info .profile_info_right {
  width: 10%;
  padding-top: 20px;
  text-align: center;
}
.template .profile_top .profile_info .profile_info_right i {
  font-size: 38px;
  color: #c2c4d0;
}
.template .profile_top .account_tab {
  padding: 5px;
}
.template .profile_top .account_tab p {
  width: 48%;
  border: 1px solid #7b7f8a;
  border-radius: 3px;
  color: #c2c4d0;
  text-align: center;
  padding: 5px;
}
.template .profile_top .account_tab p a {
  color: #c2c4d0;
  display: block;
  width: 100%;
}
.template .profile_top .account_tab p:nth-of-type(2) {
  margin-left: 20px;
}
.template .contents_pro {
  width: 100%;
  padding: 10px;
  background-color: #1c1f26;
  margin-top: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.template .contents_pro ul li {
  border-bottom: 1px solid #272e38;
  padding: 5px 0px;
  line-height: 29px;
}
.template .contents_pro ul li:nth-last-child(1) {
  border-bottom: none;
}
.template .contents_pro ul li i {
  width: 70px;
  padding-left: 5px;
  font-size: 24px;
  padding-top: 8px;
  color: #ff302f;
}
.template .contents_pro:nth-of-type(2) ul li i {
  font-size: 20px;
}
.template .contents_pro:nth-of-type(3) ul li i {
  font-size: 26px;
  margin-left: -2px;
}
.template .contents_pro ul li a {
  display: block;
  color: #c2c4d0;
  margin-bottom: 0px;
  font-size: 14px;
  padding: 5px;
  width: 100%;
}
.template .contents_pro ul li span {
  font-family: Simsun;
  padding-top: 5px;
  font-size: 20px;
}
</style>

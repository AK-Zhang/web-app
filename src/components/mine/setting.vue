<template>
  <div class="template">
    <div class="profile">
      <div class="profile_tx">
        <img class="profile_img" src="../../../static/images/profile.png" alt="">
        <input accept="image/*" type="file" class="mine-file">
        <i class="camera"></i>
      </div>
    </div>
    <div class="profile_info">
      <div>
        <span>昵称</span>
        <span>赢在期权6601</span>
      </div>
      <div>
        <span>手机号码</span>
        <span>155****6601</span>
      </div>
      <div>
        <span>登陆密码</span>
        <router-link to="/mine/ModifyPwd">修改密码</router-link>
      </div>
    </div>

    <div class="exit">
      <a href="javascript:;">
        <span>
          <i class="iconfont icon-dianyuan"></i>退出系统</span>
      </a>
    </div>
    <!-- 下侧弹出 -->
    <mt-popup class="mine-alert-bottom" v-model="popupVisible" position="bottom">
      <ul class="mine-photo">
        <li class="mine-t-photo">拍照</li>
        <li class="mine-open-photo">打开相册</li>
        <li class="mine-open-cancel" @click="popup">取消</li>
      </ul>
    </mt-popup>
  </div>
</template>

<script>
import common from "../../kits/common.js";
// import { Toast,Popup } from "mint-ui";
export default {
  name: "aboutUs",
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    popup() {
      this.popupVisible = !this.popupVisible;
    },
    getUserInfo() {
      var url = common.apidomain + "/api/Account/UpdatePassword";
      var postData = {
        AccountID: 0,
        OldPassword: this.old_pwd,
        NewPassword: this.new_pwd
      };
      this.$api.post(url, postData, response => {
        if (response.data.code == 0) {
          console.log(response.data.msg); //请求成功，response为成功信息参数
          $(".tips").css({ visibility: "hidden" });
          alert("密码修改成功");
          window.location.href = "#/mine/setting";
        } else {
          // alert(response.msg);//请求失败，response为失败信息
          // console.log(response.data.msg)
          $(".tips").css({ visibility: "visible" });
          $(".tips > span").html(response.data.msg);
        }
      });
    },
    setPhoto() {
      // var url = common.apidomain + "/api/Pictures";
      var url = "http://home.yzqq360.com:8503/realTimePrice"
      var postData = {
        AccountID: 0,
        OldPassword: this.old_pwd,
        NewPassword: this.new_pwd
      };
      this.$api.post(url, postData, response => {
        if (response.data.code == 0) {
          console.log(response.data.msg); //请求成功，response为成功信息参数
          $(".tips").css({ visibility: "hidden" });
          alert("密码修改成功");
          window.location.href = "#/mine/setting";
        } else {
          // alert(response.msg);//请求失败，response为失败信息
          // console.log(response.data.msg)
          $(".tips").css({ visibility: "visible" });
          $(".tips > span").html(response.data.msg);
        }
      });
    }
    // Exit() {
    //   var url = common.apidomain + "/api/Account/Logout";
    //   this.$api.post(url, {}, response => {
    //     // if (response.data.Code == 0) {
    //     //   //console.log(response.data.Msg); //请求成功，response为成功信息参数
    //     //   // this.lists = response.data.data;
    //     //   //window.location.href = "#/mine";
    //     //   Toast(response.data.Msg);
    //     // } else {
    //     //   Toast(response.data.Msg);
    //     // }
    //     Toast("1");
    //   });
    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  text-align: center;
  background-color: #1c1f26;
}
.profile .profile_tx {
  position: relative;
  width: 80px;
  margin: 0 auto;
}
.profile .profile_img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.profile .camera {
  position: absolute;
  width: 24px;
  height: 24px;
  /* background-color: #FF302F; */
  border-radius: 50%;
  bottom: 40px;
  right: 0px;
  background-image: url(../../../static/images/icon-edit-head.png);
  background-size: cover;
}
.profile_info {
  margin-top: 10px;
  background-color: #1c1f26;
  padding-left: 15px;
}
.profile_info div {
  border-bottom: 1px solid #272e38;
  padding: 12px 0px;
}
.profile_info div:nth-of-type(3) {
  border-bottom: 0px;
}
.profile_info div span:nth-of-type(1) {
  display: inline-block;
  width: 75px;
}
.profile_info div span:nth-of-type(2) {
  color: #c4c7d3;
}
.profile_info div a {
  color: #58abeb;
}
.exit {
  position: fixed;
  width: 100%;
  bottom: 100px;
  text-align: center;
}
.exit a span {
  position: relative;
}
.exit a span i {
  position: absolute;
  top: 0px;
  left: -20px;
}

.mine-alert-bottom {
  width: 100%;
  text-align: center;
}
.mine-photo {
  background-color: #15161b;
}
.mine-photo li {
  background-color: #1c1f26;
  padding: 10px;
  color: #c2c4d0;
  border-bottom: 1px solid #15161b;
}
.mine-photo li:nth-last-child(1) {
  margin-top: 10px;
  border-bottom: none;
}
.mine-file {
  display: block;
  width: 80px;
  height: 80px;
  background-color: initial;
  border-radius: 50%;
  position: absolute;
  bottom: 44px;
  right: 0px;
  z-index: 999;
  text-indent: -10000px;
}
</style>

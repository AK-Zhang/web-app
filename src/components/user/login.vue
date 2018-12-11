<template>
  <div class="template">
    <div class="user_login">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label class="red">
            <span class="mui-icon-extra mui-icon-extra-phone"></span>
          </label>
          <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="tel">
        </div>
        <!-- <div class="mui-input-row">
                <label><span class="mui-icon-extra mui-icon-extra-university"></span></label>
                <input type="text" class="mui-input-clear" placeholder="请选择机构" data-input-clear="3">
                <span class="mui-icon mui-icon-clear mui-hidden"></span>
                <span class="mui-icon mui-icon-clear mui-icon-arrowdown"></span>
            </div> -->
        <div class="mui-input-row mui-plus-hidden">
          <label>
            <span class="mui-icon mui-icon-locked"></span>
          </label>
          <input type="password" id="pwd" class="mui-input-speech mui-input-clear" placeholder="请输入密码" data-input-clear="4" data-input-speech="4" v-model="pwd">
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
          <span class="mui-icon mui-icon-clear iconfont icon-bukejian" @click="changeEye"></span>
        </div>
      </form>
      <div class="tips">
        <span>请输入正确手机号</span>
      </div>
      <div class="mui-content-padded">
        <!-- <router-link to="/"> -->
        <button id='login' class="mui-btn mui-btn-block mui-btn-danger" @click="getUserInfo">登录</button>
        <!-- </router-link> -->
        <div class="link-area">
          <router-link to="/forgetPassword" id='forgetPassword'>忘记密码</router-link>
          <router-link to="/register" id='reg'>立刻注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../../kits/common.js";
export default {
  name: "login",
  data() {
    return {
      tel: "",
      pwd: "",
      isTrue: true
    };
  },
  methods: {
    getUserInfo() {
      if (this.tel.length != 11) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入正确的手机号");
        this.tel = "";
      } else if (this.pwd.length < 6) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入正确密码");
        this.pwd = "";
      } else {
        var url = common.apidomain + "/api/Account/Login";
        var postData = { phone: this.tel, password: this.pwd };
        this.$api.post(url, postData, response => {
          if (response.data.Code == 0) {
            window.loginToken = response.data.Data.AccessToken;
            window.userID = response.data.Data.UserID;
            window.userName = response.data.Data.UserName;
            //window.location.href = "#/indexpage";
            this.$router.go(-1);
          } else {
            $(".tips").css({ visibility: "visible" });
            $(".tips > span").html(response.data.Msg);
            this.tel = "";
            this.pwd = "";
          }
        });
      }
    },
    changeEye() {
      $(".iconfont")
        .toggleClass("icon-bukejian")
        .toggleClass("icon-icon");
      if (this.isTrue) {
        $("#pwd").attr("type", "text");
        this.isTrue = !this.isTrue;
      } else {
        $("#pwd").attr("type", "password");
        this.isTrue = !this.isTrue;
      }
    }
    // 验证手机号
    // isPoneAvailable (pone) {
    //     var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    //     if (!myreg.test(pone)) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .user_login {
  padding: 5px;
}
.template .user_login .mui-input-group {
  background-color: transparent;
  padding: 30px 0px;
}
.template .user_login .mui-input-group::before,
.template .user_login .mui-input-group::after {
  height: 0px;
}
.template .user_login .mui-input-group .mui-input-row {
  padding-top: 20px;
  height: 60px;
}
.template .user_login .mui-input-group .mui-input-row::after {
  background-color: #888;
  right: 15px;
}
.template .user_login .mui-input-group .mui-input-row label {
  width: 20%;
}
.template .user_login .mui-input-group .mui-input-row input {
  width: 80%;
  font-size: 15px;
}
.template .user_login .mui-input-group .mui-input-row .mui-icon-clear {
  top: 37px;
  right: 10px;
}
.template .user_login .mui-content-padded .mui-btn-danger {
  background-color: #c33f00;
  border: 1px solid #c33f00;
  height: 40px;
  padding: 0px;
  font-size: 16px;
}
.template .user_login .mui-content-padded .link-area {
  display: flex;
}
.template .user_login .mui-content-padded .link-area a {
  display: block;
  width: 48%;
  cursor: pointer;
}
.template .user_login .mui-content-padded .link-area #forgetPassword {
  color: #888;
}
.template .user_login .mui-content-padded .link-area #reg {
  text-align: right;
  margin-left: 5px;
}
.tips {
  visibility: hidden;
  padding: 0px 15px 20px;
}
.tips span {
  color: #ff302f;
}
</style>

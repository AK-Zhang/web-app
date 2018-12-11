<template>
  <div class="template">
    <div class="user_login">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>
            <span class="mui-icon-extra mui-icon-extra-university"></span>
          </label>
          <input type="text" class="mui-input-clear T-code" v-model="institytionCode" placeholder="请填写机构编码" data-input-clear="3">
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
        </div>
        <div class="mui-input-row">
          <label class="red">
            <span class="iconfont icon-phone"></span>
          </label>
          <input type="number" v-model="tel" placeholder="请输入手机号">
        </div>
        <div class="mui-input-row mui-plus-hidden">
          <label>
            <span class="iconfont icon-duanxinyanzhengma"></span>
          </label>
          <input type="number" class="mui-input-speech mui-input-clear" v-model="verifyCode" placeholder="请输入验证码" data-input-clear="4" data-input-speech="4">
          <span class="getcode" @click="getCode()">获取验证码</span>
        </div>
        <div class="mui-input-row mui-plus-hidden">
          <label>
            <span class="iconfont icon-suo1"></span>
          </label>
          <input type="password" class="pwd mui-input-speech mui-input-clear" v-model="pwd" placeholder="请输入6-12位密码" data-input-clear="4" data-input-speech="4">
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
          <span class="mui-icon mui-icon-clear iconfont1 iconfont icon-bukejian" @click="changeEye"></span>
        </div>
        <div class="mui-input-row mui-plus-hidden">
          <label>
            <span class="iconfont icon-mimaqueren"></span>
          </label>
          <input type="password" class="pwd mui-input-speech mui-input-clear" v-model="affirmPwd" placeholder="请再次输入6-12位密码" data-input-clear="4" data-input-speech="4">
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
          <span class="mui-icon mui-icon-clear iconfont1 iconfont icon-bukejian" @click="changeEye"></span>
        </div>
      </form>
      <div class="tips">
        <span>请输入正确手机号</span>
      </div>
      <div class="mui-content-padded">
        <button id='login' class="mui-btn mui-btn-block mui-btn-danger" @click="useRegister">立刻注册</button>
        <div class="link-area">
          <input type="checkbox" class="checksty" v-model="isTrue">
          <a id='forgetPassword'>我已阅读并同意</a>
          <router-link to="/agreement" id='reg'>《用户协议》</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/js/register.js";
import common from "../../kits/common.js";
export default {
  name: "register",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      institytionCode: "", //机构编码
      tel: "", //手机号
      verifyCode: "", //验证码
      pwd: "", //密码
      affirmPwd: "", //确认密码
      isTrue: true
    };
  },
  methods: {
    getCode() {
      var counts = 60;
      var i;
      //   $('.getcode').text('60s后重新获取');

      if (this.tel.length < 11) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入正确的手机号");
        this.tel = "";
        return false;
      } else {
        var url = common.apidomain + "/api/Message/SendMessage";
        var postData = {
          Phone: this.tel,
          MessageType: 0
        };
        this.$api.post(url, postData, response => {
          if (response.data.Code == 0) {
            console.log(response.data.Msg); //请求成功，response为成功信息参数
            // this.lists = response.data.data;
            if (this.countdown == 0) {
              $(".getcode").text("获取验证码");
              counts = 60;
              clearInterval(i);
            } else {
              $(".getcode").html(counts + "s后重新获取");
              counts--;
              i = setInterval(function() {
                if (counts == 0) {
                  $(".getcode").text("获取验证码");
                  this.countdown = 60;
                  clearInterval(i);
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
    },
    useRegister() {
      console.log(this.isTrue);
      if (this.institytionCode.length == 0) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入机构编码");
      } else if (this.tel.length == 0) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入手机号");
      } else if (this.verifyCode.length == 0) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入验证码");
      } else if (this.pwd.length == 0) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请设置6-12位密码");
      } else if (this.affirmPwd.length == 0 || this.affirmPwd !== this.pwd) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("密码不一致，请重新输入");
        this.affirmPwd = "";
      } else if (this.isTrue == false) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请勾选并同意用户协议");
      } else {
        var url = common.apidomain + "/api/Account/Register";
        var postData = {
          AgentCode: this.institytionCode,
          Phone: this.tel,
          Password: this.pwd,
          Code: this.verifyCode
        };
        this.$api.post(url, postData, response => {
          if (response.data.code == 0) {
            console.log(response.data.msg); //请求成功，response为成功信息参数
            // this.lists = response.data.data;
            window.location.href = "#/login";
          } else {
            // alert(response.msg);//请求失败，response为失败信息
            // console.log(response.data.msg)
            $(".tips").css({ visibility: "visible" });
            $(".tips > span").html(response.data.msg);
          }
        });
      }
    },
    changeEye() {
      $(".iconfont1")
        .toggleClass("icon-bukejian")
        .toggleClass("icon-icon");
      if (this.isTrue) {
        $(".pwd").attr("type", "text");
        this.isTrue = !this.isTrue;
      } else {
        $(".pwd").attr("type", "password");
        this.isTrue = !this.isTrue;
      }
    }
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
.template .user_login .mui-input-group .mui-input-row label span {
  font-size: 24px;
}
.template .user_login .mui-input-group .mui-input-row:nth-of-type(3) label span,
.template
  .user_login
  .mui-input-group
  .mui-input-row:nth-of-type(4)
  label
  span {
  font-size: 18px;
  padding-left: 3px;
}
.template .user_login .mui-input-group .mui-input-row input {
  width: 80%;
  font-size: 15px;
}
.template .user_login .mui-input-group .mui-input-row .mui-icon-clear {
  top: 30px;
  right: 10px;
}
.template .user_login .mui-input-group .mui-input-row:nth-of-type(3) .getcode {
  position: absolute;
  right: 15px;
  bottom: 8px;
  color: #0e6aff;
  width: 150px;
  text-align: right;
}
.template .user_login .mui-content-padded .mui-btn-danger {
  background-color: #c33f00;
  border: 1px solid #c33f00;
  height: 40px;
  padding: 0px;
  font-size: 16px;
}
.template .user_login .mui-content-padded .link-area a {
  /* display: inline-block;
    width: 48%; */
  cursor: pointer;
}
.template .user_login .mui-content-padded .link-area #forgetPassword {
  color: #888;
}
/* .template .user_login .mui-content-padded .link-area #reg {
    text-align: right;
    margin-left: 5px;
} */
.template .user_login .mui-content-padded .checksty {
  /* visibility: hidden; */
}
.tips {
  visibility: hidden;
  padding: 0px 15px 20px;
}
.tips span {
  color: #ff302f;
}
</style>

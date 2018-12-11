<template>
    <div class="template">
        <div class="Modify_pwd">
            <div class="old_pwd_box flexeable">
                <span class="old_pwd">旧密码</span>
                <input type="password" placeholder="请填写旧密码" v-model="old_pwd">
            </div>
            <div class="new_pwd_box flexeable">
                <span class="new_pwd">新密码</span>
                <input type="password" placeholder="请填写6~12位新密码" v-model="new_pwd">
            </div>
            <div class="new_pwd_box flexeable">
                <span class="new_pwd">确认密码</span>
                <input type="password" placeholder="请重复6~12位新密码" v-model="new_pwd_affirm">
            </div>
        </div>
        <div class="tips">
            <span>请输入原密码</span>
        </div>
        <a href="javascript:;" class="askPrice" @click="getUserInfo">提交</a>
    </div>
</template>

<script>
import common from "../../kits/common.js";
import { Toast } from "mint-ui";
export default {
  name: "aboutUs",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      old_pwd: "",
      new_pwd: "",
      new_pwd_affirm: ""
    };
  },
  methods: {
    getUserInfo() {
      if (this.old_pwd.length == 0) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请输入原密码");
      } else if (this.new_pwd.length == 0) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("请设置新密码");
      } else if (
        this.new_pwd_affirm.length == 0 ||
        this.new_pwd_affirm !== this.new_pwd
      ) {
        $(".tips").css({ visibility: "visible" });
        $(".tips > span").html("两次输入不一致");
      } else {
        var url = common.apidomain + "/api/Account/UpdatePassword";
        var postData = {
          AccountID: 0,
          OldPassword: this.old_pwd,
          NewPassword: this.new_pwd
        };
        this.$api.post(url, postData, response => {
          if (response.data.Code == 0) {
            console.log(response.data.Msg); //请求成功，response为成功信息参数
            $(".tips").css({ visibility: "hidden" });
            Toast("密码修改成功");
            window.location.href = "#/mine/setting";
          } else {
            // alert(response.msg);//请求失败，response为失败信息
            // console.log(response.data.msg)
            $(".tips").css({ visibility: "visible" });
            $(".tips > span").html(response.data.msg);
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Modify_pwd {
  background-color: #1c1f26;
}
.Modify_pwd div {
  padding: 15px;
  border-bottom: 1px solid #272e38;
}
.Modify_pwd div span {
  width: 100px;
}
.Modify_pwd div input {
  margin-bottom: 0px;
  background-color: #1c1f26;
  border: 0;
  font-size: 14px;
  height: 0;
}
.template .askPrice {
  display: block;
  width: 90%;
  background-color: #c33f00;
  margin: 0 auto;
  margin-top: 19px;
  text-align: center;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
}
.tips {
  visibility: hidden;
  padding: 20px 15px 0;
}
.tips span {
  color: #ff302f;
}
</style>

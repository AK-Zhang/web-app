<template>
  <div class="template">
    <div class="broker">
        <div class="broker_form">
            <div class="phone flexeable">
                <label class="iconfont icon-shouji"></label><input type="text" value="15537156601" readonly>
            </div>
            <div class="name flexeable">
                <label class="iconfont icon-yonghu"></label><input type="text" placeholder="输入您的真实姓名">
            </div>
            <div class="institution flexeable">
                <label class="iconfont icon-suo"></label><input type="text" value="默认机构：1002" readonly>
            </div>
            <div class="code flexeable">
                <label class="iconfont icon-zitishezhi"></label><input type="text" placeholder="验证码"><span class="getcode" @click="getCode()">获取验证码</span>
            </div>
            <div class="tips">
                <span>请输入正确的姓名</span>
            </div>
            <router-link to="/help" class="askPrice submt" disabled="true">提交申请</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '推广',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      getCode () {
          var counts = 60;
          var i;
        //   $('.getcode').text('60s后重新获取');
            if (this.countdown == 0) { 
                $('.getcode').text('重新获取验证码'); 
                counts = 60;
                clearInterval(i);
                } else { 
                $('.getcode').html( counts + 's后重新获取'); 
                counts--;
                 
                i = setInterval(function() { 
                    if (counts == 0) { 
                    $('.getcode').text('重新获取验证码'); 
                    this.countdown = 60; 
                    clearInterval(i);
                    } else { 
                    $('.getcode').html(counts + 's后重新获取'); 
                    counts--; 
                    }
                },1000) 
            }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .broker{
    background-color: #1C1F26;
}
.template .broker .broker_form {
    padding: 20px;
}
.template .broker .broker_form input {
    padding-left: 50px;
    color: #DCDCDC;
    border: 1px solid #15161B;
    background-color: #15161B;
    font-size: 14px;
}
.template .broker .broker_form .flexeable {
    position: relative;
}
.template .broker .broker_form .flexeable label {
    position: absolute;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #272b3b;
    border-radius: 3px 0 0 3px;
    font-size: 24px;
}
.template .broker .broker_form .flexeable span {
    position: absolute;
    height: 40px;
    right: 0px;
    padding: 10px 20px;
    color: #5195DE;
    border-left: 1px solid #1C1F26;
    background-color: #272b3b;
}
.template .askPrice {
    display: block;
    width: 100%;
    background-color: #58ABEB;
    margin: 20px auto;
    margin-bottom: 83%;
    text-align: center;
    color: #fff;
    padding: 10px;
    font-size: 16px;
    border-radius:3px; 
}
.template .submt {
    background-color: #272B3B;
    color: #7B7F8A;
}
.tips span {
    color: #ff5329
}
</style>

<template>
    <div class="template">
        <div class="newsInfo">
            <h3>海航控股(600221)签订重组框架协议拟收购多项航空业资产</h3>
            <p class="resource_t">
                <span>来源：</span>
                <span>全景网</span>
                &nbsp;
                <span>2018-03-23 20:58:32</span>
            </p>
            <div class="line"></div>
            <p class="contents_n">
                全景网3月23日讯 海航控股(600221)周五晚公告，公司与交易对方签订重组框架协议，拟以发行股份、支付现金等方式分别购买海航航空集团持有的天羽飞训、海航技术及SRT全部或部分股权；购买海航集团及其控制下的相关企业直接或间接持有的桂林航空、西部航空、海航酒店控股及某境外酒店企业全部或部分股权。公司存在实控人变更的可能性，预计不构成借壳上市。公司拟申请股票自4月10日起继续停牌不超2个月。
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "newsInfo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .newsInfo {
  width: 100%;
  padding: 10px;
  background-color: #1c1f26;
}
.template .newsInfo h3 {
  font-size: 20px;
  line-height: 25px;
  color: #c2c4d0;
}
.template .newsInfo .resource_t {
  text-align: center;
  font-size: 14px;
}
.template .newsInfo .line {
  height: 1px;
  background-color: #333;
}
.template .newsInfo .contents_n {
  padding-top: 10px;
  color: #c2c4d0;
  font-size: 15px;
  letter-spacing: 2px;
}
</style>

<template>
    <div class="template">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse mui-active" v-bind:class="'mui-table-view-cell'+indexs[0]">
                <a class="mui-navigate-right" href="javascript:;" @click="open(indexs[0])">1、名义本金</a>
                <div class="mui-collapse-content">
                    <p>
                        名义本金是指交易双方在协议中所确定的合约规模，即要进行交易的资金数额，简单的理解就是您想要买入或卖出的投资标的市值。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="javascript:;" @click="open(indexs[1])">2、行权周期</a>
                <div class="mui-collapse-content">
                    <p>
                        期权未来到期的时间。如果行权周期为一个月，则期权在一个月后到期。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="javascript:;" @click="open(indexs[2])">3、权利金比例</a>
                <div class="mui-collapse-content">
                    <p>
                        按照名义本金应交付权利金的百分比，一般来说不同品种、不同行权周期的权利金比例也不相同。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="javascript:;" @click="open(indexs[3])">4、到期日期</a>
                <div class="mui-collapse-content">
                    <p>
                        到期日即是指期权合约所规定的，期权购买者可以实际执行该期权的最后日期。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="javascript:;" @click="open(indexs[4])">5、交易方式</a>
                <div class="mui-collapse-content">
                    <p>
                        现支持市价交易、限价交易、均价交易。
                    </p>
                    <p>
                        市价交易，是指不限定价格，按照市场上可执行的最优报价委托成交
                    </p>
                    <p>
                        限价交易，是指根据限定的委托价格，以最大的成交可能性委托成交。
                    </p>
                    <p>
                        均价交易，是指以当天或次日指定一段时间内的行情均价委托成交。
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import '../../../static/mui/js/mui.min.js'

export default {
  name: "aboutUs",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      //isTrue: true,
      indexs: [0, 1, 2, 3, 4]
    };
  },
  methods: {
    open(index) {
      //if (this.isTrue) {
      $(".mui-table-view > li:eq(" + index + ")")
        .siblings()
        .removeClass("mui-active");
      $(".mui-table-view > li:eq(" + index + ")").addClass("mui-active");
      this.isTrue = false;
      //   } else {
      //     $(".mui-table-view > li")
      //       .siblings()
      //       .removeClass("mui-active");
      //     this.isTrue = true;
      //   }
      //   console.log(this.isTrue);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .mui-table-view::after,
.template .mui-table-view-cell::after {
  height: 0px;
}
.template .mui-table-view .mui-table-view-cell .mui-navigate-right {
  background-color: #1c1f26;
  color: #ff302f;
  height: 52px;
  line-height: 30px;
  border-bottom: 1px solid #272e38;
}
.template .mui-table-view .mui-table-view-cell .mui-collapse-content {
  background-color: #15161b;
  border-bottom: 0px;
}
.template .mui-table-view .mui-table-view-cell .mui-collapse-content p {
  color: #c2c4d0;
  padding: 5px;
  text-indent: 2em;
}
</style>

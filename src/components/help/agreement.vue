<template>
    <div class="template">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse" :class="CName + indexs[0]" @click="open(indexs[0])">
                <a class="mui-navigate-right" href="javascript:;">1、客户须知</a>
                <div class="mui-collapse-content">
                    <p>
                        一、客户参与场外期权交易须遵守中国证监会的相关规定，严禁内幕交易、异常交易。 二、在参与场外期权交易前，客户须对期权工具进行系统、全面地学习与掌握；了解期权工具的特点，知晓该工具的风险。 三、用期权参与股票二级市场和直接参与会有一些不同，请在参与前详细了解场外期权关于特殊情况下的规定。 四、参与期权交易前，请仔细阅读《风险揭示书》，理解其中各项说明 五、参与期权交易前，请确认自己有相应名义本金规模的风险承受能力，不要参与超出自身承受能力范围的交易。 六、客户参与期权交易的资金须为合法所得，不接受来路不明的资金参与交易。 七、在资金流转过程中可能产生手续费，该费用由本软件系统按第三方支付公司标准代扣。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse" :class="CName + indexs[1]" @click="open(indexs[1])">
                <a class="mui-navigate-right" href="javascript:;">2、风险揭示书</a>
                <div class="mui-collapse-content">
                    <p>作为“赢在期权”期权投资建议人需充分了解并愿意承担场外期权投资以下风险： 1.最大可能损失：与普通金融工具相比，您所建议的场外期权交易具有一定的杠杆性，波动性强，会放大收益或损失，属于高风险投资品种。由于各种风险因素的存在，所预期的规避风险、保值、获利等目标不一定能够实现，计划的资产有可能大幅贬值，甚至可能发生全部亏损。 2.市场风险：由于货币政策、财政政策、产业政策等国家政策及法律法规的变化，或者政治、金融及宏观经济形势变化，导致市场利率变化和证券价格波动影响您所建议的交易合约价值变化，从而导致本软件平台在您所建议的交易发生损失，您在本软件平台所预期的规避风险、保值、获利等交易目标不一定能够实现。 3．流动性风险：一方面，由于市场交易不够活跃，无法及时满足本软件平台希望达成交易的要求，从而可能影响本软件平台实现特定的财务目标或预期的风险管理目标。另一方面，本软件平台应支付现金的规模大于本软件平台存量资金而导致本软件平台违约或发生流动性危机。 4.操作风险：在实际执行过程中，因不完善或有问题的内部流程、人员及系统或外部事件等可能造成的履约损失。 5.法律风险：因法律法规、监管要求或市场规则变化，使您建议的交易不能被有效执行导致损失的风险；在本软件平台出现履约项下约定的违约事件或终止事件时，本软件平台将面临被相关合作机构提前终止交易，或本软件平台提交的履约保障品被相关合作机构依约进行处置的风险，可能会给本软件平台造成经济损失。 6.信用风险：相关合作机构未履行合约项下约定的各项义务而造成本软件平台的损失。 7.技术风险：在履约过程中，可能因为技术系统的故障或者差错而影响对冲交易的正常进行或者影响投资建议人投资策略收益。 8.合同变更风险：在合同签署后，建议执行情况有可能因法律、法规、规章、中国证监会的规定、证券登记结算机构业务规则、证券交易所交易规则以及其他原因进行修订或者变更。投资建议人存在不同意变更合同的条款又没在规定的时间内退出，视同同意变更的风险。 9．提前终止风险：投资建议执行期间，若出现合同约定的终止事件（由于不可抗力或政府行为或法律、法规、监管规则的变化导致该业务不再具有合法性或导致任何一方丧失履行能力），则本计划可能面临提前终止风险。以上提示可能发生的风险由投资建议人自行承担，投资有风险，建议需谨慎。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse" :class="CName + indexs[2]" @click="open(indexs[2])">
                <a class="mui-navigate-right" href="javascript:;">3、权利金比例</a>
                <div class="mui-collapse-content">
                    <p>
                        名义本金是指交易双方在协议中所确定的合约规模，即要进行交易的资金数额，简单的理解就是您想要买入或卖出的投资标的市值。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse" :class="CName + indexs[3]" @click="open(indexs[3])">
                <a class="mui-navigate-right" href="javascript:;">4、到期日期</a>
                <div class="mui-collapse-content">
                    <p>
                        名义本金是指交易双方在协议中所确定的合约规模，即要进行交易的资金数额，简单的理解就是您想要买入或卖出的投资标的市值。
                    </p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse" :class="CName + indexs[4]" @click="open(indexs[4])">
                <a class="mui-navigate-right" href="javascript:;">5、交易方式</a>
                <div class="mui-collapse-content">
                    <p>
                        名义本金是指交易双方在协议中所确定的合约规模，即要进行交易的资金数额，简单的理解就是您想要买入或卖出的投资标的市值。
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import '../../../static/mui/js/mui.min.js'

export default {
  name: "agreement",
  data() {
    return {
      isTrue: true,
      indexs: [1, 2, 3, 4, 5],
      CName: "mui-table-view-cell"
    };
  },
  methods: {
    open(index) {
      $(".mui-table-view-cell").removeClass("mui-active");
      $(".mui-table-view-cell" + index).addClass("mui-active");
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

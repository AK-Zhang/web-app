<template>
  <div class="template">
      <div class="referPriceResult" v-if="isShow">
          <div class="referPriceResult_box">
            <div class="result_title flexeable">
                <h3>询价结果</h3>
                <span @click="closeAlert()">×</span>
            </div>
            <div class="result_info">
                <ul>
                    <li>
                        <div class="info_left">标的股票：</div>
                        <div class="info_right">{{stockName}}</div>
                    </li>
                    <li>
                        <div class="info_left">名义本金：</div>
                        <div class="info_right">{{stockName}}</div>
                    </li>
                    <li>
                        <div class="info_left">行权周期：</div>
                        <div class="info_right">{{stockName}}</div>
                    </li>
                    <li>
                        <div class="info_left">报价比例：</div>
                        <div class="info_right">{{stockName}}</div>
                    </li>
                    <li>
                        <div class="info_left">权利金：</div>
                        <div class="info_right">{{stockName}}</div>
                    </li>
                </ul>
            </div>
            <div class="result_rate">
                <table>
                    <tr>
                        <td>预期涨幅</td>
                        <td>盈亏比例</td>
                        <td>盈利金额</td>
                    </tr>
                    <tr>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                </table>
            </div>
            <a href="javascript:;" class="askPrice">立即认购</a>
          </div>
      </div>
  </div>
</template>

<script>
import common from '../../../kits/common.js';

export default {
  name: 'referprice',
  props:['principals','isShow','info'],
  data () {
    return {
      indexs: [0,1,2,3,4,5],
      index: [],
      list: [],//用于接收行权周期
      list_s: [],//用于接收股票列表
      pams:'',//用于股票名字和id
      currentPrice:'12.25',//当前价格
      stockId:'',//股票id
      stockName:'',//股票名称
      principal:20,//名利本金
      VestPeriod:'',//行权周期
      
    }
  },
  created () {
    //this. getPerid();
    //   this.getStorks(this.sort);
    //   this.defaStock(this.list_s)
    //this. randomDisplay() 
  },
  methods: {
       randomDisplay () {
           var randomNumber = parseInt(Math.random()*100);
           console.log(randomNumber)
           var url = common.apidomain + '/api/Stock/GetPagedList';
            var postData = {
                            "codeOrName":randomNumber,
                            "PageNo":1,
                            "PageSize":1,
                            "ResetPageNo":false,
                            "PageCount":1,
                            "RecordCount" :1,
                            "containDisabled":false
                           }
            this.$api.post(url, postData, response => {
                     if (response.data.code == 0) {
                        console.log(response.data.msg);//请求成功，response为成功信息参数
                        this.list_s = response.data.data;
                        this.stockName = this.list_s[0].name +' '+ this.list_s[0].code;
                        this.currentPrice = this.list_s[0].sell;
                        console.log(this.stockName)
                     } else {
                        alert(response.data.msg);//请求失败，response为失败信息
                     }
                });
       },
       closeAlert (){
           this.isShow = !this.isShow;
           this.changeBgc ()
       },
       changeBgc (){
           if(this.isShow){
               $('.underly_stocks_box').css('background-color','#15161B')
           }else {
               $('.underly_stocks_box').css('background-color','#1C1F26')
           }
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template {
    position: relative;
}
.template .askPrice {
    display: block;
    width: 95%;
    background-color: #C33F00;
    margin: 0 auto;
    margin-top: 19px;
    text-align: center;
    color: #fff;
    padding: 10px;
    font-size: 16px;
    border-radius:3px; 
}
.template .referPriceResult {
    position: fixed;
    width: 100%;
    /* height: 100%; */
    padding: 25% 10%;
    top: 0;
}
.template .referPriceResult .referPriceResult_box {
    width: 100%;
    height: 100%;
    background-color: #1C1F26;
    padding: 10px;
}
.template .referPriceResult .referPriceResult_box .result_title {
    position: relative;
    padding: 10px;
}
.template .referPriceResult .referPriceResult_box .result_title h3 {
    width: 100%;
    color: #C4C7D3;
    font-size: 16px;
    text-align: center;
}
.template .referPriceResult .referPriceResult_box .result_title span {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 28px;
    padding: 10px;
    padding-right: 5px;
}
.template .referPriceResult .referPriceResult_box .result_info {
    padding: 0px 10px 10px;
}
.template .referPriceResult .referPriceResult_box .result_info ul li {
    padding: 8px 0px;
    display: flex;
}
.template .referPriceResult .referPriceResult_box .result_info ul li div:nth-of-type(1) {
    width: 30%;
}
.template .referPriceResult .referPriceResult_box .result_info ul li div:nth-of-type(2) {
    width: 70%;
    text-align: right;
    color: #C4C7D3;
}
.template .referPriceResult .referPriceResult_box .result_info ul li:nth-of-type(2) div:nth-of-type(2),
.template .referPriceResult .referPriceResult_box .result_info ul li:nth-of-type(5) div:nth-of-type(2) {
    color: #FF302F;
}
.template .referPriceResult .referPriceResult_box .result_rate table {
    width: 100%;
    border: 1px solid #272E38;
}
.template .referPriceResult .referPriceResult_box .result_rate table tr,
.template .referPriceResult .referPriceResult_box .result_rate table td {
    border: 1px solid #272e38;
}
.template .referPriceResult .referPriceResult_box .result_rate table td {
    text-align: center;padding: 5px;
    font-size: 12px;
    color: #FF302F;
}
.template .referPriceResult .referPriceResult_box .result_rate table tr:nth-of-type(1) td {
    color: #7B7F8A;
}

.template .referPriceResult .askPrice {
    width: 100%;
}
</style>

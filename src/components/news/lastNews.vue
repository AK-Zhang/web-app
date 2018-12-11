<template>
  <div class="template">
    <div class="contents">
      <div class="latest_trendst" id="latest_trendst">
        <ul>
          <li v-for="item in list">
            <div class="dynamic_code">
              <h3>{{item.TargetName}}</h3>
              <span>{{item.TargetCode}}</span>
            </div>
            <div class="dynamic_price">
              <h2>{{item.TradeType}}</h2>
              <span>认购</span>
            </div>
            <div class="dynamic_detail">
              <h3><img src="../../../static/images/profile.png">{{item.CreatorName}}</h3>
              <span>{{item.createTime | datefmt('MM/DD')}}</span>
              <span>{{item.createTime | datefmt('HH:mm')}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//import { MessageBox } from "mint-ui";
import common from "../../kits/common";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      var postData = {
        PageNo: 1,
        PageSize: 20,
        PageCount: 1,
        RecordCount: 1
      };
      this.$api.post("/api/Order/GetLatestOrders", postData, response => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data.Code == 0) {
            console.log(response.data.Msg); //请求成功，response为成功信息参数
            this.list = response.data.Data;
            //MessageBox.prompt("请输入信息", "登陆");
          } else {
            alert(response.data.Msg);
          }
        } else {
          alert(response.data.Msg); //请求失败，response为失败信息
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template .contents {
  width: 100%;
  /* padding: 0 15px; */
  background-color: #1c1f26;
}
.template .latest_trendst ul li,
.template .optimal_trade ul li {
  border-top: 1px solid #333;
  padding: 8px 15px;
  display: flex;
  font-size: 14px;
}
.template .latest_trendst ul li h3 {
  font-size: 14px;
  color: #c4c7d3;
}
.template .latest_trendst ul li span {
  font-size: 12px;
}
.template .latest_trendst ul li .dynamic_code,
.template .latest_trendst ul li .dynamic_price,
.template .latest_trendst ul li .dynamic_detail {
  /* flex-grow: 1; */
  width: 33%;
}
.template .latest_trendst ul li .dynamic_code {
  padding-left: 5px;
}
.template .latest_trendst ul li .dynamic_price {
  text-align: center;
}
.template .latest_trendst ul li .dynamic_price h2 {
  font-size: 20px;
  color: #ff302f;
  line-height: 15px;
}
.template .latest_trendst ul li .dynamic_detail {
  text-align: right;
}
.template .latest_trendst ul li .dynamic_detail h3 {
  line-height: 15px;
}
.template .latest_trendst ul li .dynamic_detail img {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
  margin-top: -8px;
  margin-right: 5px;
  position: relative;
  top: 5px;
}
</style>

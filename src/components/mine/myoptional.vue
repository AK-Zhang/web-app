<template>
  <div class="template">
    <div class="input_search">
      <div class="search">
        <div>
          <input type="text" placeholder="请输入股票代码/名称/拼音">
        </div>
        <!-- <div class="list">
          <ul>
            <li>1122</li>
          </ul>
        </div> -->
      </div>
    </div>

    <div class="optional_title title1" v-if="false">
      <div>
        <div class="flexeable">
          <div class="o_title">名称代码</div>
          <div class="o_title">现价</div>
          <div class="o_title">涨跌幅</div>
          <div class="o_title">
            <span class="iconfont icon-log-theme"></span>&nbsp;&nbsp;管理</div>
        </div>
      </div>
    </div>
    <div class="optional_title title2" v-if="false">
      <div>
        <div class="flexeable">
          <div class="o_title"></div>
          <div class="o_title">名称代码</div>
          <div class="o_title">现价</div>
          <div class="o_title">涨跌幅</div>
          <div class="o_title">
            <span class="iconfont icon-log-theme"></span>&nbsp;&nbsp;管理</div>
        </div>
      </div>
    </div>
    <div class="optional_title title3" v-if="true">
      <div>
        <div class="flexeable">
          <div class="o_title">名称代码</div>
          <div class="o_title">现价</div>
          <div class="o_title">涨跌幅</div>
          <div class="o_title">
            <span class="iconfont"></span>&nbsp;&nbsp;</div>
        </div>
      </div>
    </div>
    <div class="exhibition item1" v-if="false">
      <div class="exhibition_box">
        <div class="exhibition_box_in">
          <div class="plus"></div>
          <div>暂无股票，点击添加</div>
        </div>
        <ul class="exhibition_list">
          <li v-for="item in list">
            <router-link to="/trade/tradeInfo" class="flexeable">
              <div class="exhibition_name">
                <h3>{{item.Name}}</h3>
                <span>{{item.StockCode}}</span>
              </div>
              <div class="current_price">
                <h3>{{item.Trade}}</h3>
              </div>
              <div class="price_limit">
                <h3>{{item.ChangePercent.toFixed(2)}}%</h3>
              </div>
              <div class="exhibition_option">
                <router-link v-bind="{to:'/referprice'+item.StockCode+item.Name}" class="mui-btn mui-btn-primary mui-btn-outlined">询价</router-link>
                <router-link v-bind="{to:'/trade/home'+item.StockCode+item.Name}" class="mui-btn mui-btn-danger mui-btn-outlined">认购</router-link>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="exhibition item2" v-if="false">
      <div class="exhibition_box">
        <div class="exhibition_box_in">
          <div class="plus"></div>
          <div>暂无股票，点击添加</div>
        </div>
        <ul class="exhibition_list">
          <li v-for="item in list">
            <router-link to="/trade/tradeInfo" class="flexeable checked1">
              <div class="selected_input">
                <input type="checkbox">
              </div>
              <div class="exhibition_name">
                <h3>{{item.Name}}</h3>
                <span>{{item.StockCode}}</span>
              </div>
              <div class="current_price">
                <h3>{{item.Trade}}</h3>
              </div>
              <div class="price_limit">
                <h3>{{item.ChangePercent.toFixed(2)}}%</h3>
              </div>
              <div class="exhibition_option"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="exhibition item3" v-if="true">
      <div class="exhibition_box">
        <div class="exhibition_box_in">
          <div class="plus"></div>
          <div>暂无股票，点击添加</div>
        </div>
        <ul class="exhibition_list">
          <li v-for="item in list">
            <router-link to="/trade/tradeInfo" class="flexeable">
              <div class="selected_input">
                <input type="checkbox">
              </div>
              <div class="exhibition_name">
                <h3>{{item.Name}}</h3>
                <span>{{item.StockCode}}</span>
              </div>
              <div class="current_price">
                <h3>{{item.Trade}}</h3>
              </div>
              <div class="price_limit item_3">
                <h3>{{item.ChangePercent.toFixed(2)}}%</h3>
              </div>
              <div class="exhibition_option">
                <router-link v-bind="{to:'/referprice'+item.StockCode+item.Name}" class="mui-btn mui-btn-primary mui-btn-outlined">询价</router-link>
                <router-link v-bind="{to:'/trade/home'+item.StockCode+item.Name}" class="mui-btn mui-btn-danger mui-btn-outlined">认购</router-link>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      var postData = {
        AccountID: window.userID
      };
      this.$api.post("/api/AccountChoice/GetList", postData, response => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data.Code == 0) {
            console.log(response.data.Msg); //请求成功，response为成功信息参数
            this.list = response.data.Data;
            console.log(this.list);
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
.template .input_search {
  width: 100%;
  padding: 10px 15px;
}
.template .input_search .search {
  position: relative;
  width: 100%;
  border: 1px solid #272e38;
}
.template .input_search .search input {
  width: 80%;
  margin-bottom: 0px;
  padding-left: 30px;
  font-size: 14px;
  height: 30px;
  background-color: initial;
}
/* .template .input_search .search .list {
  position: absolute;
  background-color: #fff;
  width: 100%;
  border: 1px solid #272e38;
  bottom: -20px;
} */

.optional_title {
  width: 100%;
  padding: 5px 15px;
  background-color: #262834;
}
/* .optional_title .flexeable {
    width
} */
.optional_title .flexeable .o_title {
  width: 25%;
  font-size: 15px;
  padding: 10px 5px;
}
.title2 .flexeable .o_title {
  width: 22%;
}
.title2 .flexeable .o_title:nth-of-type(1) {
  width: 10%;
}
.exhibition {
  width: 100%;
  height: 100%;
  background-color: #1c1f26;
  text-align: center;
}
.exhibition .exhibition_box .exhibition_box_in {
  height: 100%;
  display: none;
}
.exhibition .exhibition_box .flexeable {
  border-bottom: 1px solid #272e38;
  padding: 5px 15px;
}
.exhibition .exhibition_box .flexeable > div {
  width: 25%;
  text-align-last: left;
  padding: 0 5px;
}
.exhibition .exhibition_box .flexeable > div:nth-of-type(3) {
  width: 15%;
}
.exhibition .exhibition_box .flexeable > div:nth-of-type(4) {
  width: 35%;
  padding: 10px 0px 10px 20px;
}
.exhibition .exhibition_box .flexeable > div:nth-of-type(4) a {
  margin-left: 5px;
}

.exhibition .exhibition_box .checked1 > div {
  width: 22%;
}
.exhibition .exhibition_box .checked1 > div:nth-of-type(1) {
  width: 10%;
}
.exhibition .exhibition_box .checked1 > div:nth-of-type(3) {
  width: 18%;
}
.exhibition .exhibition_box .checked1 > div:nth-of-type(3) h3 {
  text-align: right;
}
.exhibition .exhibition_box .checked1 > div:nth-of-type(4) {
  width: 20%;
  padding-right: 0px;
}

.exhibition .exhibition_box .flexeable > div h3 {
  font-size: 15px;
  color: #c4c7d3;
}
.exhibition .exhibition_box .exhibition_name {
  text-align: left;
}

.exhibition .exhibition_box .current_price h3,
.exhibition .exhibition_box .price_limit h3 {
  padding-top: 12px;
}
.exhibition .exhibition_box .exhibition_name span {
  font-size: 12px;
}
.exhibition .exhibition_box .checked1 .price_limit h3 {
  text-align: right;
}
.mui-btn {
  padding: 4px 6px;
}
.exhibition_list .exhibition_option {
  text-align: right;
}
.R-color {
  color: #ff302f;
}
.G-color {
  color: #3bb33e;
}
</style>

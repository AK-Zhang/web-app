<template>
  <div>

  </div>
</template>

<script>
import common from '../../kits/common.js';
export default {
  name: 'aboutUs',
  props:['users'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:this.user,
      hrefs:''
    }
  },
  computed: {
  },
  components: {
    //   userInfo:'userInfo'
  },
  methods: {
    userInfo () {
        var url = common.apidomain + '/api/Account/Login';
        var postData = {"phone":"18234567890","password":"123456"}
        this.$api.post(url,postData, response => {
            if (response.data.code == 0) {
                    // this.$emit('getlist','');
                     console.log(123); //触发父组件的方法
                    //window.location.href='#/mine'; 
                    this.list = postData
                } else {
                alert(response.data.msg);//请求失败，response为失败信息
                }       
        });
        this.$emit('UserInfo1',this.list)
        
    }
   },
   created() {
       this.userInfo();
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

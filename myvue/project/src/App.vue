<!--全局的，公共的代码，放在这里-->
<template>
    <div>
        <van-nav-bar
          title="hcs的管理系统"
          class="topbar"
          :fixed="true"
          :z-index="9999"
        />
        <router-view class="rv"></router-view>
        <van-tabbar v-model="active" :fixed="true" @change="changeFoot(active)">
          <van-tabbar-item icon="shop">首页</van-tabbar-item>
          <van-tabbar-item icon="chat" dot>会员</van-tabbar-item>
          <van-tabbar-item icon="gold-coin" info="5">购物车</van-tabbar-item>
          <van-tabbar-item icon="records" >查找</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
          active: 0
        }
    },
    methods:{
        changeFoot:function(active){
    //      console.log(active);
            switch(active){
                case 0:
                  //跳转路由
                    this.$router.push({
                      name:'home'
                    });
                    break;
                case 1:
                    this.$router.push({
                      name:'vip'
                    });
                    break;
                case 2:
                    this.$router.push({
                      name:'shopping'
                    });
                    break;
                case 3:
                    this.$router.push({
                      name:'search'
                    });
                    break;
            }

        }
    }
}
</script>

<style>
    .topbar{
      border:1px solid #ccc;
    }
    .rv{
      margin-top:50px;
      margin-bottom:50px;
    }
</style>

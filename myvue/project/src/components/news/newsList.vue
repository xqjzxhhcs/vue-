<template>
  <!--这个div必须要有  使我们的根节点-->
  <div>
    <van-nav-bar
      title="新闻列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-list>
      <van-row v-for="(item,index) in list" :key="index" :title="index">
                                                       <!--路由传参 -->
        <router-link :to="{name:'news.detail',query:{id:item.id}}">
          <van-col span="4" offset="2"><img :src="item.img_url" width="50" height="50"/></van-col>
          <van-col span="18" class="newstitle">{{item.title}}</van-col>
          <van-col span="7" class="newsview">点击数：{{item.click}}</van-col>
          <van-col span="11" class="newstime">{{item.add_time | yctime("YYYY年MM月DD日")}}</van-col>
        </router-link>

      </van-row>
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods:{
    onClickLeft:function(){
      //操作历史记录
      this.$router.go(-1);
    }
  },
  created(){
    this.$axios.get("/getnewslist").then(res=>{
      console.log(res);
      this.list=res.data.message;
    }).catch(err=>{
      console.log(err);
    });
  }
}
</script>

<!--加了这个之后，这一段样式，只会在这一个组件里面去作用-->
<!--给标签添加一个属性，选择器会默认加上一个属性选择器  一一对应-->
<style scoped>

  .van-row{
    border:1px solid #ccc;
    margin:5px 0px;
  }
  .newstitle{
    color:#000;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:10px;
    padding-right:10px;
  }
  .newsview,.newstime{
    font-size:16px;
    color:blue;
  }
</style>

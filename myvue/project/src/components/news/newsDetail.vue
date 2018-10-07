<template>
  <!--这个div必须要有  使我们的根节点-->
  <div>
    <van-nav-bar
      title="新闻详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="news-title">
      <h2>{{newsDetail.title}}</h2>
      <div>
        <span>点击数:{{newsDetail.click}}</span>
        <span>分类</span>
        <span>{{newsDetail.add_time | yctime('YYYY年MM月DD日')}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsDetail:{}
    }
  },
  methods:{
    onClickLeft:function(){
      //操作历史记录
      this.$router.go(-1);
    }
  },
  created(){
    //得到路由传过来的参数
    let id=this.$route.query.id;
    this.$axios.get("/getnew/"+id).then(res=>{
//      console.log(res);
      this.newsDetail=res.data.message[0];
    }).catch(err=>{
      console.log(err);
    });
  }
}
</script>

<!--加了这个之后，这一段样式，只会在这一个组件里面去作用-->
<!--给标签添加一个属性，选择器会默认加上一个属性选择器  一一对应-->
<style scoped>
  .news-title h2{
    color:blue;
    font-size:20px;
    font-weight:bold;
    padding:10px;
  }
  .news-title span{
    margin-right:30px;
    padding:10px;
    font-size:14px;
  }
  .news-content{
    padding:10px;
  }
</style>

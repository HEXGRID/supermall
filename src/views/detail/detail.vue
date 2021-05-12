<!--详情页-->
<template>
  <div id="detail">
    <detailnav ref='detailnav' @titlesClick='titlesClick'></detailnav>
    <scroll ref='scroll'
    :probe-type="3"
    :pull-up-load='false'
    @FindScrollPosition='scrollEvent'>
      <detailswiper :topBanner='detailbanner' class="detail-set-scroll"></detailswiper>
      <goodinfo :goodsinfo='goods'></goodinfo>
      <shopinfo :shopInfo='shop'></shopinfo>
      <detailimageinfo :detailsInfo='detailsInfo' @imgLoad='imgLoad'></detailimageinfo>
      <detailparamsinfo :detailParamsInfo='detailParamsInfo' class="detail-set-scroll"></detailparamsinfo>
      <detailcomment :commentInfo='commentInfo' class="detail-set-scroll"></detailcomment>
      <goods-list :goods='recommendList' :isRecommend='true' class="detail-set-scroll"></goods-list>
    </scroll>
    <backtop @click="backClick" v-show="isShowBackTop"></backtop>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
  </div>
</template>

<script>
import { Toast } from 'vant';

import detailnav from 'views/detail/childComps/detailnav'
import detailswiper from 'views/detail/childComps/detailSwiper'
import goodinfo from 'views/detail/childComps/detailgoodsinfo'
import shopinfo from 'views/detail/childComps/detailshopinfo'
import detailimageinfo from 'views/detail/childComps/detailImageInfo'
import detailparamsinfo from 'views/detail/childComps/detailParamsInfo'
import detailcomment from 'views/detail/childComps/detailcomment'

import GoodsList from "components/content/goods/GoodsList"
import backtop from 'components/content/backTop/backTop'
import DetailBottomBar from 'views/detail/childComps/detailBottomBar'

import Scroll from 'components/common/scroll/scroll.vue'
import {getdetail,getRecommend,goods,shop,detailsInfo,detailParamsInfo} from 'network/detail'

import { mapMutations } from "vuex";
export default {
  name:'detail',
  data () {
    return {
      goodsiid:null,
      isShowBackTop:false,

      detailbanner:[],
      goods:{},
      shop:{},
      detailsInfo:{},
      detailParamsInfo:{},
      commentInfo:{},
      recommendList:[],

      detailClassList:[],
      detailIndex:0,

      // 数据加载判断
      Boldetail:true,
      BolRecommentList:true
    };
  },
  components:{detailnav,detailswiper,goodinfo,shopinfo,detailimageinfo,detailparamsinfo,Scroll,detailcomment,GoodsList,backtop,DetailBottomBar},
  watch: {
    '$route' (to, from) {   //监听路由是否变化
      if(to.query.iid != from.query.iid && to.query.iid != null){  //iid不为空才请求数据
        this.goodsiid = to.query.iid;
        this.getdetail()
        this.getRecommentList()
      }
    },

    // 监听两个数据请求方法是否请求完数据
    Loading(nval){
      // console.log(oval);
      // console.log(nval);
      if(!(nval.Boldetail || nval.BolRecommentList))
        this.setLoading(false)
      else
        this.setLoading(true)
    }
  },
  beforeCreate() {
    this.$store.commit('setTabBarShow',false)
  },
  created() {
    this.goodsiid = this.$route.query.iid;
    this.getdetail()
    // this.getRecommentList()
  },
  methods: {
    ...mapMutations(['setLoading']),
    // 获取商品数据
    getdetail(){
      getdetail(this.goodsiid).then(res => {
        console.log(res)
        if(res){
          const data=res.result
          // 获取轮播图
          this.detailbanner=data.itemInfo.topImages
          // 获取商品信息
          this.goods=new goods(data.itemInfo,data.columns,data.shopInfo.services)
          // 获取商店信息
          this.shop=new shop(data.shopInfo)
          // 获取商品详细图片
          this.detailsInfo=new detailsInfo(data.detailInfo)
          // 获取商品参数信息
          this.detailParamsInfo=new detailParamsInfo(data.itemParams)
          // 获取评论数据
          if(data.rate.cRate!=0)
            this.commentInfo=data.rate.list[0] || {}
          // this.setLoading(false)
          this.$nextTick(()=>{
            this.Boldetail=false
          })
          // 获取推荐商品数据
          this.getRecommentList()
        }else{
          Toast.fail({
            message:'未找到相关商品信息，请刷新一下再试'
          })
          this.setLoading(false)
        }
      })
    },
    // 获取推荐商品的数据
    getRecommentList(){
      getRecommend().then(res=>{
        if(res){
          this.recommendList=res.data.list;
          this.$nextTick(()=>{
            this.BolRecommentList=false
          })
        }else{
          Toast.fail({
            message:'加载推荐数据失败，请刷新一下再试'
          })
        }
      })
    },
    imgLoad(){
      this.getClassList()
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    getClassList() {
      // Array.from() 将伪数组转换成纯数组
      this.detailClassList = Array.from(document.getElementsByClassName("detail-set-scroll"));
      let maxValue = 10000000;+
      this.detailClassList.push({ offsetTop: maxValue });
      // console.log(this.detailClassList);
    },
    scrollEvent(position){
      // 展示返回顶部按钮
      let detailPosition=position?-position.y:0
      this.isShowBackTop=detailPosition>1000

      // // 处理滚动时导航栏响应事件
      for(let i=0 ; i<this.detailClassList.length ; i++){
        if(detailPosition>=this.detailClassList[i].offsetTop && detailPosition<this.detailClassList[i+1].offsetTop){
          if(this.detailIndex!=i){
            this.detailIndex=i
            try {this.$refs.detailnav.currentIndex=this.detailIndex} catch (err){err}
          }
          break;
        }
      }

    },
    titlesClick(index){
      this.$nextTick(()=>{
        let el=document.getElementsByClassName('detail-set-scroll')
        this.$refs.scroll.scrollToElement(el[index]);
      })
    },
    addToCart(){
      Toast('加入购物车成功')
      const goodsObj={
        image:this.detailbanner[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        id: this.goodsiid
      }
      // 2.将商品数据传到购物车页面
      this.$store.dispatch("setShopCartData", goodsObj);
    }
  },
  computed:{
    Loading(){
      const{Boldetail,BolRecommentList}=this
      return{
        Boldetail,
        BolRecommentList
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('setTabBarShow',true)
    next()
  }
}
</script>
<style scoped>
</style>
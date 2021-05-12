<!--主页-->
<template>
  <div id="home">
    <navbar class="home-nav">
      <template v-slot:nav-center>
        购物街
      </template>
    </navbar>
    <tab-control
    class='tab-control' 
    :titles="['流行','新款','精选']" 
    @tabClick='tabClick' 
    ref="tabControl1"
    v-show="isShowTabControl">
    </tab-control>

    <scroll ref="scroll" 
    :probe-type='3'
    @FindScrollPosition='ContentScroll'
    :pull-up-load='true'
    @pullingUp='loadMore'>
      <home-swiper :banners='banners' @ImageLoad='swiperLoad'></home-swiper>

      <recommend-view :recommends='recommends'></recommend-view>

      <feature></feature>

      <tab-control class='tab-control' :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl2"></tab-control>

      <goods-list :goods="showGoodsList"></goods-list>
    </scroll>
    <backtop @click="backClick" v-show="isShowBackTop"></backtop>
  </div>
</template>

<script>
// 公共组件
import Navbar from 'components/common/navbar/navbar'
import tabControl from 'components/content/TabControl/TabControl'
import Scroll from 'components/common/scroll/scroll.vue'

// 首页组件
import HomeSwiper from 'views/home/childComp/HomeSwiper'
import RecommendView from 'views/home/childComp/HomeRecommendView'
import feature from 'views/home/childComp/Feature'
import GoodsList from 'components/content/goods/GoodsList'
import backtop from 'components/content/backTop/backTop'

// 请求相关方法
import {getHomeMultidata,getHomeGoods} from 'network/home'
import { mapMutations } from "vuex";

export default {
  name: 'home',
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      // 请求类型
      currentType:'pop',
      // 是否显示返回顶部按钮
      isShowBackTop:false,
      // 吸顶相关
      tabControlOffsetTop:0,
      isShowTabControl:false,
      saveY:0,

      // 监听数据加载
      BolHomeMultidata:true,
      BolHomeGoods:true,
    }
  },
  components:{
    Navbar,
    HomeSwiper,
    RecommendView,
    feature,
    tabControl,
    GoodsList,
    Scroll,
    backtop,
  },
  created(){
    // this.setLoading(true)
    this.getHomeMultidata(),
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed:{
    showGoodsList(){
      return this.goods[this.currentType].list
    },
    Loading(){
      const {BolHomeMultidata,BolHomeGoods}=this
      return {
        BolHomeMultidata,
        BolHomeGoods
      }
    }
  },
  watch:{
    Loading(nval){
      if(!( nval.BolHomeMultidata || nval.BolHomeGoods)){
        this.setLoading(false)
      }else{
        this.setLoading(true)
      }
    }
  },
  methods: {
    ...mapMutations(['setLoading']),
    // 事件监听相关方法
    tabClick(index){
      switch(index){
        case 0 :
          this.currentType='pop'
          break
        case 1 :
          this.currentType='new'
          break
        case 2 :
          this.currentType='sell'
          break
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
      this.$refs.scroll.scrollTo(0,-this.tabControlOffsetTop)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    ContentScroll(position){
      this.isShowBackTop=position.y<-1000
      this.isShowTabControl=-position.y>this.tabControlOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperLoad(){
      this.tabControlOffsetTop =this.$refs.tabControl2.$el.offsetTop;
    },


    // 数据请求相关方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      // console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
        this.$nextTick(()=>{
          this.BolHomeMultidata=false
        })
      })
    },
    getHomeGoods(type){
      this.BolHomeGoods=true
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishPullUp()
        this.$nextTick(()=>{
          this.BolHomeGoods=false
        })
      })
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    this.saveY=this.$refs.scroll.getScrollY()
  },
}
</script>

<style scoped>
  @import "~assets/css/base.css";
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>

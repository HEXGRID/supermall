<!--详情页-->
<template>
  <div id="detail">
    <detailnav></detailnav>
    <detailswiper :topBanner='detailbanner'></detailswiper>
    <goodinfo :goodsinfo='goods'></goodinfo>
    <shopinfo :shopInfo='shop'></shopinfo>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import detailnav from 'views/detail/childComps/detailnav'
import detailswiper from 'views/detail/childComps/detailSwiper'
import goodinfo from 'views/detail/childComps/detailgoodsinfo'
import shopinfo from 'views/detail/childComps/detailshopinfo'
import {getdetail,goods,shop} from 'network/detail'
export default {
  name:'detail',
  data () {
    return {
      goodsiid:null,
      detailbanner:[],
      goods:{},
      shop:{}
    };
  },
  components:{detailnav,detailswiper,goodinfo,shopinfo},
  created() {
    this.goodsiid = this.$route.query.iid;
    this.getdetail()
  },
  methods: {
    getdetail(){
      getdetail(this.goodsiid).then(res => {
        console.log(res)
        const data=res.result
        this.detailbanner=data.itemInfo.topImages

        this.goods=new goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop=new shop(data.shopInfo)
      })
    }
  },
}
</script>
<style scoped>
</style>
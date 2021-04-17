<!--商店信息-->
<template>
  <div class="shopinfo" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img class='icon' :src="shopInfo.image">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sells">
          <div class="sell-count">{{sellCountFilter}}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="goods">
          <div class="goods-count">{{shopInfo.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td class="name">{{item.name}}</td>
            <td class="score"  :class="{BetterScore:item.isBetter}"><span>{{item.score}}</span></td>
            <td class="better" :class="{BetterIcon:item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'shopinfo',
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {};
  },
  computed:{
    sellCountFilter(){
      if(this.shopInfo.sells<10000)
        return this.shopInfo.sells
      return (this.shopInfo.sells / 10000).toFixed(1) + "万";
    }
  }
}

</script>
<style scoped>
.shopinfo{
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.icon{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.shop-top span{
  margin-left: 10px;
  font-size: 18px;
}
.shop-middle{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.shop-middle-left{
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  text-align: center;
  color: #333;
  border-right: 1px solid rgba(0,0,0,.1);
}
.sell-count,.goods-count{
  font-size: 20px;
  font-weight: bold;
}
.sell-text,.goods-text{
  margin-top: 5px;
  font-size: 14px;
}
.shop-middle-right{
  display: flex;
  flex: 1;
  justify-content: center;
}
.shop-middle-right table tr td{
  padding: 5px;
  box-sizing: border-box;
  font-size: 14px;
}
.name{
  color: #333;
}
.score{
  color: #5ea732;
  font-weight: bold;
}
.better{
  background-color: #5ea732;
  color: #fff;
}
.BetterScore{
  color: #f13e3a;
}
.BetterIcon{
  background-color: #f13e3a;
}
.shop-bottom{
  margin-top: 10px;
  text-align: center;
}
.enter-shop{
  font-size: 15px;
  line-height: 30px;
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #f2f5f8;
}
</style>
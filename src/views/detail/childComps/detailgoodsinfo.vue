<!--商品详细信息-->
<template>
  <div class="goodinfo" v-if="Object.keys(goodsinfo).length !== 0">
    <div class="title">{{goodsinfo.title}}</div>

    <div class="price">
      <span class="n-price" v-if="goodsinfo.newPrice">{{goodsinfo.newPrice}}</span>
      <span class="o-price" v-if="goodsinfo.oldPrice">{{goodsinfo.oldPrice}}</span>
      <span class="discount" v-if="goodsinfo.discount">{{goodsinfo.discount}}</span>
    </div>

    <div class="info">
      <span>{{goodsinfo.columns[0]}}</span>
      <span>{{goodsinfo.columns[1]}}</span>
      <span>{{goodsinfo.columns[2]}}</span>
    </div>

    <div class="services">
      <span v-for="(item,index) in goodsinfo.services" :key="index">
        <img :src="item.icon">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'goodinfo',
  props:{
    goodsinfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    };
  },
  components: {},
}

</script>
<style scoped>
.goodinfo{
  padding: 0px 10px;
  margin-top: 15px;
  border-bottom: 3px solid #f2f5f8;
}
.title{
  color: #222;
  font-size: 20px;
  text-align: justify;
}
.price{
  margin-top: 10px;
}
.n-price{
  font-size: 20px;
  color: #ff5777;
}
.o-price{
  margin-left: 10px;
  text-decoration: line-through;
}
.discount{
  font-size: 10px;
  position: relative;
  top: -5px;
  margin-left: 10px;
  padding: 2px 20px;
  color: #fff;
  border-radius: 10px;
  background-color: rgb(241, 62, 58);
}
.info{
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  justify-content: space-between;
  line-height: 30px;
  color: #999;
  border-bottom: 1px solid hsla(0,0%,39.2%,.1);
}
.services{
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  padding: 10px 0;
  flex-wrap: wrap;
}
.services img{
  width: 15px;
  vertical-align: middle;
}
.services span span{
  margin-left: 2px;
}
</style>
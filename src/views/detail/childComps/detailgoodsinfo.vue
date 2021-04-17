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
  border-bottom: .31rem solid #f2f5f8;
}
.title{
  color: #222;
  font-size: 1.2rem;
  text-align: justify;
}
.price{
  margin-top: .5rem;
}
.n-price{
  font-size: 1.7rem;
  color: #ff5777;
}
.o-price{
  margin-left: .3rem;
  text-decoration: line-through;
}
.discount{
  font-size: .32rem;
  position: relative;
  top: -.106667rem;
  margin-left: .4rem;
  padding: .24rem 1rem;
  color: #fff;
  border-radius: .5rem;
  background-color: rgb(241, 62, 58);
}
.info{
  display: flex;
  margin-top: 1rem;
  font-size: .9rem;
  justify-content: space-between;
  line-height: 2rem;
  color: #999;
  border-bottom: 1px solid hsla(0,0%,39.2%,.1);
}
.services{
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: .9rem;
  line-height: 1.5rem;
  padding: 1.2rem 0;
  flex-wrap: wrap;
}
.services img{
  width: .8rem;
  vertical-align: middle;
}
.services span span{
  margin-left: .2rem;
}
</style>
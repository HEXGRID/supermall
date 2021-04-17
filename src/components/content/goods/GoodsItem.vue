<!--  -->
<template>
  <div class="good-list-item" @click="goodsItemClick">
    <img :src='goodItem.show.img'>
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">￥{{goodItem.price}}</span>
      <span class="sale">{{goodItem.sale}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'goodListItem',
  props:{
    goodItem:{
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
  methods: {
    goodsItemClick(){
      this.$router.push({
        path:'/detail',
        query:{
          iid:this.goodItem.iid
        }
      })
    }
  },
}

</script>
<style>
.good-list-item{
  width: 48%;
}
.good-list-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 14px;
  overflow: hidden;
  text-align: center;
  margin: 5px 0px;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 80px;
}
.goods-info .sale {
  position: relative;
}
.goods-info .sale::before{
  content: '';
  position: absolute;
  left: -15px;
  top: 0px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
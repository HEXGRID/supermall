<!--商品组件-->
<template>
  <div>
    <h3 class="recommend" v-show="isRecommend">推荐商品</h3>
    <div class="goodList">
      <goodListItem v-for="(item,index) in goods" :key="index" :goodItem='item'></goodListItem>
    </div>
  </div>
</template>

<script>
import goodListItem from 'components/content/goods/GoodsItem'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    },
    isRecommend:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data () {
    return {
    };
  },
  components: {
    goodListItem
  },
}
</script>
<style>
.goodList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.recommend{
  padding: 10px 10px;
}
</style>
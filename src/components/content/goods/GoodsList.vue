<!--商品组件-->
<template>
  <div class="goodList">
    <goodListItem v-for="(item,index) in goods" :key="index" :goodItem='item'></goodListItem>
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
</style>
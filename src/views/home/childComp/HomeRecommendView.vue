<!--推荐-->
<template>
  <div class="recommend">
    <div class='recommend-item' v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
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
}

</script>
<style>
.recommend{
  display: flex;
  text-align: center;
  font-size: 16px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend .recommend-item{
  flex: 1;
}
.recommend img{
  width: 70px;
  margin-bottom: 10px;
}
</style>
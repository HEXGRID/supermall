<!--vant框架的轮播图-->
<template>
  <van-swipe :autoplay="2000" :stop-propagation='false'>
    <van-swipe-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name:'vantSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isLoad:true
    };
  },
  methods: {
    imgLoad(){
      if(this.isLoad)
        this.$emit('imgLoad')
      this.isLoad=false
    }
  },
}
</script>
<style scoped>
img{
  display: block;
  width: 100%;
}
</style>
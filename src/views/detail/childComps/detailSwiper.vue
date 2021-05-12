<!--详情轮播图-->
<template>
  <van-swipe :autoplay="2000" class="detail-swiper">
    <van-swipe-item v-for="(item,index) in topBanner" :key="index">
      <img :src="item" @load="imgLoad">
    </van-swipe-item>
  </van-swipe>
  <!-- <swiper class="detail-swiper" ref="swiper">
    <swiper-item v-for="(banner,index) in topBanner" :key="index">
      <img :src="banner">
    </swiper-item>
  </swiper> -->
</template>

<script>
export default {
  name:'detailswiper',
  props:{
    topBanner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      hadimgLoad:true
    };
  },
  methods: {
    imgLoad(){
      if(this.hadimgLoad)
        this.$emit('imgLoad')
      this.hadimgLoad=false
    }
  },
}

</script>
<style scoped>
img{
  /* height: 100%; */
  width: 100%;
}
.detail-swiper{
  height: 300px;
}
</style>
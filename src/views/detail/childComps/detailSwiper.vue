<!--详情轮播图-->
<template>
  <swiper class="detail-swiper" ref="swiper">
    <swiper-item v-for="(banner,index) in topBanner" :key="index">
      <img :src="banner">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
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
      hadimgLoad:false
    };
  },
  updated() {
    this.$refs.swiper.handleDom()
    this.$refs.swiper.startTimer()
  },
  components: {Swiper,SwiperItem},
}

</script>
<style scoped>
.detail-swiper{
  height: 300px;
}
</style>
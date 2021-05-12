<template>
    <swiper ref="swiper">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="ImageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
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
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    ImageLoad(){
      if(this.isLoad)
        this.$emit('ImageLoad')
      this.isLoad=false
    }
  },
  updated() {
    this.$refs.swiper.handleDom()
    this.$refs.swiper.startTimer()
  },
}

</script>
<style scoped>
</style>
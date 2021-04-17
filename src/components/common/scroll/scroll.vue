<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'scroll',
  props:{
    probeType:{
      type:Number,
      defalult : 0
    },
    pullUpLoad:{
      type: Boolean,
      defalult: false
    }
  },
  data () {
    return {
      scroll:null
    };
  },
  mounted() {
    // 创建滚动对象
    this.scroll=new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      observeImage:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    // 监听事件
    this.scroll.on('scroll',(position)=>{
      this.$emit('FindScrollPosition',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },
}
</script>
<style scoped>
.wrapper{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
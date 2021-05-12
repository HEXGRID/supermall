<!--商品图片-->
<template>
  <div class="image-info" v-if="Object.keys(detailsInfo).length!==0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-title">{{detailsInfo.imageKey}}</div>
    <div class="info-img">
      <img v-for="(image,index) in detailsInfo.imgList" :key="index" :src="image" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:'detailImageInfo',
  props:{
    detailsInfo:{
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
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
}

</script>
<style scoped>
.image-info{
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc{
  padding: 0px 20px;
}
.start{
  position: relative;
  width: 100px;
  height: 1px;
  float: left;
  background-color: #a3a3a5;
}
.start::before{
  position: absolute;
  content: "";
  background-color: #333;
  height: 5px;
  width: 5px;
}
.end{
  position: relative;
  width: 100px;
  height: 1px;
  float: right;
  background-color: #a3a3a5;
}
.end::before{
  position: absolute;
  content: "";
  background-color: #333;
  height: 5px;
  width: 5px;
  right: 0;
  bottom: 0;
}
.desc{
  padding: 15px 0;
}
.info-title{
  padding: 20px 20px 10px 20px;
}
.info-img img{
  width: 100%;
}
</style>
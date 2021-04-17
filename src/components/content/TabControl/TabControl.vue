<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" 
    class="tabControl-item" 
    :class="{active:index==currentIndex}"
    @click='itemClick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  },
  components: {},
}
</script>

<style>
.tab-control{
  display: flex;
  background-color: #fff;
  z-index: 999;
}
.tabControl-item{
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.tabControl-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
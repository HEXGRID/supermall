<!--导航栏-->
<template>
  <navbar class="detail-nav">
    <template v-slot:nav-left>
      <div class="back" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
    </template>
    <template v-slot:nav-center>
      <div class="titles">
        <div v-for="(item,index) in titles" :key="index"
        @click="titlesClick(index)"
        :class="{active:index==currentIndex}">
        <span>{{item}}</span>
        </div>
      </div>
    </template>
  </navbar>
</template>

<script>
import Navbar from 'components/common/navbar/navbar';
export default {
  name:'detailnav',
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },
  components: {Navbar},
  methods: {
    titlesClick(index){
      this.currentIndex=index
      this.$emit('titlesClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}

</script>
<style scoped>
.titles{
  display: flex;
  justify-content: space-evenly;
}
span{
  padding: 11px;
}
.back img{
  vertical-align: middle;
}
</style>
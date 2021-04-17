<!--返回顶部-->
<template>
  <div class='back-top'>
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name:'backtop',
  data () {
    return {
    };
  },
}

</script>
<style scoped>
.back-top{
  position: fixed;
  z-index: 999;
  display: inline-block;
  bottom: 50px;
  right: 10px;
}
img{
  width: 60px;
}
</style>
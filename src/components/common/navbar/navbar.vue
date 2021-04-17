<template>
  <div class="nav-bar">
    <div class="left"><slot name="nav-left"></slot></div>
    <div class="center"><slot name="nav-center"></slot></div>
    <div class="right"><slot name='nav-right'></slot></div>
  </div>
</template>

<script>
export default {
  name :'navbar',
  data () {
    return {
    };
  },
  components: {},
}
</script>

<style scoped>
  @import "~assets/css/base.css";
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: var(--font-size);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex:1;
    letter-spacing: 2px;
  }
</style>
<!--  -->
<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isactive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  data () {
    return {
      // isactive: false
    }
  },
  computed: {
    isactive () {
      return this.$route.path === this.path
    }
  },
  methods: {
    btnClick () {
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  }
  /* .tab-bar-item img{
    height: 24px;
  } */
  /* .active{
    color: deeppink;
  } */
</style>

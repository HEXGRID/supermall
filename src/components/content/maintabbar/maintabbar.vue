<template>
  <tab-bar>
    <tab-bar-item path='/home'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path='/category'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path='/shopcart'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path='/profile'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/tabbar'
import TabBarItem from 'components/common/tabbar/tabbaritem'
export default {
  name: 'maintabbar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
@import "~assets/css/base.css";

#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}

img{
  height: 24px;
}
</style>

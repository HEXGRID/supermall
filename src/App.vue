<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <component :is="Component"  v-if="!$route.meta.keepAlive"/>
    </router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import Maintabbar from 'components/content/maintabbar/maintabbar'
import home from 'views/home/home'
  export default {
    name: 'app',
    components: {
      Maintabbar,
      home
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>

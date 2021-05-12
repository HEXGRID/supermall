<!--  -->
<template>
  <div id="profile">
    <navbar class="profile-nav">
      <template v-slot:nav-center>
        小码哥商城
      </template>
    </navbar>
    <scroll>
      <login></login>
      <money></money>
      <div class="line"></div>
      <profile-list></profile-list>
    </scroll>


  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import login from 'views/profile/childComp/login'
import money from 'views/profile/childComp/money'
import scroll from 'components/common/scroll/scroll.vue'
import profileList from 'views/profile/childComp/profileList'
export default {
  name: 'profile',
  data () {
    return {
    }
  },
  components:{
    Navbar,login,money,scroll,profileList
  }
}
</script>
<style scoped>
  .profile-nav{
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  box-shadow: none;
}
.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
</style>

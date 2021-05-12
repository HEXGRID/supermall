<!--登录-->
<template>
  <div class='login'>
    <div class="user-pic">
      <van-image :src="defaultPic" class="user-pic-img" fit="cover" round />
    </div>
    <div class="user-info">
      <p>登录/注册</p>
      <div class="phone-num">
        <img alt="" class="icon-phone" src="~assets/img/profile/phone.svg" />
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <img alt="" src="~assets/img/profile/arrow-right.png" />
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data () {
    return {
      defaultPic: require("assets/img/profile/avatar.svg")
    };
  },
  components: {},
}

</script>
<style scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background-color: #ff8198;
}

.user-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
}

.user-info {
  font-size: 18px;
  margin-left: 20px;
  color: white;
}

.user-info p:last-child {
  margin-left: 3px;
}

.user-info .phone-num {
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.icon-phone {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.profile-arrow-right {
  position: absolute;
  right: 10px;
  width: 30px;
  height: 20px;
}

.profile-arrow-right img {
  display: inline-block;
  width: 30px;
  height: 30px;
}
</style>
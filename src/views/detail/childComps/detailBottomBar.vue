<!--底部工具栏-->
<template>
  <div class="bottom-bar">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon
        :badge="cartLength"
        @click="$router.push('/shopcart')"
        icon="cart-o"
        text="购物车"
      />
      <van-action-bar-icon
        :color="isCollect ? '#ff5000' : '#000000'"
        :icon="isCollect ? 'star' : 'star-o'"
        :text="isCollect ? '已收藏' : '收藏'"
        @click="starClick"
      />
      <van-action-bar-button @click="addToCart" text="加入购物车" type="warning" />
      <van-action-bar-button @click="$router.push('/shopcart')" text="立即购买" type="danger" />
    </van-action-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailBottomBar",
  data () {
    return {
      isCollect:false
    };
  },
  computed:{
    ...mapGetters({
      cartLength: "cartListLength"
    })
  },
  created() {
    let list = JSON.parse(localStorage.getItem("cartList")) || [];
    if(list){
      this.$store.commit('setCartList',list)
    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart')
    },
    starClick(){
      if(this.isCollect==false){
        this.isCollect=true
        this.$toast.success('收藏成功')
      }else{
        this.isCollect=false
        this.$toast.success("你已取消收藏")
      }
    }
  },
}

</script>
<style scoped>
.bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
}

.van-action-bar {
  line-height: 50px;
  height: 50px;
  border-top: 1px solid #cccccc;
}

.van-action-bar-icon {
  height: auto;
}
</style>
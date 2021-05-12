<!--购物车页面-->
<template>
  <div id="shop-cart">
    <navbar class="shop-nav">
      <template v-slot:nav-center>
        购物车<span>({{cartListLength}})</span>
      </template>
    </navbar>
    <scroll ref="scroll"
    :probe-type="3"
    :pull-up-load='false'
    class="scroll">
      <cart-list @handleCheckedItem='handleCheckedItem'></cart-list>
    </scroll>
    <cart-bottom @submit='submit' ref="cartBottom"></cart-bottom>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import cartList from 'views/shopcart/childComp/cartList'
import cartBottom from 'views/shopcart/childComp/cartBottom'

import Scroll from 'components/common/scroll/scroll.vue'
import { mapGetters,mapMutations } from "vuex";
export default {
  name: 'shopcart',
  computed: {
    ...mapGetters(["cartList", "cartListLength"]),
  },
  created() {
    // 每次刷新页面获取本地存储购物车数据
    let list = JSON.parse(localStorage.getItem("cartList")) || [];
    if (list) {
      this.setCartList(list);
    }
  },
  methods: {
    ...mapMutations(['setCartList','clearCartList']),
    submit(){
      if(this.$refs.cartBottom.checkedLength==0){
        this.$toast({
          type: "fail",
          message: `您还没有选中商品哦`,
          forbidClick: true,
          duration: 1500
        });
      }else{
        this.$dialog.confirm({
          title:'温馨提示',
          message:'你确定要提交订单吗'
        })
        .then(()=>{
          this.$toast({
            type:'success',
            message: `提交 ${this.$refs.cartBottom.checkedLength} 条数据成功`,
            forbidClick: true,
            duration: 1500
          })
          setTimeout(()=>{
            this.clearCartList()
            this.$refs.cartBottom.checkedAll=false
          },1500)
        })
        .catch(err=>err)
      }
    },
    // 反选
    handleCheckedItem(){
      let result=this.cartList.filter(item=>item.checked)
      this.$refs.cartBottom.checkedAll=result.length>0 && result.length==this.cartListLength
    }
  },
  components:{
    Navbar,
    cartList,
    Scroll,
    cartBottom
  }
}

</script>
<style scoped>
.shop-nav{
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
.scroll{
  bottom: 100px !important
}
</style>

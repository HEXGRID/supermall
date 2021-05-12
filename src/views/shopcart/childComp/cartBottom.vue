<!--底部结算工具栏-->
<template>
  <div class="car-bottom-bar">
    <div class="cart-bottom-checked">
      <van-checkbox @click="handleCheckedAll" class="checked-all" v-model="checkedAll">
        全选
      </van-checkbox>
    </div>
    <div class="cart-total-price">
      合计：
      <span>¥ {{ totalPrice }}</span>
      元
    </div>
    <div class="cart-bottom-btn">
      <button @click="onSubmit">提交订单({{ checkedLength }})</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'cartBottom',
  data () {
    return {
      checkedAll:false
    };
  },
  computed:{
    ...mapGetters(["cartList", "cartListLength"]),
    totalPrice(){
      return  this.cartList
      .filter(item => item.checked)
      .reduce((prev, item) => prev + item.price * item.count, 0)
      .toFixed(2);
    },
    checkedLength(){
      return this.cartList.filter(item => item.checked).length;
    }
  },
  methods: {
    // 全选
    handleCheckedAll(){
      this.cartList.forEach(item => {
        item.checked=this.checkedAll
      });
    },
    // 提交
    onSubmit(){
      this.$emit('submit')
    }
  },
  components: {},
}

</script>
<style scoped>
.car-bottom-bar{
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 49px;
  padding-left: 10px;
  border-top: 1px solid #ccc;
}
.cart-bottom-btn button{
  height: 50px;
  outline: none;
  padding: 0 20px;
  border: 0;
  background: linear-gradient(90deg,#ff6034,#ee0a24);
  color: #fff;
}
.cart-total-price span{
  color: red;
  font-weight: bold;
}
</style>
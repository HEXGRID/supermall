<!--购物车列表-->
<template>
  <div class="cartList">
    <div class='shop-item' v-for="(item,index) in cartList" :key="index">
      <div class="item-selector">
        <van-checkbox @change="handleCheckedItem" v-model="item.checked" />
      </div>
      <div class="item-img">
        <img :src="item.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-desc">商品描述: {{ item.desc }}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{ item.price }}</div>
          <div class="item-count right">x{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name:'cartList',
  computed:{
    ...mapGetters(["cartList"])
  },
  methods: {
    // 反选
    handleCheckedItem(){
      this.$emit('handleCheckedItem')
    }
  },
}

</script>
<style scoped>
.shop-item{
  display: flex;
  width: 100%;
  padding: 8px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.shop-item:last-child{
  border-bottom: 0px;
}
.item-img{
  padding: 0px 5px;
}
.item-img img{
  width: 88px;
  height: 110px;
  border-radius: 10px;
}
.item-info{
  width: 71%;
  padding: 5px 8px;
}
.item-title,.item-desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-title{
  font-size: 18px;
  color: #333;
}
.item-desc{
margin-top: 20px;
font-size: 14px;
}
.info-bottom{
  margin-top: 20px;
}
.item-price{
  color: #ff4500;
  font-size: 18px;
  font-weight: bold;
}
</style>
import { createStore } from 'vuex'
import {Toast} from 'vant'
export default createStore({
  state: {
    // 默认tabBar显示
    tabBarShow: true,
    // 购物车数据
    cartList: [],
    // 是否开启请求加载
    isLoading: true
  },
  mutations: {
    setTabBarShow(state,bool){
      state.tabBarShow=bool
    },
    addCounter(state,result){
      result.count++
      Toast({
        type: "success",
        message: `当前商品数量为${result.count}`,
        // 弹框的时候禁止点击
        forbidClick: true,
        duration: 1500
      });
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    addToCart(state,data){
      data.count=1
      data.checked=false
      state.cartList.push(data)
      Toast({
        type: "success",
        message: '加入购物车成功',
        // 弹框的时候禁止点击
        forbidClick: true,
        duration: 1500
      });
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    setCartList(state,data){
      state.cartList=data
    },
    clearCartList(state){
      let result=state.cartList.filter(item=>item.checked!==true)
      if(result.length===0){
        localStorage.removeItem('cartList')
        state.cartList=[]
      }else{
        state.cartList=result
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
      }
    },
    setLoading(state,bol){
      state.isLoading=bol
      if(state.isLoading){
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration:0
        })
      }else{
        Toast.clear()
      }
    }
  },
  actions: {
    setShopCartData({state,commit},data){
      let list=JSON.parse(localStorage.getItem('cartList')) || []

      if(list){
        state.cartList=list
        let result=state.cartList.find(item=>{
          return item.id===data.id
        })
        if(result){
          commit('addCounter',result)
        }else{
          commit("addToCart", data);
        }
      }else{
        commit("addToCart", data);
      }
    }
  },
  modules: {
  },
  getters:{
    tabBarShow: state => state.tabBarShow,
    cartList: state => state.cartList,
    // 把getters传给自己,getters默认在第二个参数
    cartListLength: (state, getters) => getters.cartList.length,
    // 映射请求加载
    isLoading: state => state.isLoading
  }
})


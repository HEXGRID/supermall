<!--  -->
<template>
  <div class="category">
    <navbar class="category-nav">
      <template v-slot:nav-center>
        商品分类
      </template>
    </navbar>
    <scroll class="slide-bar-scroll">
        <slide-bar :categoryList='categoryList' @slideBarItemClick='slideBarItemClick'></slide-bar>
    </scroll>
    <scroll class="subCategory-scroll">
        <sub-category :subCategoryList='subCategoryList'></sub-category>
        <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl"></tab-control>
        <goods-list :goods='categoryDetailList'></goods-list>
    </scroll>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import scroll from 'components/common/scroll/scroll'
import tabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import slideBar from 'views/category/childComp/Slidebar'
import subCategory from 'views/category/childComp/Subcategory'

import {getCategory,getSubCategory,getCategoryDetail} from 'network/category'

import { mapMutations } from "vuex";
export default {
  name: 'category',
  data () {
    return {
      // 分类侧边栏数据
      categoryList: [],
      currentIndex:0,

      // 分类标签数据
      subCategoryList:[],

      // 商品分类栏
      currentType:'pop',
      // 分类商品数据
      categoryDetailList: [],
      // 数据请求完成判断
      BolCategory:true,
      BolSubcategory:true,
      BolCategoryDetail:true
    }
  },
  components:{
    Navbar,scroll,slideBar,subCategory,tabControl,GoodsList
  },
  created() {
    this.getCategory()
  },
  computed:{
    Loading(){
      const{BolCategory,BolSubcategory,BolCategoryDetail}=this
      return{
        BolCategory,BolSubcategory,BolCategoryDetail
      }
    }
  },
  watch:{
    Loading(nval){
      if(!(nval.BolCategory || nval.BolSubcategory || nval.BolCategoryDetail))
        this.setLoading(false)
      else
        this.setLoading(true)
    }
  },
  methods: {
    ...mapMutations(['setLoading']),
    getCategory(){
      getCategory().then(res=>{
        const data=res.data
        this.categoryList = data.category.list;
        this.$nextTick(()=>{
          this.BolCategory=false
          this.getSubCategory(this.categoryList[0].maitKey)
          this.getCategoryDetail(this.categoryList[0].miniWallkey,this.currentType)
        })
      })
    },
    getSubCategory(key){
      this.BolSubcategory=true
      getSubCategory(key).then(res=>{
        const data=res.data
        this.subCategoryList=data.list
        // console.log(data.list);
        this.$nextTick(()=>{
          this.BolSubcategory=false
        })
      })
    },
    getCategoryDetail(key,type){
      this.BolCategoryDetail=true
      getCategoryDetail(key,type).then(res=>{
        this.categoryDetailList=res
        this.$nextTick(()=>{
          this.BolCategoryDetail=false
        })
      })
    },
    slideBarItemClick(obj){
      this.currentIndex=obj.index
      // 初始化商品分类栏
      this.currentType='pop'
      this.$refs.tabControl.currentIndex=0
      // 请求数据
      this.getSubCategory(obj.maitKey)
      this.getCategoryDetail(obj.miniWallkey,this.currentType)
    },
    tabClick(index){
      switch(index){
        case 0 :
          this.currentType='pop'
          break
        case 1 :
          this.currentType='new'
          break
        case 2 :
          this.currentType='sell'
          break
      }
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey,this.currentType)
    }
  },
}
</script>
<style scoped>
.category-nav{
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
.slide-bar-scroll{
  position: fixed;
  width: 110px;
  background-color: #f6f6f6;
  overflow: hidden;
}
.subCategory-scroll{
  position: fixed;
  left: 110px;
}
</style>

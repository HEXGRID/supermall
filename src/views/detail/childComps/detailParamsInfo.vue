<!--商品参数信息-->
<template>
  <div class="detail-params" v-if="Object.keys(detailParamsInfo).length!==0">
    <h3>参数信息</h3>
    <table class="size-info">
      <tr v-for="(row,index) in detailParamsInfo.size" :key="index">
        <td v-for="(column,index) in row" :key="index">{{column}}</td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="(item,index) in detailParamsInfo.params" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
   <div class="detail-params-none" style="color: red;" v-else>暂无商品参数信息</div>
</template>

<script>
export default {
  name:'detailparamsinfo',
  props:{
    detailParamsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    };
  },
  components: {},
}

</script>
<style scoped>
.detail-params{
  padding: 20px 20px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-params-none{
  padding: 5px 10px;
  border-bottom: 5px solid #f2f5f8;
}
h3{
  margin-bottom: 10px;
}
table{
  width: 100%;
  border-collapse: collapse
}
.size-info{
  border-bottom: 3px solid #f2f5f8;
}
table tr{
  border-bottom: 2px solid #f2f5f8;
}
table tr td{
  padding: 10px 0px;
}
.key{
  width: 23%;
}
.value{
  color: #eb4868;
}
</style>
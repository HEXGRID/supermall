<!--评论-->
<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <h3 class="header-Title">用户评价</h3>
      <div class="header-more">
        <span>更多</span>
        <img src="~assets/img/detail/arrow-right.png">
      </div>
    </div>
    <div class="comment_item">
      <div class="info-user">
        <img :src='commentInfo.user.avatar'>
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="data">{{showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-img"></div>
      </div>
    </div>
  </div>
  <div class="comment-info" style="color: red;" v-else>暂无用户评论</div>
</template>

<script>
import {formatDate} from '@/utils/fomatData'
export default {
  name:'detailcomment',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showDate() {
      return this.setData(this.commentInfo.created)
    }
  },
  methods: {
    setData(value){
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
}
</script>

<style scoped>
.comment-info{
  padding: 5px 10px;
  border-bottom: 5px solid #f2f5f8;
}
.info-header{
  display: flex;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.header-more{
  display: flex;
}
.header-more img{
  width: 20px;
  height: 20px;
}

.comment_item{
  padding-bottom: 20px;
}
.info-user{
  display: flex;
  padding: 5px 0px;
  align-items: center;
}
.info-user img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.info-user span{
  margin-left: 10px;
  font-size: 18px;
}
.info-other{
  margin-top: 10px;
  color: #999;
  font-size: 14px;
}
.info-other .data{
  margin-right: 10px;
}
</style>
import {request} from "./request";
export function getdetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: "/recommend"
  }).catch(err => err);
}

export class goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
  }
}

export class shop{
  constructor(shopInfo){
    this.image=shopInfo.shopLogo
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.sells=shopInfo.cSells
    this.score=shopInfo.score
    this.goodsCount=shopInfo.cGoods
  }
}

export class detailsInfo{
  constructor(detailsInfo){
    this.desc=detailsInfo.desc
    this.imageKey=detailsInfo.detailImage[0].key
    this.imgList=detailsInfo.detailImage[0].list
  }
}

export class detailParamsInfo{
  constructor(detailParamsInfo){
    this.size=detailParamsInfo.rule ? detailParamsInfo.rule.tables[0] : null
    this.params=detailParamsInfo.info.set
  }
}

export class commentInfo{
  constructor(commentInfo){
    this.commentCount=commentInfo.cRate
    this.userList=commentInfo.list
  }
}
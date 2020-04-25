<template>
  <div id="person-center">
    <div class="top">
      <p class="title">设置您的商城昵称</p>
      <router-link to='/setup'>
        <p class="shezhi">设置</p>
      </router-link>
    </div>
    <div class="wealth">
      <p>
        <span class="integral">积分</span> <span class="count">1100</span>
      </p>
      <p>
        <span class="integral">红包卡券</span> <span class="count">2</span>
      </p>
    </div>
    <div class="order-status">
        <div class="title">
          <p>我的订单</p>
          <p>查看全部订单></p>
        </div>
      <div class="list">
        <div>
          <p><span class="iconfont icon-daifukuan"></span></p>
          <p>待付款</p>
        </div>
        <div>
          <p><span class="iconfont icon-daifahuo"></span></p>
          <p>待发货</p>
        </div>
        <div>
          <p><span class="iconfont icon-daishouhuo"></span></p>
          <p>待收货</p>
        </div>
        <div>
          <p><span class="iconfont icon-hebingxingzhuangfuzhi"></span></p>
          <p>评价</p>
        </div>
      </div>
    </div>
    <div class="service">
      <div>
        <p><span class="iconfont icon-yaoqinghaoyou"></span></p>
        <p>推荐好友</p>
      </div>
      <div>
        <p><span class="iconfont icon-wodehaoyou"></span></p>
        <p>我的好友</p>
      </div>
      <div>
        <p><span class="iconfont icon-shoucangjia"></span></p>
        <p>收藏夹</p>
      </div>
      <div>
        <p class="xiaoxi" >
          <span class="iconfont icon-yijianfankui" style="position: relative">
          <span style="background:white;position: absolute;right:0;top:0;color:red;width:15px;height:15px;line-height:15px;
          border:1px solid red;font-size: 10px;border-radius: 50%;">99</span>
          </span>
        </p>
        <p>消息中心</p>
      </div>
      <div>
        <p><span class="iconfont icon-lianxikefu"></span></p>
        <p>联系客服</p>
      </div>
      <div>
        <p><span class="iconfont icon-tuikuan"></span></p>
        <p>售后/退款</p>
      </div>




    </div>

  </div>
</template>
<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  #person-center
    .top
      position relative
      padding-top 20px
      .title
        text-align center
      .shezhi
        position absolute
        top 20px
        right 15px
    .wealth
      display flex
      padding 20px 0
      margin 20px 15px
      background oldlace
      border-radius 5px
      p
        text-align center
        &:first-child
          width 50%
        &:last-child
          width 50%
          border-left 2px solid orange
        span
          padding 0 15px
          font-weight bold
        .count
          color orangered
    .order-status
      margin 15px
      padding 15px
      background white
      border-radius 5px
      .title
        display flex
        justify-content space-between
        margin 0 15px
        padding-bottom 10px
        bottom-border-1px(#FE7700)
        p
          &:first-child
            font-weight bold
          &:last-child
            font-size 12px
            color #9D9D9D
      .list
        display flex
        justify-content space-around
        margin-top 20px
        div
          text-align center
          font-size 13px
          p
            &:last-child
              margin-top 5px
            span
              font-size 30px
              color #FE7700
    .service
      margin 15px
      padding 15px
      background white
      border-radius 5px
      display flex
      flex-wrap wrap
      div
        width 25%
        text-align center
        padding 10px 0
        p
          &:first-child
            span
              color #FE7700
              font-size 30px
          &:last-child
            font-size 12px
            padding-top 10px
</style>




<template>
  <div class="content-item">
    <img src="./images/background-1.jpg" alt="">
    <div class="title">

      <p>
        <span>本地物流</span>
        <span>花花公子哈斯大护法is的回奥is大佛爱的色放</span>
      </p>
    </div>

    <div class="price">
      <p>￥100 <span>11111付款</span></p>
      <p><i class="iconfont icon-gengduo"></i></p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
  .content-item
    width 46%
    background #fff
    border-radius 10px
    margin 10px 1%  0 1%
    img
      width 100%
      border-radius 5px 5px 0 0
    .title
      font-size 13px
      p
        line-height 20px
        span
          &:first-child
            line-height 20px
            font-size 10px
            background orangered
            border-radius 5px
          &:last-child
            padding-top 1px
    .bussiness
      display flex
      font-size 10px
      margin-top 8px
      p
        padding 1px
        border 1px solid orangered
        margin-right 5px
        border-radius 3px
        &.hidden
          display none
    .price
      display flex
      justify-content space-between
      font-size 15px
      p
        line-height 20px
        padding 0 5px
        &:last-child
        span
          font-size 8px
</style>

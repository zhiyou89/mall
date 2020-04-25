<template>
  <div id="cart">
    <div class="top">
      <p class="title">购物车</p>
      <div class="top-right">
        <span>编辑</span>
        <i class="iconfont icon-gengduo"></i>
      </div>
      <div class="top-nav">
        <ul>
          <li class="active">全部 <span>(13)</span></li>
          <li>降价 <span>(11)</span></li>
          <li>常买 <span>(22)</span></li>
          <li>分类 <span class="iconfont icon-below-s"></span></li>
        </ul>
      </div>
    </div>

    <div class="item">
      <div class="name">
        <div class="item-1">
          <span class="iconfont icon-xuanze"></span>&nbsp;
          <span class="iconfont icon-dianpu"></span>&nbsp;
          <span>省经委男鞋店 </span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
        <div class="item-2">
          <p class="checkbox">
            <span class="iconfont icon-xuanze"></span>
          </p>
            <img src="./images/background-1.jpg" alt="">
          <div class="item-2-content">
            <p>卡号打飞机第三方爱德华发健康时代光华可视对讲发送到开饭</p>
            <span class="guige ">棕色，40，选服务 &nbsp; > </span>
            <div class="price">
              <p class="money">$100</p>
              <p><span class="sub">-</span><span class="count">1</span><span class="add">+</span></p>
            </div>
          </div>
        </div>
        <div class="item-2">
          <div class="checkbox">
            <span class="iconfont icon-xuanze"></span>
          </div>
          <img src="./images/background-1.jpg" alt="">
          <div class="item-2-content">
            <p>卡号打飞机第三方爱德华发健康时代光华可视对讲发送到开饭</p>
            <span class="guige ">棕色，40，选服务 &nbsp; > </span>
            <div class="price">
              <p class="money">$100</p>
              <p><span class="sub">-</span><span class="count">1</span><span class="add">+</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="name">
        <div class="item-1">
          <span class="iconfont icon-xuanze"></span>&nbsp;
          <span class="iconfont icon-dianpu"></span>&nbsp;
          <span>省经委男鞋店 </span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
        <div class="item-2">
          <div class="checkbox">
            <span class="iconfont icon-xuanze"></span>
          </div>
          <img src="./images/background-1.jpg" alt="">
          <div class="item-2-content">
            <p>卡号打飞机第三方爱德华发健康时代光华可视对讲发送到开饭</p>
            <span class="guige ">棕色，40，选服务 &nbsp; > </span>
            <div class="price">
              <p class="money">$100</p>
              <p><span class="sub">-</span><span class="count">1</span><span class="add">+</span></p>
            </div>
          </div>
        </div>
        <div class="item-2">
          <div class="checkbox">
            <span class="iconfont icon-xuanze"></span>
          </div>
          <img src="./images/background-1.jpg" alt="">
          <div class="item-2-content">
            <p>卡号打飞机第三方爱德华发健康时代光华可视对讲发送到开饭</p>
            <span class="guige ">棕色，40，选服务 &nbsp; > </span>
            <div class="price">
              <p class="money">$100</p>
              <p><span class="sub">-</span><span class="count">1</span><span class="add">+</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="stylus">
  #cart
    padding-bottom 100px
    .top
      padding-top 15px
      position relative
      background  white
      border-bottom-left-radius 1em
      border-bottom-right-radius 1em
      .title
        text-align center
        font-size 16px
        span
          color gray
      .top-right
        font-size 12px
        position absolute
        top 15px
        right 15px
        span
          padding-right 5px
      .top-nav
        font-size 12px
        padding 25px 0
        ul
          display flex
          justify-content space-around
          li
            &.active
              color orangered
    .item
      padding 15px 0
      margin-top 15px
      background white
      border-radius 1em
    .item-2
      padding 15px
      display flex
      justify-content space-around
      .checkbox
        line-height 90px
        width 5%
      img
        width 25%
        height 90px
        padding 0 10px
      .item-2-content
        width 70%
        font-size 12px
        p
          line-height 20px
          letter-spacing 1px
          display block
          margin-bottom 10px
        .guige
          padding 2px
          border-radius 2px
          font-size 10px
          background #f4f4f4
          border-radius 3px
      .price
        display flex
        margin-top 10px
        justify-content space-between
        .money
          font-size 15px
          color orangered
        .count
          padding 1px 10px
          background #f4f4f4
          font-size 10px
          margin 0 5px
</style>

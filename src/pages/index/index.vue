<template>

        <div id="index-page">
            <div class="top">
                <div class="top-nav">
                    <HerderTop></HerderTop>
                    <Navigation></Navigation>
                </div>
                <div id="ratation-chart-box">
                    <RotationChart></RotationChart>
                </div>
                <div id="m-site">
                    <Msite></Msite>
                </div>
            </div>
            <div class="middle">
                 <ul>
                    <li>精选</li>
                    <li>新品</li>
                     <li>本地</li>
                     <li>商家</li>
                     <li>助农</li>
                 </ul>
                <div class="content">
                  <div class="content-item">
                    <img src="./images/background-1.jpg" alt="">
                    <div class="title">

                      <p>
                        <span>本地物流</span>
                        <span>花花公子哈斯大护法is的回奥is大佛爱的色放</span>
                      </p>
                    </div>
                    <div class="bussiness">
                      <p>正常物流</p>
                    </div>
                    <div class="price">
                      <p>￥100 <span>11111付款</span></p>
                      <p><i class="iconfont icon-gengduo"></i></p>
                    </div>
                  </div>
                  <div class="content-item">
                    <img src="./images/background-1.jpg" alt="">
                    <div class="title">

                      <p>
                        <span>本地物流</span>
                        <span>花花公子哈斯大护法is的回奥is大佛爱的色放</span>
                      </p>
                    </div>
                    <div class="bussiness">
                      <p>正常物流</p>
                    </div>
                    <div class="price">
                      <p>￥100 <span>11111付款</span></p>
                      <p><i class="iconfont icon-gengduo"></i></p>
                    </div>
                  </div>
                  <div class="content-item">
                    <img src="./images/background-1.jpg" alt="">
                    <div class="title">

                      <p>
                        <span>本地物流</span>
                        <span>花花公子哈斯大护法is的回奥is大佛爱的色放</span>
                      </p>
                    </div>
                    <div class="bussiness">
                      <p>正常物流</p>
                    </div>
                    <div class="price">
                      <p>￥100 <span>11111付款</span></p>
                      <p><i class="iconfont icon-gengduo"></i></p>
                    </div>
                  </div>
                </div>
            </div>
        </div>


</template>
<script>
import HerderTop from '@/components/Header/Header.vue'
import Navigation from '@/components/Navigation/Navigation.vue'
import RotationChart from '@/components/RotationChart/RotationChart.vue'
import Msite from '@/components/Msite/Msite.vue'
export default {
  components: {
    Navigation,
    RotationChart,
    Msite,
    HerderTop

  }
}
</script>
<style lang="stylus">
    #index-page
        background #f4f4f4
        .top
            position relative
            height 450px
            .top-nav
                padding-top 10px
                height 140px
                width 100%
                background url('../../components/Item-1/images/background-1.jpg') no-repeat 0 0
            #ratation-chart-box
                width 100%
                position absolute
                left 0
                top 100px
            #m-site
                margin-top 110px
        .middle
            margin-top 20px

            ul
                display flex
                justify-content space-around
                li
                    color black
                    padding 0 20px
                    border-right 1px solid #FF4D29
                    &:last-child
                        border none
            .content
              display flex
              flex-wrap wrap
              padding-bottom 100px
              .content-item
                width 46%
                background #fff
                border-radius 10px
                margin 10px 2%  0 2%
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
                  margin 10px 0
                  p
                    line-height 20px
                    padding 0 5px
                    &:last-child
                    span
                      font-size 8px


</style>

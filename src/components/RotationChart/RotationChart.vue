<template>
    <div id="rotation-chart">
        <div class="swiper-container" id="rotation-chart-swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="banner in banners" :key="banner">
                    <img :src="banner" alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      delayTime: 3000,
      banners: [ 'https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/zhiyou/e575f1c94f62fa7f2d33d80b4200f9a.jpg',
        'https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/zhiyou/afbe5dfebd62ae4d783262502d79077.jpg']
    }
  },
  mounted () {
    this._initSwiper()
  },
  methods: {
    _initSwiper () {
      new Swiper('#rotation-chart-swiper-container', {
        autoplay: {
          delay: this.delayTime,
          disableOnInteraction: false
        },
        loop: true,
        observer: true,
        observeParents: true
      })
    }
  }

}
</script>
<style scope lang="stylus" rel="stylesheet/stylus">
    #rotation-chart
        text-align center
        img
          height 150px
          width 94% !important
          border-radius 15px
</style>

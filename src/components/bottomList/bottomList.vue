<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item"  :class="{on: '/index'===$route.path || $route.path === '/'}" @click="goto('/index')">
          <span class="item_icon">
            <i class="iconfont icon-shouye"></i>
          </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/list'===$route.path }" @click="goto('/list')">
          <span class="item_icon">
            <i class="iconfont icon-daohangfenlei"></i>
          </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/cart'===$route.path }" @click="goto('/cart')">
          <span class="item_icon">
            <i class="iconfont icon-daohanggouwuche"></i>
          </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/center'===$route.path }" @click="goto('/center')">
          <span class="item_icon">
            <i class="iconfont icon-wode"></i>
          </span>
      <span>我的</span>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 999
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      text-decoration:none
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

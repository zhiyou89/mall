<template>
    <header class="header">
        <div class="left">
            <div class="icon-box">
                <span class="iconfont icon-sousuo"></span>
            </div>
            <div class="input-box">
                <input type="text">
            </div>
        </div>
        <div class="right">
            <div class="saoyisao">
                <div class="iconfont icon-saoma"></div>
                <div class="text">扫一扫</div>
            </div>
            <div class="xiaoxi">
                <div class="iconfont icon-xiaoxi"></div>
                <div class="text">消息</div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  props: {
    title: String
  }
}

</script>
<style lang="stylus">
    .header
        height 40px
        display flex
        .left
            width 80%
            display flex
            margin 5px 0 5px 15px
            .input-box
                input
                    height 30px
                    width 200px
                    border none
                    outline none
                    border-top-right-radius 2em
                    border-bottom-right-radius 2em
            .icon-box
                height 30px
                border none
                background white
                padding-left 10px
                border-top-left-radius 2em
                border-bottom-left-radius 2em
                span
                    line-height 30px
        .right
            color #fff
            width 20%
            display flex
            font-size 10px
            text-align center
            margin 5px 0
            .saoyisao
                padding-right 10px

</style>

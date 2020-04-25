<template>
    <div id="mynav">
        <div class="menu">
            <a class="item active">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单</a>
            <a class="item">菜单1</a>
            <a class="item item-empty"></a>
        </div>
        <div class="right">
            <div class="con-1">
                <img src="./images/border.png">
            </div>
            <div class="con-2">
                <span class="iconfont icon-daohangfenlei"></span>
                <span class="mylist">分类</span>
            </div>
        </div>
    </div>

</template>
<script>

export default {

}
</script>
<style lang="stylus">
    #mynav
        position relative
        color white
        padding 0
        margin 0
        .menu
            width 100%
            height 40px
            white-space nowrap
            overflow hidden
            overflow-x scroll
            -webkit-backface-visibility hidden
            -webkit-perspective 1000
            -webkit-overflow-scrolling touch
            -webkit-scrollbar display none
            .active
                color black
            .item
                font-size 14px
                margin-left 15px
                display inline-block
                text-decoration none
                line-height 40px
            .item-empty
                width 20%
        .right
            position absolute
            top 0
            right 0
            display flex
            height 40px
            background #FF4D29
            .con-1
                padding 0 5px
                img
                    height 18px
                    margin-top 12px
            .con-2
                line-height 40px
                padding-right 5px
                font-size 13px
</style>

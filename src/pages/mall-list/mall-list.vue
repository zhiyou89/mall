<template>
  <div id="mall-list">
    <Search class="search"></Search>
    <div class="mall-list-content">
      <div class="left">

      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>
<script>
import Search from '@/components/Header/Header.vue'
export default {
  components: {
    Search
  }
}
</script>
<style lang="stylus">
  #mall-list
    .search
      padding-top 15px
    .mall-list-content
      padding-top 15px
      display flex
      .left
        width 25%
        height 1000px
        background red
      .right
        width 75%
        height 1000px
        background black
</style>

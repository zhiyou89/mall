<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/bottomList/bottomList.vue'
export default {
  components: {
    Footer
  }
}
</script>

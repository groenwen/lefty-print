<script>
import headerView from '../components/HeaderTemp.vue'
import footerView from '../components/FooterTemp.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    headerView, footerView
  }
}
</script>
<template>
  <headerView></headerView>
  <div class="main">
    <router-view />
  </div>
  <footerView></footerView>
</template>
<style lang="scss">
  .main {
    min-height: 70vh;
  }
</style>

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
  },
  mounted () {

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
    min-height: 50vh;
  }
</style>

<template>
  <div class="bg-dark">
    <div class="container">
      <div class="px-3 py-6 border-bottom border-white border-opacity-25">
        <div class="row align-items-center">
          <div class="col-2">
            <img class="" src="@/assets/images/logo_white.svg" alt="">
          </div>
          <div class="col-2 d-flex flex-column">
            <router-link to="/products" class="mb-3 text-white">所有產品</router-link>
            <router-link to="/make" class="text-white" :class="{'active':this.$route.path === '/make'}">名片快速製作</router-link>
          </div>
          <div class="col-2 d-flex flex-column">
            <router-link to="/quote" class="mb-3 text-white" :class="{'active':this.$route.path === '/quote'}">
              <span class="material-symbols-sharp fs-5 align-text-bottom">request_quote</span> 特殊尺寸報價
            </router-link>
            <router-link to="/days" class="text-white" :class="{'active':this.$route.path === '/days'}">
              <span class="material-symbols-sharp fs-5 align-text-bottom">calendar_month</span> 印刷工作天
            </router-link>
          </div>
        </div>
      </div>
      <div class="py-5">
        <p class="mb-0 text-center text-white fs-7">Copyright © Print 2022 | <span class="d-md-inline d-block me-5">僅個人作品，無商業用途</span>
          <router-link to="/admin" class="btn-link">管理員登入</router-link><br>
          Image by <a href="https://www.freepik.com/free-vector/people-avatar-collection_3983800.htm#page=3&query=hand%20drawn%20face&position=19&from_view=author" target="_blank">Freepik</a> &
          <a href="https://www.freepik.com/free-vector/people-research-analytics-dashboard-with-graphs-charts-vector-doodle-icons-statistic-analysis-work-with-database-information-report-with-diagrams-magnifying-glass_22140005.htm#page=2&query=file&position=8&from_view=search&track=sph?sign-up=google" target="_blank">upklyak</a> on Freepik
        </p>

      </div>
    </div>
  </div>
</template>
<script>
import '@popperjs/core/dist/umd/popper.min.js'
import Tooltip from 'bootstrap/js/dist/tooltip.js'
export default {
  data () {
    return {
      tooltipList: []
    }
  },
  mounted () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    this.tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  }
}
</script>

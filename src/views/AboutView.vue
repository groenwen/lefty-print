<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }
}
</script>
<template>
  <v-loading :active="isLoading" ></v-loading>
  <div class="container mt-5">
    <div class="row g-0">
      <div class="col-4">
        <img class="img-fluid"
          src="@/assets/images/about.jpg" alt="">
      </div>
      <div class="col ">
        <div class="d-flex flex-column justify-content-center p-sm-5 p-4 h-100 bg-gray-100">
          <h1 class="mb-4">關於 Print</h1>
          <p>本網站為學習用途，不做任何商業行為，圖片來源皆為 CC0 授權</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  height: 300px;
}
</style>

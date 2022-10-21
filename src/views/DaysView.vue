<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <div class="container">
    <h1 class="fs-4 text-dark my-4">
      <span class="material-symbols-sharp me-1 align-text-top">calendar_month</span>印刷工作天
    </h1>
    <div class="row gy-3 justify-content-around">
      <div class="col-xl-5 col-md-6" v-for="item in prods" :key="item.id">
        <div class="card-days d-flex align-items-center bg-light p-3">
          <div class="card-days-content me-auto d-flex flex-grow-1 align-items-center">
            <div class="card-days-img bg-cover me-4" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            <div class="card-days-text">
              <h2 class="fs-5">{{ item.title }}</h2>
              <p class="text-primary"><span class="material-symbols-sharp me-1 align-middle">calendar_month</span> {{ item.description }}</p>
            </div>
          </div>
          <router-link :to="`/product/${item.id}`" class="btn btn-sm btn-outline-secondary">查看產品</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card-days {
  $width: 150px;
  &-img {
    max-width: $width;
    width: 100%;
    height: $width;
  }
}
</style>
<script>
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      allProds: [],
      prods: []
    }
  },
  components: { SweetAlert },
  methods: {
    getProds () {
      this.isLoading = true
      const url = `${this.VUE_APP}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false

          this.allProds = res.data.products

          // 所有 title [a, a, b, c, c, ....]
          let title = this.allProds.map(el => el.title)

          // 不重複的 title [a, b, c, ....]
          title = title.filter((el, index) => title.indexOf(el) === index)

          //
          title.forEach(tEl => {
            const prod = this.allProds.find(aEl => tEl === aEl.title)
            this.prods.push(prod)
          })
          console.log(this.allProds)
        })
        .catch((err) => {
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    }
  },
  mounted () {
    this.getProds()
  }
}
</script>

<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-5 border-bottom">
      <h1 class=" fs-3 text-dark">
        <img src="@/assets/images/people01.svg" class="me-3" height="55" alt="">
        <span class="align-middle">所有產品</span>
      </h1>
      <div>
        <span class="me-3 text-primary small">FREE SHIPPING</span>
        <span class="material-symbols-sharp text-primary fs-1 align-middle me-3">local_shipping</span>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-xl-4" v-for="item in pords" :key="item.id">
        <div class="card bg-light p-4 mb-4">
          <div class="card-img bg-cover" :style="{backgroundImage: `url(${item.imageUrl})`}">
            <img src="@/assets/images/card_img.png" alt="">
          </div>
          <div class="card-body">
            <h5 class="card-title fw-light">{{ item.title }}</h5>
            <p class="card-text text-secondary">{{ item.content }}</p>
            <div class="text-end">
              <router-link :to="`/product/${item.id}`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      allProds: [],
      pords: []
    }
  },
  components: {
    SweetAlert
  },
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
          title = title.filter((el, i) => title.indexOf(el) === i)

          // sort AllProds
          const mapped = this.allProds.map((el, i) => {
            return { index: i, value: el }
          })
          const sortList = ['width', 'height', 'side', 'qty']
          sortList.forEach(el => {
            mapped.sort((a, b) => {
              if (a.value[el] > b.value[el]) return 1
              if (a.value[el] < b.value[el]) return -1
              return 0
            })
          })
          this.allProds = mapped.map(el => this.allProds[el.index])

          // 將第一個產品 設為產品入口
          title.forEach((el, i) => {
            const prod = this.allProds.find(el2 => el === el2.title)
            this.pords.push(prod)
          })
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

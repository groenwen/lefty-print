<template>
  <div>
    <v-loading :active="isLoading"></v-loading>
    <SweetAlert></SweetAlert>
    <div class="mb-5 mb-sm-7 bg-gray100 py-5 py-sm-6">
      <div class="container">
        <HeadTitle dialog="All Products" dark-text="所有產品"></HeadTitle>
      </div>
    </div>
    <div class="container pb-8">
      <div class="row row-cols-sm-2 row-cols-lg-3 gy-5 g-md-5">
        <div v-for="item in pords" :key="item.id">
          <ProdItem :prod="item"></ProdItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/js/emitter'
import HeadTitle from '@/components/HeadTitle.vue'
import SweetAlert from '@/components/SweetAlert.vue'
import ProdItem from '@/components/ProductItem.vue'
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
    SweetAlert, HeadTitle, ProdItem
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

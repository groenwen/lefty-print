<template>
  <div class="pb-8">
    <v-loading :active="isLoading" ></v-loading>
    <SweetAlert></SweetAlert>
    <HeadTitle class="mb-7" dialog="Daily" primary-text="印刷" dark-text="工作天"></HeadTitle>
    <div class="container">
      <div class="row gy-4 justify-content-around">
        <div class="col-6" v-for="item in prods" :key="item.id">
          <div class="d-flex align-items-center p-4 bg-gray100">
            <div class="me-lg-auto d-flex flex-lg-row flex-column flex-grow-1 align-items-lg-center">
              <div class="me-lg-4 mb-lg-0 mb-4 card-days-img bg-cover" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              <div class="">
                <h2 class="mb-3 fs-5">{{ item.title }}</h2>
                <p class="text-primary fs-5"><span class="material-symbols-sharp me-1 align-middle">calendar_month</span> {{ item.description }}</p>
              </div>
            </div>
            <router-link :to="`/product/${item.id}`" class="btn btn-sm btn-outline-secondary align-self-end">查看產品</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/js/emitter'
import HeadTitle from '@/components/HeadTitle.vue'
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
  components: { HeadTitle, SweetAlert },
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

<style lang="scss">
.card-days {
  $width: 150px;
  &-img {
    width: 100%;
    height: 35vmin;
  }
  @include media-breakpoint-up(lg){
    &-img {
      max-width: $width;
      width: 100%;
      height: $width;
    }
  }
}
</style>

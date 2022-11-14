<template>
  <div class="pb-8">
    <v-loading :active="isLoading" ></v-loading>
    <SweetAlert></SweetAlert>
    <div class="mb-7 bg-gray100 py-5 py-sm-6">
      <div class="container">
        <HeadTitle dialog="Daily" primary-text="印刷" dark-text="工作天"></HeadTitle>
      </div>
    </div>
    <div class="container">
      <p>印刷工作天已下單天開始算起</p>
      <div class="row g-3 g-lg-5">
        <div class="col-md-6 col-xl-4" v-for="item in prods" :key="item.id">
          <div class="d-flex flex-lg-row flex-column p-3 p-sm-3 position-relative border border-gray200">
            <div class="me-auto d-flex flex-grow-1 align-items-center">
              <div class="me-4 card-days-img bg-cover" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              <div class="">
                <h2 class="mb-2 mb-sm-3 fs-5">{{ item.title }}</h2>
                <p class="mb-2 mb-sm-3 text-primary"><span class="material-symbols-sharp me-1 align-text-bottom">calendar_month</span> {{ item.description }}</p>
                <router-link :to="`/product/${item.id}`" class="btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
              </div>
            </div>
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
    width: 30vmin;
    height: 30vmin;
  }
  @include media-breakpoint-up(sm){
    &-img {
      width: 25vmin;
      height: 25vmin;
    }
  }
  @include media-breakpoint-up(md){
    &-img {
      width: 18vmin;
      height: 18vmin;
    }
  }
  @include media-breakpoint-up(xl){
    &-img {
      max-width: $width;
      height: $width;
    }
  }
}
</style>

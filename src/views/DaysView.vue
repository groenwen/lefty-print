<template>
  <div class="pb-8">
    <v-loading :active="isLoading"></v-loading>
    <SweetAlert></SweetAlert>
    <div class="mb-5 mb-sm-7 bg-gray100 py-5 py-sm-6">
      <div class="container d-lg-flex align-items-end">
        <HeadTitle class="me-5 mb-5 mb-lg-0" dialog="Daily" primary-text="印刷" dark-text="工作天"></HeadTitle>
        <div class="small opacity-75">
          ※ 從付款日的隔天開始計算起，不含假日及物流配送的時間。<br>
          ※ 每日下午 06:00 截稿，下午 06:00 後的訂單視為隔日訂單。
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row g-3 g-lg-5">
        <div class="col-md-6 col-xl-4" v-for="item in prods" :key="item.id">
          <router-link :to="`/product/${item.id}`" class="d-block p-3 p-sm-3 position-relative days-item">
            <div class="row align-items-center">
              <div class="col-5">
                <div class="w-100 bg-cover days-item-img" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              </div>
              <div class="col-7">
                <h2 class="mb-2 mb-sm-3 fs-5 text-dark">{{ item.title }}</h2>
                <p class="d-flex align-items-center text-primary">
                  <span class="material-symbols-sharp me-2">calendar_month</span>
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div class="position-absolute bottom-0 end-0 p-2 days-item-arrow">
              <span class="material-symbols-sharp">keyboard_double_arrow_right</span>
            </div>
          </router-link>
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
          this.isLoading = false
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
.days-item {
  $size: 150px;
  background-color: $gray-100;
  border: 1px solid $gray-200;
  box-shadow: 0 0 .5rem rgba($dark, .1);
  transition: all 0.5s;
  &-img {
    height: 30vmin;
  }
  @include media-breakpoint-up(sm) {
    &-img {
      height: 25vmin;
    }
  }
  @include media-breakpoint-up(md) {
    &-img {
      height: 18vmin;
    }
  }
  @include media-breakpoint-up(xl) {
    &-img {
      height: $size;
    }
  }
  &-arrow {
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover {
    border: 1px solid $light;
    .days-item-arrow {
      opacity: 1;
    }
  }
}
</style>

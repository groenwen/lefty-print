<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <swiper :pagination="{clickable: true}" :modules="modules" :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }" class="mySwiper">
    <swiper-slide v-for="(item, index) in bn" :key="index"
        :style="{backgroundImage: `url(${item.img})`}">
      <div class="container h-100 d-flex align-items-center">
        <div class="bn-text p-4 m-sm-0 m-4">
          <span class="mb-4 px-3 pt-2 pb-1 lh-1 d-inline-block bg-white rounded-pill">{{ item.prod }}</span>
          <h2 class="mb-4 fs-1" style="line-height: 1.5;">複雜的事我們處理好了，<span class="d-sm-block d-inline">簡單的事交給你</span></h2>
          <p>線上交付檔案 ⨉ 專人校稿 ⨉ 少量印製 ⨉ 宅配到府</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="main">
    <div class="bg-gray100 py-4">
      <div class="container d-flex flex-md-row flex-column justify-content-center align-items-center">
        <div class="d-flex align-items-center mb-md-0 mb-4">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-3 p-2 text-primary bg-white rounded-circle">backup</span>
            <span>上傳檔案</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-5">
            chevron_right
          </span>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-3 p-2 text-primary bg-white rounded-circle">style</span>
            <span>選擇材質數量</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-5">
            chevron_right
          </span>
        </div>
        <div class="d-flex align-items-center">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-3 p-2 text-primary bg-white rounded-circle">shopping_cart</span>
            <span>加入購物車</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-5">
            chevron_right
          </span>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-3 p-2 text-primary bg-white rounded-circle">local_shipping</span>
            <span>宅配到府</span>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="row gy-5 gy-sm-0">
          <div class="col-sm">
            <div class="text-center">
              <img class="mb-4" src="@/assets/images/feature01.svg">
              <h4 class="mb-4">線上交付檔案</h4>
              <p class="text-secondary">線上上傳檔案，直接下單</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img class="mb-4" src="@/assets/images/feature02.svg">
              <h4 class="mb-4">專人校稿</h4>
              <p class="text-secondary">專人為您校稿，提醒印刷注意事項</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img class="mb-4" src="@/assets/images/feature03.svg">
              <h4 class="mb-4">少量印製</h4>
              <p class="text-secondary">少量也能印，印多少算多少</p>
            </div>
          </div>
      </div>
      </div>
    </section>
    <section class="bg-new">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <span class="mb-5 d-inline-block px-4 py-1 text-white bg-primary rounded-pill position-relative dialog">New</span>
            <h2 class="mb-5 d-flex align-items-end"><img class="me-3" src="@/assets/images/people01.svg" height="72" alt=""><span class="text-primary">名片</span>快速製作</h2>
            <p class="mb-5">新功能試用立即體驗，未來將提供更多產品及更完善的線上編輯器，沒有專業繪圖軟體也能製作印刷品。</p>
            <a href="" class="btn btn-accent">立即體驗</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ServiceTemp></ServiceTemp>
    </section>
    <section>
      <div class="container">
        <div class="mb-7">
          <div class="mb-5">
            <span class="mb-5 d-inline-block px-4 py-1 text-white bg-primary rounded-pill position-relative dialog">Business</span>
            <h2 class="mb-5 d-flex align-items-end"><img class="me-3" src="@/assets/images/people02.svg" height="72" alt="">專業形象</h2>
          </div>
          <div class="row">
            <div v-for="item in category['商業']" :key="item.id" class="col-4">
              <ProdItem :prod="item"></ProdItem>
            </div>
          </div>
        </div>
        <div class="mb-7">
          <div class="mb-5">
            <span class="mb-5 d-inline-block px-4 py-1 text-white bg-primary rounded-pill position-relative dialog">Life</span>
            <h2 class="mb-5 d-flex align-items-end"><img class="me-3" src="@/assets/images/people03.svg" height="72" alt="">生活印象</h2>
          </div>
          <div class="row">
            <div v-for="item in category['生活']" :key="item.id" class="col-4">
              <ProdItem :prod="item"></ProdItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import emitter from '@/js/emitter'
import ProdItem from '@/components/ProductItem.vue'
import ServiceTemp from '@/components/ServiceTemp.vue'
import SweetAlert from '@/components/SweetAlert.vue'
// swiper

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

import bannerImage1 from '@/assets/images/banner01.jpg'
import bannerImage2 from '@/assets/images/banner02.jpg'
import bannerImage3 from '@/assets/images/banner03.jpg'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      modules: [Pagination, Autoplay],
      bn: [{
        prod: '# 信封',
        img: bannerImage1
      }, {
        prod: '# 手冊',
        img: bannerImage2
      }, {
        prod: '# DM',
        img: bannerImage3
      }],
      resProds: [],
      sortProds: [],
      uniqueProds: [],
      category: {},
      carts: []
    }
  },
  components: {
    ProdItem, ServiceTemp, SweetAlert, Swiper, SwiperSlide
  },
  methods: {
    getCategory () {
      const url = `${this.VUE_APP}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.resProds = res.data.products

          // 不重複的 title
          const titleArr = this.resProds.map(el => el.title)
          const titles = titleArr.filter((el, i, arr) => arr.indexOf(el) === i)

          // prodsAll 排序 尺寸 > 單雙面 > 數量 (進入產品時，選取 最小尺寸 單面 最少數量 為基準)
          const sortList = ['width', 'height', 'side', 'p_qty', 'category']
          const mapped = this.resProds.map((el, i) => {
            return { index: i, value: el }
          })
          sortList.forEach(el => {
            mapped.sort((a, b) => {
              if (a.value[el] > b.value[el]) return 1
              if (a.value[el] < b.value[el]) return -1
              return 0
            })
          })
          // prodsAll 排序後 = sortProds
          this.sortProds = mapped.map(el => this.resProds[el.index])

          // 不重複的 產品 = uniqueProds
          this.uniqueProds = titles.map(el1 => {
            return this.sortProds.find(el2 => el2.title === el1)
          })

          // 不重複的 category
          const categoryArr = this.uniqueProds.map(el => el.category)
          const categorys = categoryArr.filter((el, i, arr) => arr.indexOf(el) === i)

          // 依分類儲存
          categorys.forEach(el1 => {
            this.category[el1] = this.uniqueProds.filter(el2 => el2.category === el1).slice(0, 3)
          })
          console.log(this.category['商業'])
          // category
          // this.
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    // 更新購物車數量
    emitter.emit('cartCount')
    this.isLoading = false
    this.getCategory()
  }
}
</script>
<style lang="scss">
.cover-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dialog::before {
  position: absolute;
  content: '';
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  transform: translateX(-50%);
  border: 8px solid;
  border-color: $primary transparent transparent transparent;
}
.bg-new {
  background: linear-gradient(120deg, #E5EBFD 52%, rgba(255, 255, 255, 0) 52%), url('@/assets/images/business_card02.png') no-repeat right center / 110% auto;
}
.swiper {
  width: 100%;
  height: 100%;
  --swiper-pagination-color: #fff;
}

.swiper-slide {
  padding: 8rem 0;
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  @include media-breakpoint-down(sm) {
    padding: 2.5rem 0;
    background-position: right 40% center;
  }

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.bn-text {
  @include media-breakpoint-down(lg) {
    background-color: rgba(#fff, .65);
  }
}

</style>

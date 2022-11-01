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
    <div class="bg-gray100 py-5">
      <div class="container d-flex flex-md-row flex-column justify-content-center align-items-center">
        <div class="d-flex align-items-center mb-md-0 mb-4">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-2 p-3 text-primary bg-white rounded-circle">backup</span>
            <span>上傳檔案</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-5">
            chevron_right
          </span>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-2  p-3 text-primary bg-white rounded-circle">style</span>
            <span>選擇材質數量</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-5">
            chevron_right
          </span>
        </div>
        <div class="d-flex align-items-center">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-2  p-3 text-primary bg-white rounded-circle">shopping_cart</span>
            <span>加入購物車</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-5">
            chevron_right
          </span>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined me-3 fs-2 p-3 text-primary bg-white rounded-circle">local_shipping</span>
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
              <p>線上上傳檔案，直接下單</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img class="mb-4" src="@/assets/images/feature02.svg">
              <h4 class="mb-4">專人校稿</h4>
              <p>專人為您校稿，提醒印刷注意事項</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img class="mb-4" src="@/assets/images/feature03.svg">
              <h4 class="mb-4">少量印製</h4>
              <p>少量也能印，印多少算多少</p>
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
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mx-3 h-100 d-flex flex-column border rounded-4 border-light px-5 py-4">
              <div class="mb-3">
                <span class="material-symbols-outlined text-primary fs-1">request_quote</span>
              </div>
              <h5 class="mb-3">特殊尺寸報價</h5>
              <p class="flex-fill mb-3 text-secondary">找不到需要的尺寸？請至此頁面計算所需模數後，將由專人為您報價。</p>
              <div class="text-end">
                <span class="material-symbols-outlined text-primary fs-3">keyboard_double_arrow_right</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mx-3 h-100 d-flex flex-column border rounded-4 border-light px-5 py-4">
              <div class="mb-3">
                <span class="material-symbols-sharp text-primary fs-1">calendar_month</span>
              </div>
              <h5 class="mb-3">印刷工作天數</h5>
              <p class="flex-fill mb-3 text-secondary">查詢要印製的產品工作天數，了解大概的出貨時間。</p>
              <div class="text-end">
                <span class="material-symbols-outlined text-primary fs-3">keyboard_double_arrow_right</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mx-3 h-100 d-flex flex-column border rounded-4 border-light px-5 py-4">
              <div class="mb-3">
                <span class="material-symbols-sharp text-primary fs-1">emoji_objects</span>
              </div>
              <h5 class="mb-3">印刷小知識</h5>
              <p class="flex-fill mb-3 text-secondary">印刷的眉眉角角報你知，減少被退件機會。</p>
              <div class="text-end">
                <span class="material-symbols-outlined text-primary fs-3">keyboard_double_arrow_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="mb-5">
          <span class="mb-5 d-inline-block px-4 py-1 text-white bg-primary rounded-pill position-relative dialog">Business</span>
          <h2 class="mb-5 d-flex align-items-end"><img class="me-3" src="@/assets/images/people02.svg" height="72" alt="">專業形象</h2>
        </div>
        <div class="row">
          <div class="col-4">
            <ProdItem prodId="-NCOZyXvGY3qcVjBB7EF" prod="西式信封" desc="婚禮信封、日常小卡裝載，用途多種發揮你的創意吧！" bgImg="https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"></ProdItem>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1561015314-6bd8c1e875ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80');">
                <img src="@/assets/images/card_img.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text fs-7 text-secondary">名片、購物須知小卡、商品掉卡，名片不只是名片，發揮你的創意讓他更多變吧！</p>
                <div class="text-end">
                  <router-link :to="`/product/-NCAti8kHxLQcFx9Otn9`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1644352739408-a191ed85e513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1658&q=80');">
                <img src="@/assets/images/card_img.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">傳單 / DM</h5>
                <p class="card-text fs-7 text-secondary">A5 ( G16K ) 廣告宣傳</p>
                <div class="text-end">
                  <router-link :to="`/product/-NCU9Ky45ulZ5rOzYU-5`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80');">
                <img src="@/assets/images/card_img.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">西式信封</h5>
                <p class="card-text fs-7 text-secondary">婚禮信封、日常小卡裝載，用途多種發揮你的創意吧！</p>
                <div class="text-end">
                  <router-link :to="`/product/-NCOZyXvGY3qcVjBB7EF`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-mode">
      <div class="container">
        <div class="d-flex flex-lg-row flex-column align-items-lg-center px-lg-0 px-3">
          <div class="me-lg-7 mb-lg-0 mb-3">
            <h2 class="mb-3 fw-bolder">特殊尺寸</h2>
            <p>輸入欲印製的尺寸，取得模數後，<br>
              由專人為你報價 <span class="material-symbols-sharp text-primary me-2 align-middle">drafts</span><a href="mailto:yuwen7005@gmail.com" class="text-link">yuwen7005@gmail.com</a>
            </p>
            <p class="small">一模 92mm X 56mm (名片大小)</p>
          </div>
          <div class="mt-3">
            <form>
              <div class="d-flex align-items-end align-items-md-center">
                <div class="d-flex flex-md-row flex-column me-4 me-md-5">
                  <label for="modeWidth" class="me-md-2 pt-1 d-flex flex-md-column flex-row fs-5 justify-content-center align-items-center lh-1 fw-bold">
                    <span class="mb-2 mb-md-0">寬</span>
                    <span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeWidth" v-model="mode.width" @keyup="caluMode()" style="width: 100px;">
                </div>
                <div class="d-flex flex-md-row flex-column me-4 me-md-5">
                  <label for="modeHeight" class="me-md-2 pt-1 d-flex flex-md-column flex-row fs-5 justify-content-center align-items-center lh-1 fw-bold">
                    <span class="mb-2 mb-md-0">高</span>
                    <span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeHeight" v-model="mode.height" @keyup="caluMode()" style="width: 100px;">
                </div>
                <div class="text-primary">
                  <span class="fs-1 fw-bolder me-2">{{ mode.result }}</span><span>模</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="mb-5">
          <span class="mb-5 d-inline-block px-4 py-1 text-white bg-primary rounded-pill position-relative dialog">Life</span>
          <h2 class="mb-5 d-flex align-items-end"><img class="me-3" src="@/assets/images/people03.svg" height="72" alt="">生活印象</h2>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80');">
                <img src="@/assets/images/card_img.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">筆記本</h5>
                <p class="card-text fs-7 text-secondary">校園筆記本、紀念筆記本，贈品實用</p>
                <div class="text-end">
                  <router-link :to="`/product/-NCObnRMG1BlFnGc7TW2`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/groen/1663654149646.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eTKYldy%2BVa%2BAdaO1WrzR6D%2Bw1cPD%2B5iYwrRJqi0ww5DGzdoCUI1f%2BTyX09Yki5stbOUaYP8DYXvbYNpJCnNkCOi1Vp1wolLxM45RYalLsodpGoKkZUcn0KOV3OyBkKmMT9EKz%2Fa%2F5BqK97dNYC05CXMFYFO5CRk0OWnsBFSIqhDAzl36ZzWi5q3dIPrWiHsVptcYgoBtqGgm9EnUv7uNoT4B77zyxpunc%2BU3daHsbezaYvJ8CqeOmKFSSYochblKmSJHO%2Fx9lzNj1%2BIBNwWXgvWMDkfQyNcTjyqO2UALxxm%2FraQ2kpUxaXKBEWyq3RuGOBY36fTtHnGwIWs3A4IDhA%3D%3D');">
                <img src="@/assets/images/card_img.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">卡片</h5>
                <p class="card-text fs-7 text-secondary">傳達你的心意</p>
                <div class="text-end">
                  <router-link :to="`/product/-NCOW_nPIKrtdofEj_Uk`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1617912760717-06f3976cf18c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');">
                <img src="@/assets/images/card_img.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">紙膠帶</h5>
                <p class="card-text fs-7 text-secondary">選用日本和紙紙膠帶，你的手帳也可以很特別！</p>
                <div class="text-end">
                  <router-link :to="`/product/-NCOa4yQDlRblXcRuf1t`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
                </div>
              </div>
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
      mode: {
        width: 92,
        height: 56,
        result: 0
      },
      carts: []
    }
  },
  components: {
    ProdItem, SweetAlert, Swiper, SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination, Autoplay]
    }
  },
  methods: {
    caluMode () {
      if (
        this.mode.width === '' ||
        this.mode.width === 0 ||
        this.mode.height === '' ||
        this.mode.height === 0
      ) {
        this.mode.result = 0
      }
      if (this.mode.width > 0 && this.mode.height > 0) {
        const caluHorizontal =
          Math.ceil(this.mode.width / 92) *
          Math.ceil(this.mode.height / 56)
        const caluVertical =
          Math.ceil(this.mode.width / 56) *
          Math.ceil(this.mode.height / 92)
        this.mode.result =
          caluHorizontal > caluVertical ? caluVertical : caluHorizontal
      }
    }
  },
  mounted () {
    // 更新購物車數量
    emitter.emit('cartCount')
    this.caluMode()
    this.isLoading = false
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
.bg-mode {
  @include media-breakpoint-up(lg) {
    background:
      linear-gradient(100deg, #F0F3FA 55%, rgba(240, 243, 250, 0.1) 90%, rgba(240, 243, 250, 0.3) 100%), url("https://images.unsplash.com/photo-1561015314-6bd8c1e875ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80") right 0% bottom 30%/auto 170% no-repeat, #F0F3FA;
  }
  background: #F0F3FA;
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

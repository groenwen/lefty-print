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
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <section>
      <div class="container">
        <div class="d-flex align-items-end justify-content-center mb-5">
          <img class="me-3" src="@/assets/images/people01.svg" height="80" alt="">
          <div>
            <span class="d-inline-block mb-3 px-3 py-2 text-white lh-1 bg-primary rounded-pill position-relative dialog">Try It !</span>
            <h2 class="mb-0 fw-bolder"><span class="text-primary">名片</span>快速製作</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-xxl-10">
            <div class="rounded-3 overflow-hidden">
              <div class="p-sm-5 p-4 bg-gray-100">
                <div class="mb-4">
                  <a href="#" class="btn btn-sm rounded-pill me-2" :class="[isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = true">正面</a>
                  <a href="#" class="btn btn-sm rounded-pill" :class="[!isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = false">背面</a>
                </div>
                <div class="row align-items-start">
                  <div class="col-xl-8 col-12">
                    <div class="d-flex flex-lg-row flex-column align-items-start">
                      <div class="order-lg-1 order-2 mt-lg-2 me-lg-3 mb-lg-0 mb-3 color-list d-flex flex-lg-column flex-row justify-content-center align-items-center align-self-start">
                        <a v-for="item in colorList" :key="item" href="#" class="color-item m-1 border shadow-sm" :class="{'active':colorItem === item}" :style="{backgroundColor: item}" @click.prevent="colorItem = item"></a>
                      </div>
                      <div class="order-lg-2 order-1 me-4 mb-xl-0 mb-3 ratio ratio-5x3">
                        <!-- <img class="img-fluid" src="@/assets/images/business_card.png" alt=""> -->
                        <div ref="businessCard" class="canvas-wrap">
                          <canvas ref="front" class="cover-fit shadow-sm" width="100%" height="100%" v-show="isFront"></canvas>
                          <canvas ref="back" class="cover-fit shadow-sm" width="100%" height="100%" v-show="!isFront"></canvas>
                        </div>
                      </div>
                      <div class="d-none">
                        <img ref="phone_icon" src="@/assets/images/phone_icon.svg" alt="">
                        <img ref="email_icon" src="@/assets/images/email_icon.svg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-12">
                    <form>
                      <div v-show="isFront">
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="frontCompany" v-model="frontForm.company" placeholder="輸入公司名稱">
                          <label for="frontCompany" class="form-label small text-primary">公司名稱</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="frontName" v-model="frontForm.name" placeholder="輸入名字">
                          <label for="frontName" class="form-label small text-primary">名字</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="frontEName" v-model="frontForm.e_name" placeholder="輸入英文名字">
                          <label for="frontEName" class="form-label small text-primary">英文名字</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="tel" class="form-control" id="frontPhone" v-model="frontForm.phone" placeholder="輸入電話">
                          <label for="frontPhone" class="form-label small text-primary">電話</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="email" class="form-control" id="frontEmail" v-model="frontForm.email" placeholder="輸入 Email">
                          <label for="frontEmail" class="form-label small text-primary">Email</label>
                        </div>
                      </div>
                      <div v-show="!isFront">
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="backCompany" v-model="backForm.company" placeholder="輸入公司名稱">
                          <label for="backCompany" class="form-label small text-primary">公司名稱</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="backName" v-model="backForm.name" placeholder="輸入名字">
                          <label for="backName" class="form-label small text-primary">名字</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="backEName" v-model="backForm.e_name" placeholder="輸入英文名字">
                          <label for="backEName" class="form-label small text-primary">英文名字</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="tel" class="form-control" id="backPhone" v-model="backForm.phone" placeholder="輸入電話">
                          <label for="backPhone" class="form-label small text-primary">Mobile</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="email" class="form-control" id="backEmail" v-model="backForm.email" placeholder="輸入 Email">
                          <label for="backEmail" class="form-label small text-primary">Email</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-md-row flex-column align-items-md-center bg-gray-200 px-sm-5 px-4 py-3">
                <span class="text-dark mb-md-0 mb-3">規格 — 90x54mm ／ 雙面一級卡 ／ 300 張</span>
                <a href="#" class="btn btn-primary ms-auto" @click.prevent="addToCart('-NCAtlm5RkX8T74O5ILR')">加入購物車</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-light py-5">
      <div class="container d-flex flex-md-row flex-column justify-content-center align-items-center">
        <div class="d-flex align-items-center mb-md-0 mb-4">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined fs-2 me-3 p-3 bg-white rounded-circle">backup</span>
            <span>上傳檔案</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-4">
            arrow_right
          </span>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined fs-2 me-3 p-3 bg-white rounded-circle">style</span>
            <span>選擇材質數量</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-4">
            arrow_right
          </span>
        </div>
        <div class="d-flex align-items-center">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined fs-2 me-3 p-3 bg-white rounded-circle">shopping_cart</span>
            <span>加入購物車</span>
          </div>
          <span class="material-symbols-sharp text-secondary mx-2 mx-lg-4">
            arrow_right
          </span>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <span class="material-symbols-outlined fs-2 me-3 p-3 bg-white rounded-circle">local_shipping</span>
            <span>宅配到府</span>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="d-flex align-items-end mb-5">
          <img class="me-3" src="@/assets/images/people02.svg" height="80" alt="">
          <div>
            <span class="d-inline-block mb-2 px-3 py-2 text-white lh-1 bg-primary rounded-pill position-relative">Business</span>
            <h2 class="mb-0 fw-bolder">專業形象</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card bg-gray-100 p-4 shadow-sm">
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
        <div class="d-flex align-items-end mb-5">
          <img class="me-3" src="@/assets/images/people03.svg" height="80" alt="">
          <div>
            <p class="d-inline-block mb-2 px-3 py-2 text-white lh-1 bg-primary rounded-pill position-relative">Life</p>
            <h2 class="mb-0 fw-bolder">生活印象</h2>
          </div>
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
import 'bootstrap/js/dist/carousel.js'
import emitter from '@/js/emitter'
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
      isFront: true,
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
      vueCanvas: null,
      dataURL: {
        front: '',
        back: ''
      },
      colorList: ['#46BAC7', '#F9A44A', '#F37E5F', '#48A5D9', '#AF89DF'],
      colorItem: '#46BAC7',
      frontForm: {
        company: '雲端印刷',
        name: '林小希',
        e_name: 'Sharon',
        phone: '0912345678',
        email: 'abc78463@gmail.com'
      },
      backForm: {
        company: 'Cloud Print',
        name: 'SHIAU-SHI, Lin',
        e_name: 'Sharon',
        phone: '0912345678',
        email: 'abc78463@gmail.com'
      },
      mode: {
        width: 92,
        height: 56,
        result: 0
      },
      carts: []
    }
  },
  watch: {
    colorItem: {
      handler (newVal, oldVal) {
        this.createCanvas('front')
        this.createCanvas('back')
      }
    },
    frontForm: {
      handler (newVal, oldVal) {
        this.createCanvas('front')
      },
      deep: true
    },
    backForm: {
      handler (newVal, oldVal) {
        this.createCanvas('back')
      },
      deep: true
    }

  },
  components: {
    SweetAlert, Swiper, SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination, Autoplay]
    }
  },
  methods: {
    createCanvas (side) {
      const canvas = this.$refs[side]
      // console.log(businessCardW)
      canvas.width = 590
      canvas.height = 360
      const ctx = canvas.getContext('2d')

      // 先設定顏色 再繪製位置及尺寸
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, 590, 360)
      ctx.save()

      ctx.fillStyle = this.colorItem
      ctx.fillRect(0, 315, 590, 45)
      ctx.fillRect(0, 308, 590, 2)
      ctx.save()

      ctx.restore()
      // 公司
      ctx.font = '20px sans-serif'
      ctx.fillStyle = this.colorItem
      ctx.fillText(this[`${side}Form`].company, 40, 50)
      ctx.save()

      if (side === 'front') {
        // 名字
        const nameX = 120
        // let eNameX = 0
        ctx.font = '36px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].name, nameX, 150)
        const nameW = ctx.measureText(this[`${side}Form`].name).width
        ctx.save()
        // 英文名字
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].e_name, nameX + nameW + 20, 150)
        ctx.save()
        // phone icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('phone_iphone', 120, 225)
        // ctx.save()
        // phone
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('手機 |', 120, 223) // 145
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].phone, 175, 223) // 200
        ctx.save()
        // email icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('mail', 120, 256)
        // ctx.save()
        // email
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('信箱 |', 120, 253) // 145
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].email, 175, 253) // 200
        ctx.save()
      } else {
        const nameX = 120
        // 名字
        ctx.font = '28px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].name, nameX, 150)
        const nameW = ctx.measureText(this[`${side}Form`].name).width
        // 英文名字
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].e_name, nameX + nameW + 20, 150)
        ctx.save()
        // phone icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('phone_iphone', 120, 225)
        // ctx.save()
        // phone
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('Mobile |', 120, 223) // 145
        ctx.save()
        ctx.font = '14px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].phone, 193, 223) // 218
        ctx.save()
        // email icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('mail', 120, 256)
        // ctx.save()
        // email
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('Email   |', 120, 253) // 147
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].email, 191, 253) // 218
        ctx.save()
      }

      ctx.restore()

      this.dataURL[side] = canvas.toDataURL('image/jpeg', 0.5)
      // const blob = this.dataURItoBlob(dataURL)
      // this.dataURL[side] = window.URL.createObjectURL(blob)
      this.vueCanvas = ctx
    },
    dataURItoBlob (dataURI) {
      // 來源：https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
      // convert base64/URLEncoded data component to raw binary data held in a string
      let byteString
      if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1])
      } else {
        byteString = unescape(dataURI.split(',')[1])
      }
      // separate out the mime component
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

      // write the bytes of the string to a typed array
      const ia = new Uint8Array(byteString.length)
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }

      return new Blob([ia], { type: mimeString })
    },
    addToCart (id) {
      this.isLoading = true
      let url = `${this.VUE_APP}/cart`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts

          let http = 'post'
          // 撈出 carts 裡是否有同 ID 的資料
          let cartItem = this.carts.find(item => item.product_id === id)
          if (cartItem === undefined) {
            cartItem = { product_id: id, qty: 1, files: [this.dataURL] }
          } else {
            // 抓出將 file 再 push 進去
            url = `${url}/${cartItem.id}`
            http = 'put'
            cartItem.files.push(this.dataURL)
            cartItem = {
              product_id: cartItem.product_id,
              qty: 1,
              files: cartItem.files
            }
          }
          // 加入購物車
          this.$http[http](url, { data: cartItem })
            .then((res) => {
              this.isLoading = false
              // 更新購物車數量
              emitter.emit('cartCount')
              emitter.emit('sweetalert', `${res.data.message}, success`)
            })
            .catch((err) => {
              emitter.emit('sweetalert', `${err.response.data.message}, error`)
            })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
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
    this.createCanvas('front')
    this.createCanvas('back')
    setTimeout(() => {
      this.createCanvas('front')
      this.createCanvas('back')
    }, 2000)
  }
}
</script>
<style lang="scss">
.cover-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.color-list {
  width: 32px;
  @include media-breakpoint-down(lg){
    width: 100%;
    height: 38px;
  }
}
.color-item {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: width .25s, height .25s;
  &:hover {
    opacity: .8;
  }
  &.active {
    width: 30px;
    height: 30px;
    border-color: #E5EBFD !important;
  }
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

<template>
  <div>
    <v-loading :active="isLoading"></v-loading>
    <SweetAlert></SweetAlert>
    <div class="container mt-5 mb-8">
      <div class="row justify-content-center">
        <div class="col-6">
          <h4 class="mb-3 text-center">
            <span class="material-symbols-sharp text-primary fs-2 align-text-bottom">check_circle</span>
            訂單已成立
          </h4>
          <div class="mb-3">
            <div class="px-3 py-1 bg-gray100">
              <span class="text-secondary small">訂購項目</span>
            </div>
            <div>
              <div v-for="item in order.products" :key="item.id" class="mb-3 py-3 pe-3 d-flex justify-content-between align-items-center border-bottom">
                <div class="px-3 d-flex align-items-center">
                  <span class="me-4 fs-7 fw-bold">{{ item.product.title }}</span>
                  <div class="me-4 fs-7 text-secondary">
                    <span>{{ item.product.width }} x {{item.product.height }} mm</span><br>
                    <span>{{ item.product.side }}</span>
                  </div>
                  <div class="fs-7 text-secondary">
                    <span>{{ item.product.material }}</span><br>
                    <span>{{ item.product.p_qty }} {{ item.product.unit }}</span>
                  </div>
                </div>
                <div class="text-end">
                  <div class="text-nowrap fw-bolder">$ {{ item.product.price }}</div>
                </div>
              </div>
              <div class="px-3">
                <div class="mb-1 d-flex">
                  <span class="me-auto text-secondary small">小計</span>
                  <span class="fw-bold">$ {{ order.total }}</span>
                </div>
                <div class="mb-1 d-flex">
                  <span class="me-auto text-secondary small">運費</span>
                  <span>免運費</span>
                </div>
              </div>
              <div class="px-3 d-flex">
                <span class="me-auto text-secondary small">總計</span>
                <span class="fw-bold text-accent">$ <span class="fs-5">{{ Math.round(order.total) }}</span></span>
              </div>
            </div>
          </div>
          <div class="">
            <div class="mb-3 px-3 py-1 bg-gray100">
              <span class="text-secondary small">收件人</span>
            </div>
            <div class="px-3">
              <div class="d-flex">
                <span class="me-3 text-secondary small">收件人</span>
                <span class="fw-bold">{{ user.name }}</span>
              </div>
              <div class="d-flex">
                <span class="me-3 text-secondary small">email</span>
                <span class="fw-bold">{{ user.email }}</span>
              </div>
              <div class="d-flex">
                <span class="me-3 text-secondary small">電話</span>
                <span class="fw-bold">{{ user.tel }}</span>
              </div>
              <div class="d-flex">
                <span class="me-3 text-secondary small">地址</span>
                <span class="fw-bold">{{ user.address }}</span>
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
import SweetAlert from '@/components/SweetAlert.vue'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      order: {},
      user: {}
    }
  },
  components: {
    SweetAlert
  },
  watch: {
    orderId () {
      this.getOrder()
    }
  },
  computed: {
    orderId () {
      return this.$route.params.orderId
    }
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${this.VUE_APP}/order/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.order = res.data.order
          this.user = res.data.order.user
          // 更新購物車數量
          emitter.emit('cartCount')
        })
        .catch((err) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

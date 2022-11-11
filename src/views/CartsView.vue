<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <div class="container mt-5 mb-8">
    <div class="mb-3 d-flex align-items-end">
      <img class="me-3 headtitle-img" src="@/assets/images/people01.svg" alt="">
      <div>
        <span class="d-inline-block mb-3 px-4 py-2 text-white lh-1 bg-primary rounded-pill position-relative dialog">Cart</span>
        <h2 class="mb-0 fw-bolder">購物車</h2>
      </div>
    </div>
    <div class="row g-4">
      <div class="col-lg-8 col-12">
        <div class="mb-3">
          <div class="px-3 py-2 bg-gray100 fw-bold d-flex justify-content-between">
            <span>項目</span>
            <button class="btn btn-sm btn-outline-secondary" @click="clearCarts()" :disabled="carts.length <= 0">清除購物車</button>
          </div>
          <div>
            <p class="p-4 text-secondary" v-if="carts.length <= 0">購物車尚無內容</p>
            <div v-else>
              <div v-for="item in carts" :key="item.id" class="py-4 pe-3 d-flex justify-content-between align-items-center border-bottom">
                <div class="row g-5">
                  <div class="col-6">
                    <div v-if="item.files === undefined">
                      &nbsp;
                    </div>
                    <div v-else class="d-flex">
                      <img :src="item.files[0].front" class="d-inline-block border img-fluid me-1" style="width: 50%" alt="">
                      <img :src="item.files[0].back" class="d-inline-block border img-fluid" style="width: 50%" alt="">
                    </div>
                  </div>
                  <div class="col-auto d-flex align-items-center">
                    <div class="me-5">
                      <span class="fw-bold mb-2">{{ item.product.title }}</span><br>
                      <span class="text-secondary fs-7">{{ item.product.width }} mm X {{item.product.height }} mm <br>
                      {{ item.product.side }}
                      </span>
                    </div>
                    <div class="text-secondary fs-7">
                      <span><span class="me-3 small">材質</span>{{ item.product.material }}</span><br>
                      <span><span class="me-3 small">數量</span>{{ item.product.p_qty }} {{ item.product.unit }}</span>
                    </div>
                  </div>
                </div>
                <div class="text-end align-self-end">
                  <div class="text-nowrap mb-3 fw-bolder">$ {{ item.product.price }}</div>
                  <a href="#" class="btn-link" @click.prevent="delCart(item, item.files[0].id)">
                    <span class="material-symbols-outlined fs-5">delete</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg col-12">
        <div class="p-4 bg-light sticky-top">
          <div class="mb-4 fs-5 text-primary">
            訂單摘要
          </div>
          <div class="mb-3 border-bottom border-white">
            <div class="mb-3 d-flex">
              <span class="me-auto text-secondary">小計</span>
              <span class="fw-bolder">$ {{ total }}</span>
            </div>
            <div class="mb-3 d-flex">
              <span class="me-auto text-secondary">運費</span>
              <span>免運費</span>
            </div>
          </div>
          <div class="mb-3 d-flex">
            <span class="me-auto text-secondary">總計</span>
            <span class="fw-bolder text-accent">$ <span class="fs-5">{{ Math.round(final_total) }}</span></span>
          </div>
          <div class="text-end">
            <router-link to="/carts2" class="btn btn-accent" :class="{'disabled': carts.length <= 0}">下一步</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'
// todo: 地址導入縣市 select
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      total: 0,
      final_total: 0,
      carts: [],
      order: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    SweetAlert
  },
  methods: {
    getCarts () {
      this.isLoading = true
      const url = `${this.VUE_APP}/cart`
      this.$http.get(url)
        .then((res) => {
          console.log(res.data.data)
          this.isLoading = false
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
          const carts = res.data.data.carts
          const fileCarts = []
          // 整理 carts 陣列，將 files > 1 的資料拆出 (以檔案為單一 cartItem)
          carts.forEach(item => {
            // 如果沒有 files 值 或 files <= 1 直接存入 item
            if (item.files === undefined || item.files.length <= 1) {
              fileCarts.push(item)
            } else {
              // 依 files 的數量 拆分成對應的 cartItem 數，並存回 fileCarts
              const count = item.files.length
              for (let i = 0; i < count; i++) {
                const cartItem = { ...item }
                cartItem.files = [item.files[i]]
                cartItem.files[0].id = i + 1
                fileCarts.push(cartItem)
              }
            }
          })
          this.carts = fileCarts
          // 更新 nav cart
          emitter.emit('cartCount')
        })
        .catch((err) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    },
    clearCarts () {
      this.isLoading = true
      const url = `${this.VUE_APP}/carts`
      this.$http.delete(url)
        .then((res) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${res.data.message}, success`)
          this.getCarts()
        })
        .catch((err) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    },
    delCart (item, fileId) {
      this.isLoading = true
      const url = `${this.VUE_APP}/cart`
      this.$http.get(url)
        .then((res) => {
          const carts = res.data.data.carts
          const cartItem = carts.find(el => el.product_id === item.product_id)
          // 如果只有一個檔案 直接刪除該購物車項目
          if (cartItem.files === undefined || cartItem.files.length <= 1) {
            const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/cart/${item.id}`
            this.$http.delete(url)
              .then((res) => {
                this.isLoading = false
                emitter.emit('sweetalert', `${res.data.message}, success`)
                this.getCarts()
              })
              .catch((err) => {
                this.isLoading = false
                emitter.emit('sweetalert', `${err.response.data.message}, error`)
              })
          } else {
            // 一個檔案以上，以更新購物車方式
            cartItem.files.splice(fileId - 1, 1)
            const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/cart/${item.id}`
            this.$http.put(url, { data: { product_id: cartItem.id, qty: 1, files: cartItem.files } })
              .then((res) => {
                this.isLoading = false
                emitter.emit('sweetalert', `${res.data.message}, success`)
                this.getCarts()
              })
              .catch((err) => {
                this.isLoading = false
                emitter.emit('sweetalert', `${err.response.data.message}, error`)
              })
          }
        })
        .catch((err) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    },
    onSubmit () {
      this.isLoading = true
      const url = `${this.VUE_APP}/order`
      this.$http.post(url, { data: { ...this.order } })
        .then((res) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${res.data.message}, success`)
          // 送出後 1.更新購物車 2.重置表單
          this.getCarts()
          this.$refs.form.resetForm()
        })
        .catch((err) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
<style lang="scss">
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
.headtitle-img {
  height: 5rem;
}
</style>

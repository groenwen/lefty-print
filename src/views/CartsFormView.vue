<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <div class="container mt-5 pb-8">
    <div class="row mb-3">
      <div class="col-md-8 d-flex justify-content-between align-items-end">
        <div class="d-flex align-items-end">
          <img class="me-3 headtitle-img" src="@/assets/images/people01.svg" alt="">
          <div>
            <span class="d-inline-block mb-3 px-4 py-2 text-white lh-1 bg-primary rounded-pill position-relative dialog">Cart</span>
            <h2 class="mb-0 fw-bolder">購物車</h2>
          </div>
        </div>
        <router-link to="/carts" class="btn-link">
          <span class="material-symbols-outlined align-text-bottom">arrow_back</span>上一步
        </router-link>
      </div>
    </div>
    <div class="row g-lg-5">
      <div class="order-2 order-md-1 col-md-8">
        <div class="bg-gray100 pt-6 pb-5">
          <div class="row justify-content-center">
            <div class="col-xl-9 col-lg-8 col-10">
              <h4 class="fw-bolder text-primary">
                收件人
              </h4>
              <v-form class="py-5" ref="form" v-slot="{ errors }" @submit="onSubmit">
                <div class="mb-4">
                  <label for="name" class="form-label fs-7">姓名</label>
                  <v-field name="姓名" id="name" type="text" rules="required" class="form-control" :class="{ 'is-invalid':errors['姓名'] }" v-model="order.user.name" placeholder="輸入收件人姓名" />
                  <error-message name="姓名" class="invalid-feedback" />
                </div>
                <div class="mb-4">
                  <label for="email" class="form-label fs-7">Email</label>
                  <v-field name="email" id="email" type="email" rules="required|email" class="form-control" :class="{ 'is-invalid':errors['email'] }" v-model="order.user.email" placeholder="輸入Email" />
                  <error-message name="email" class="invalid-feedback" />
                </div>
                <div class="mb-4">
                  <label for="tel" class="form-label fs-7">電話</label>
                  <v-field name="電話" id="tel" type="tel" rules="required|numeric|min:7|max:10" class="form-control" :class="{ 'is-invalid':errors['電話'] }" v-model="order.user.tel" placeholder="輸入收件人電話" />
                  <error-message name="電話" class="invalid-feedback" />
                </div>
                <div class="mb-4">
                  <label for="address" class="form-label fs-7">地址</label>
                  <v-field name="地址" id="address" type="text" rules="required" class="form-control" :class="{ 'is-invalid':errors['地址'] }" v-model="order.user.address" placeholder="輸入收件地址" />
                  <error-message name="地址" class="invalid-feedback" />
                </div>
                <div class="mb-5">
                  <label for="message" class="form-label fs-7">訂單備註</label>
                  <v-field as="textarea" name="message" id="message" class="form-control" rows="3" v-model="order.message" placeholder="可備註收貨時間"/>
                </div>
                <div class="d-grid col-md-7 mx-auto mb-5">
                  <button type="submit" class="btn btn-accent">結帳</button>
                </div>
                <!-- <div class="d-grid col-md-3 mx-auto">
                  <router-link to="/carts" class="btn btn-outline-secondary">
                    上一步
                  </router-link>
                </div> -->
              </v-form>
            </div>
          </div>
        </div>
      </div>
      <div class="order-1 order-md-2 col-md-4">
        <div class="mb-5 bg-gray-100">
          <div class="px-3 py-2 bg-gray100">
            <span class="text-secondary small">項目</span>
          </div>
          <div>
            <div v-for="item in carts" :key="item.id" class="py-3 border-bottom">
              <div class="mb-3">
                <div v-if="item.files[0].back === undefined">
                    <img :src="item.files[0].front" class="border img-fluid" style="width: 400px;" alt="">
                  </div>
                  <div v-else class="d-flex">
                    <img :src="item.files[0].front" class="border img-fluid me-1" style="width: 48.5%; max-width: 200px;" alt="">
                    <img :src="item.files[0].back" class="border img-fluid" style="width: 48.5%; max-width: 200px;" alt="">
                  </div>
              </div>
              <div class="px-2 d-flex justify-content-between align-items-center">
                <div class="">
                  <span class="fw-bold mb-2">{{ item.product.title }}</span><br>
                  <span class="text-secondary fs-7">{{ item.product.width }} x {{item.product.height }}mm <br>
                  {{ item.product.side }}
                  </span>
                </div>
                <div class="text-secondary fs-7">
                  <span>{{ item.product.material }}</span><br>
                  <span>{{ item.product.p_qty }} {{ item.product.unit }}</span>
                </div>
                <div class="text-nowrap fw-bold">$ {{ item.product.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="mb-3 px-3 py-2 bg-gray100">
            <span class="text-secondary small">訂單摘要</span>
          </div>
          <div class="px-3">
            <div class="mb-2 d-flex">
              <span class="me-auto text-secondary small">小計</span>
              <span class="fw-bold">$ {{ total }}</span>
            </div>
            <div class="mb-2 d-flex">
              <span class="me-auto text-secondary small">運費</span>
              <span>免運費</span>
            </div>
          </div>
          <div class="px-3 d-flex">
            <span class="me-auto text-secondary small">總計</span>
            <span class="fw-bolder text-accent">$ <span class="fs-5">{{ Math.round(final_total) }}</span></span>
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
          // 送出後 1.更新購物車 2.重置表單 3.退回購物車
          // this.getCarts()
          // this.$refs.form.resetForm()
          this.$router.push(`/OrderCheckout/${res.data.orderId}`)
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

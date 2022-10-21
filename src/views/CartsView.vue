<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <div class="container mt-5">
    <h1 class="fs-4 text-dark mb-3">
      <span class="material-symbols-sharp me-2 align-middle">shopping_cart</span>購物車
    </h1>
      <div class="row g-4">
        <div class="col-lg-8 col-12">
          <div class="mb-3 border">
            <div class="px-4 py-2 bg-gray-100 fw-bold d-flex justify-content-between border-bottom">
              <span>項目</span>
              <button class="btn btn-sm btn-outline-secondary" @click="clearCarts()" :disabled="carts.length <= 0">清除購物車</button>
            </div>
            <div>
              <p class="p-4 text-secondary" v-if="carts.length <= 0">購物車尚無內容</p>
              <div v-else>
                <div v-for="item in carts" :key="item.id" class="p-4 d-flex justify-content-between align-items-center">
                  <div class="d-xl-flex">
                    <div class="mb-xl-0 mb-4 me-3">
                      <div v-if="item.files === undefined" style="height: 100px;">
                        &nbsp;
                      </div>
                      <div v-else>
                        <img :src="item.files[0].front" class="border" height="100" alt="">&nbsp;
                        <img :src="item.files[0].back" class="border" height="100" alt="">
                      </div>
                    </div>
                    <div>
                      <span class="fw-bold mb-2">{{ item.product.title }}</span><br>
                      <span class="text-secondary fs-7">{{ item.product.width }} mm X {{item.product.height }} mm <br>
                      {{ item.product.side }} ／ {{ item.product.material }} ／ {{ item.product.p_qty }} {{ item.product.unit }}
                      </span>
                    </div>
                  </div>
                  <div class="text-nowrap">$ {{ item.product.price }}</div>
                  <div>
                    <a href="#" class="btn btn-sm btn-link" @click.prevent="delCart(item, item.files[0].id)">
                      <span class="material-symbols-outlined align-middle">delete</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border">
            <div class="px-4 py-2 fw-bold bg-gray-100">
              收件人
            </div>
            <div class="py-4 row justify-content-center">
              <div class="col-xl-6 col-sm-8 col-10">
                <v-form class="py-4" ref="form" v-slot="{ errors }" @submit="onSubmit">
                  <div class="mb-2">
                    <label for="name" class="form-label fs-7">姓名</label>
                    <v-field name="姓名" id="name" type="text" rules="required" class="form-control" :class="{ 'is-invalid':errors['姓名'] }" v-model="order.user.name" placeholder="填入姓名" />
                    <error-message name="姓名" class="invalid-feedback" />
                  </div>
                  <div class="mb-2">
                    <label for="email" class="form-label fs-7">Email</label>
                    <v-field name="email" id="email" type="email" rules="required|email" class="form-control" :class="{ 'is-invalid':errors['email'] }" v-model="order.user.email" placeholder="填入 Email" />
                    <error-message name="email" class="invalid-feedback" />
                  </div>
                  <div class="mb-2">
                    <label for="tel" class="form-label fs-7">電話</label>
                    <v-field name="電話" id="tel" type="tel" rules="required|numeric|min:7|max:10" class="form-control" :class="{ 'is-invalid':errors['電話'] }" v-model="order.user.tel" />
                    <error-message name="電話" class="invalid-feedback" />
                  </div>
                  <div class="mb-2">
                    <label for="address" class="form-label fs-7">地址</label>
                    <v-field name="地址" id="address" type="text" rules="required" class="form-control" :class="{ 'is-invalid':errors['地址'] }" v-model="order.user.address" />
                    <error-message name="地址" class="invalid-feedback" />
                  </div>
                  <div class="mb-4">
                    <label for="message" class="form-label fs-7">訂單備註</label>
                    <v-field as="textarea" name="message" id="message" class="form-control" rows="3" v-model="order.message" />
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">結帳</button>
                  </div>
                </v-form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg col-12">
          <div class="border bg-gray-100 sticky-top">
            <div class="p-2 text-center bg-gray-200">
              訂單摘要
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-between">
                <div>商品總計</div>
                <div>$ {{ total }}</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>運費總計</div>
                <div>免運費</div>
              </div>
            </div>
            <div class="p-3 d-flex justify-content-between">
              <div>結帳總金額</div>
              <div class="fw-bolder text-danger">$ <span class="fs-5">{{ Math.round(final_total) }}</span></div>
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

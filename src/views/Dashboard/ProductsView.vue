<template>
  <v-loading :active="isLoading" v-if="isLoading"></v-loading>
  <div class="container" v-else>
    <div class="text-end">
      <button type="button" class="btn btn-dark" @click="openModal('new')">
        新增
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td>No</td>
          <td>類別</td>
          <!-- <td></td> -->
          <td>產品名稱</td>
          <td>單/雙面</td>
          <td>尺寸</td>
          <td>材質</td>
          <td>數量</td>
          <td>售價</td>
          <td>顯示</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allProducts" :key="item.id">
          <td>{{ item.num }}</td>
          <td>
            <img :src="item.imageUrl" height="100" alt="">
          </td>
          <!-- <td><img :src="item.imageUrl" width="100" /></td> -->
          <td>
            <span class="badge text-bg-secondary">{{ item.category }}</span><br />
            {{ item.title }}
          </td>
          <td>{{ item.side }}</td>
          <td>{{ item.width }} mm X {{ item.height }} mm</td>
          <td>{{ item.material }}</td>
          <td>{{ item.p_qty }} {{ item.unit }}</td>
          <td>$ {{ item.price }}</td>
          <td>
            <div class="form-check form-switch" @click="item.is_enabled ? item.is_enabled = 0 : item.is_enabled = 1; updateProduct(item)">
              <input class="form-check-input" type="checkbox" role="switch" id="is_enabled" :checked="item.is_enabled === 1">
              <label class="form-check-label" for="is_enabled" v-if="item.is_enabled === 1">顯示</label>
              <label class="form-check-label" for="is_enabled" v-else>隱藏</label>
            </div>
          </td>
          <td class="text-end">
            <button
              type="button"
              class="btn btn-sm btn-outline-dark"
              @click="openModal('edit', item)">
              編輯</button>&nbsp;
            <button
              type="button"
              class="btn btn-sm btn-outline-dark"
              @click="copyProduct(item)">
              複製</button>&nbsp;
            <button type="button" class="btn btn-sm btn-outline-danger" @click="openModal('delete', item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <pagination :pages="pagination" @emit-pages="getProducts"></pagination>
  <!-- :isNew、:productData 傳資料進入元件 ； ref 傳方法進入元件(開啟 modal) ； @emit-product 元件傳方法出來並帶更新後的值 (更新 product) -->
  <productModal :is-new="isNew" :product-item="product" ref="callModal" @update-product="updateProduct"></productModal>
  <delProductModal  :product-item="product" ref="callDelModal" @del-product="delProduct"></delProductModal>
</template>
<script type="module">
// 切換頁數
// 打開 modal
// 新增 編輯 刪除 產品
import pagination from '../../components/PaginationTemp.vue'
import productModal from '../../components/ProductModal.vue'
import delProductModal from '../../components/DelProductModal.vue'

export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: true,
      isNew: false,
      allProducts: [],
      product: {
        width: 90,
        height: 54,
        side: 'single',
        material: '一級卡',
        p_qty: 300,
        imagesUrl: []
      },
      pagination: {}
    }
  },
  components: {
    pagination, productModal, delProductModal
  },
  methods: {
    // 取得所有產品
    getProducts (page = 1) {
      const url = `${this.VUE_APP}/admin/products?page=${page}`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          // API 資料存入 allProducts
          this.allProducts = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          this.isLoading = false
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    updateProduct (item) {
      const data = { ...item }
      let url = `${this.VUE_APP}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        http = 'put'
        url = `${url}/${item.id}`
      }
      this.$http[http](url, { data })
        .then((res) => {
          this.hideModal()
          alert(res.data.message)
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    copyProduct (item) {
      const data = { ...item }
      const url = `${this.VUE_APP}/admin/product`
      this.$http.post(url, { data })
        .then((res) => {
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    delProduct (id) {
      const url = `${this.VUE_APP}/admin/product/${id}`
      this.$http.delete(url)
        .then((res) => {
          this.hideModal()
          // alert(res.data.message)
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // 開啟 modal
    openModal (active, item) {
      if (active === 'new') {
        this.product = {
          imagesUrl: [],
          side: '單面',
          is_enabled: 1
        }
        this.$refs.callModal.showModal()
        this.isNew = true
      } else if (active === 'edit') {
        this.product = { ...item }

        // 避免資料互相汙染需用解構賦值
        this.$refs.callModal.showModal()
        this.isNew = false
      } else if (active === 'delete') {
        this.product = { ...item }
        this.$refs.callDelModal.showModal()
      }
    },
    hideModal () {
      this.$refs.callModal.hideModal()
      this.$refs.callDelModal.hideModal()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

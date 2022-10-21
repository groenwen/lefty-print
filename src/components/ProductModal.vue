<template>
  <div class="modal fade" ref="productModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="innIsNew">新增產品</h5>
          <h5 class="modal-title" v-else>{{ innProduct.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-3">
              <div class="mb-4">
                <p>主圖</p>
                <img class="img-fluid" :src="innProduct.imageUrl" alt="">
                <input type="text" class="form-control" placeholder="圖片網址" v-model="innProduct.imageUrl">
              </div>
              <div>
                <p>詳細圖片</p>
                <img class="img-fluid" v-for="(item, index) in innProduct.imagesUrl" :src="item" :key="index" alt="">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="圖片網址" v-model="addImage">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="innProduct.imagesUrl.push(addImage)">新增圖片</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                {{ innProduct.num }}
              </div>
              <div class="row mb-3">
                <div class="col-3">
                  <label for="category" class="form-label">類別</label>
                  <input type="text" class="form-control" id="category" v-model="innProduct.category" placeholder="輸入類別">
                </div>
                <div class="col-2 align-self-end">
                  <div class="form-check form-switch" @click="innProduct.is_enabled ? innProduct.is_enabled = 0 : innProduct.is_enabled = 1">
                    <input class="form-check-input" type="checkbox" role="switch" id="is_enabled" :checked="innProduct.is_enabled === 1">
                    <label class="form-check-label" for="is_enabled" v-if="innProduct.is_enabled === 1">顯示</label>
                    <label class="form-check-label" for="is_enabled" v-else>隱藏</label>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <label for="title" class="form-label">產品名稱</label>
                  <input type="text" class="form-control" id="title" v-model="innProduct.title" placeholder="輸入標題">
                </div>
                <div class="col-6 align-self-end">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="innProduct.side" id="single" value="單面">
                    <label class="form-check-label" for="single">單面</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="innProduct.side" id="double" value="雙面">
                    <label class="form-check-label" for="double">雙面</label>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">產品簡述</label>
                <input type="text" class="form-control" id="content" v-model="innProduct.content" placeholder="輸入產品簡述">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">產品介紹</label>
                <input type="text" class="form-control" id="description" v-model="innProduct.description" placeholder="輸入產飲介紹">
              </div>
              <div class="my-4 border-top"></div>
              <div class="row g-2 mb-3">
                <div class="col-3">
                  <label for="width" class="form-label">寬(mm)</label>
                  <input type="number" class="form-control" id="width" v-model.number="innProduct.width" placeholder="輸入寬">
                </div>
                <div class="col-3">
                  <label for="height" class="form-label">高(mm)</label>
                  <input type="number" class="form-control" id="height" v-model.number="innProduct.height" placeholder="輸入高">
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col">
                  <label for="material" class="form-label">材質</label>
                  <input type="text" class="form-control" id="material" v-model="innProduct.material" placeholder="輸入材質">
                </div>
                <div class="col-4">
                  <label for="qty" class="form-label">數量</label>
                  <input type="number" class="form-control" id="qty" v-model.number="innProduct.p_qty" placeholder="輸入數量">
                </div>
                <div class="col-2">
                  <label for="unit" class="form-label">單位</label>
                  <input type="text" class="form-control" id="unit" v-model="innProduct.unit" placeholder="輸入單位">
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-3">
                  <label for="origin_price" class="form-label">原價</label>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="number" class="form-control" id="origin_price" v-model.number="innProduct.origin_price" placeholder="輸入原價">
                  </div>
                </div>
                <div class="col-3">
                  <label for="price" class="form-label">售價</label>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" id="price" v-model.number="innProduct.price" placeholder="輸入售價">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateProduct(innProduct)">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal.js'

export default {
  data () {
    return {
      myModal: '',
      innIsNew: '',
      innProduct: {
        width: 90,
        height: 54,
        side: 'single',
        material: '一級卡',
        p_qty: 300,
        imagesUrl: []
      },
      addImage: ''
    }
  },
  props: {
    isNew: {
      type: Boolean
    },
    productItem: {
      type: Object
    }
  },
  watch: {
    isNew () {
      this.innIsNew = this.isNew
    },
    productItem () {
      this.innProduct = JSON.parse(JSON.stringify(this.productItem))
    }
  },
  methods: {
    showModal () {
      this.myModal.show()
    },
    hideModal () {
      this.myModal.hide()
    },
    updateProduct (item) {
      this.$emit('updateProduct', item)
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.productModal)
    this.innIsNew = this.isNew
    this.innProduct = JSON.parse(JSON.stringify(this.productItem))
  }
}
</script>

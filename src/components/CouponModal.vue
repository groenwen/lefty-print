<template>
  <div class="modal fade" ref="couponModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="innIsNew">新增折扣碼</h5>
          <h5 class="modal-title" v-else>{{ innCoupon.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">活動名稱</label>
            <input type="text" class="form-control" id="title" v-model="innCoupon.title" placeholder="輸入活動">
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">折扣</label>
            <input type="number" class="form-control" id="percent" v-model="innCoupon.percent" placeholder="輸入折扣">
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">有效期限</label>
            <input type="date" class="form-control" id="due_date" v-model="innCoupon.due_date" placeholder="輸入有效期限">
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">折扣碼</label>
            <input type="text" class="form-control" id="code" v-model="innCoupon.code" placeholder="輸入折扣碼">
          </div>
          <div>
            <div class="form-check form-switch" @click="innCoupon.is_enabled ? innCoupon.is_enabled = 0 : innCoupon.is_enabled = 1">
              <input class="form-check-input" type="checkbox" role="switch" id="is_enabled" :checked="innCoupon.is_enabled === 1">
              <label class="form-check-label" for="is_enabled" v-if="innCoupon.is_enabled === 1">顯示</label>
              <label class="form-check-label" for="is_enabled" v-else>隱藏</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateCoupon(innCoupon)">儲存</button>
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
      innIsNew: false,
      innCoupon: {
        is_enabled: 1
      }
    }
  },
  props: {
    isNew: {
      type: Boolean
    },
    couponItem: {
      type: Object
    }
  },
  watch: {
    isNew () {
      this.innIsNew = this.isNew
    },
    couponItem () {
      this.innCoupon = JSON.parse(JSON.stringify(this.couponItem))
    }
  },
  methods: {
    showModal () {
      this.myModal.show()
      console.log(this.innCoupon)
    },
    hideModal () {
      this.myModal.hide()
    },
    updateCoupon (item) {
      this.$emit('updateCoupon', item)
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.couponModal)
    this.innIsNew = this.isNew
    this.innCoupon = JSON.parse(JSON.stringify(this.couponItem))
  }
}
</script>

<template>
  <div class="modal fade" ref="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">刪除</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        確定要刪除 {{ innProduct.title }} ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="delProduct(innProduct.id)">刪除</button>
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
      innProduct: {}
    }
  },
  props: ['productItem'],
  watch: {
    productItem () {
      this.innProduct = this.productItem
    }
  },
  methods: {
    showModal () {
      this.myModal.show()
    },
    hideModal () {
      this.myModal.hide()
    },
    delProduct (id) {
      this.$emit('delProduct', id)
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.delModal)
    this.innProduct = this.productItem
  }
}
</script>

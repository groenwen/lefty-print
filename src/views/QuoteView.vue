<template>
  <div>
    <HeadTitle class="mb-7" dialog="報價" primary-text="特殊尺寸" dark-text="報價"></HeadTitle>
    <div class="container">
      <div class="mb-5 d-flex align-items-end">
        <h4 class="mb-0 me-4"><span class="material-symbols-outlined me-2 text-primary fs-1 align-bottom">request_quote</span>報價流程</h4>
        <span class="text-secondary">可先使用下方模數試算小工具試算</span>
      </div>
      <div class="mb-7 p-6 border border-light rounded-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-4 text-center">
            <div class="d-flex flex-column align-items-center">
              <h5 class="mb-5"><span class="me-3 px-2 py-1 lh-1 bg-accent text-white rounded-circle">1</span>提供所需印製規格</h5>
              <span class="mb-3 quote-item-icon material-symbols-outlined text-primary">style</span>
              <p class="text-primary">尺寸／材質／單雙面／數量</p>
            </div>
          </div>
          <div class="col-2 text-center">
            <span class="material-symbols-sharp text-light fs-1">arrow_circle_right</span>
          </div>
          <div class="col-4">
            <div class="d-flex flex-column align-items-center">
              <h5 class="mb-5"><span class="me-3 px-2 py-1 lh-1 bg-accent text-white rounded-circle">2</span>寄 Email 由專人為您報價</h5>
              <span class="mb-3 quote-item-icon material-symbols-outlined text-primary">mail</span>
              <a class="text-primary">abcdef@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 p-7 bg-gray100">
        <div class="row justify-content-between align-items-center">
          <div class="col-5">
            <h5 class="mb-4">模數試算</h5>
            <p>尺寸若小於一模，也將以一模計價。<br>報價公式：選擇名片材質數量的價格 X 模數 ＝ 價格</p>
          </div>
          <div class="col-auto">
            <form>
              <div class="d-flex align-items-end align-items-md-center">
                <div class="d-flex flex-md-row flex-column me-4 me-md-5">
                  <label for="modeWidth" class="me-md-2 pt-1 d-flex fs-5 justify-content-center align-items-center lh-1 fw-bold">
                    <span class="mb-2 mb-md-0">寬</span>
                    <span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeWidth" v-model="mode.width" @keyup="caluMode()" style="width: 100px;">
                </div>
                <div class="me-5">
                  <span class="material-symbols-outlined fs-1">close</span>
                </div>
                <div class="d-flex flex-md-row flex-column me-4 me-md-5">
                  <label for="modeHeight" class="me-md-2 pt-1 d-flex fs-5 justify-content-center align-items-center lh-1 fw-bold">
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
      <p class="text-end text-secondary fs-7">一模 92mm X 56mm (名片出血尺寸)</p>
    </div>
  </div>
  <div class="mt-8 py-7 bg-gray200">
    <ServiceTemp></ServiceTemp>
  </div>
</template>
<script>
import HeadTitle from '@/components/HeadTitle.vue'
import ServiceTemp from '@/components/ServiceTemp.vue'
export default {
  data () {
    return {
      mode: {
        width: 92,
        height: 56,
        result: 0
      }
    }
  },
  components: { HeadTitle, ServiceTemp },
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
    this.caluMode()
  }
}
</script>
<style lang="scss">
.quote-item-icon {
  font-size: 4.5rem;
}
</style>

<template>
  <div>
    <HeadTitle class="mb-7" dialog="報價" primary-text="特殊尺寸" dark-text="報價"></HeadTitle>
    <div class="container">
      <div class="mb-5 d-flex flex-sm-row flex-column align-items-sm-end">
        <h4 class="mb-3 mb-sm-0 me-4"><span class="material-symbols-outlined me-2 text-primary fs-1 align-bottom">request_quote</span>報價流程</h4>
        <span class="text-secondary">可先使用下方模數試算小工具試算</span>
      </div>
      <div class="mb-7 px-4 py-6 p-xl-6 border border-light rounded-4">
        <div class="row flex-sm-row flex-column justify-content-center">
          <div class="col-md-5 col-lg-4">
            <div class="d-flex flex-column align-items-center">
              <h5 class="mb-3 mb-sm-5 d-flex align-items-center"><span class="me-3 step-circle">1</span><span>提供所需印製規格</span></h5>
              <span class="mb-3 quote-item-icon material-symbols-outlined text-primary">style</span>
              <p class="text-primary">尺寸／材質／單雙面／數量</p>
            </div>
          </div>
          <div class="col-md-1 col-lg-2 text-center align-self-center lh-1">
            <span class="my-md-0 my-5 material-symbols-sharp text-light fs-1 rotate90">arrow_circle_right</span>
          </div>
          <div class="col-md-5 col-lg-4">
            <div class="d-flex flex-column align-items-center">
              <h5 class="mb-3 mb-sm-5 d-flex align-items-center"><span class="me-3 step-circle">2</span><span>寄送 Email 由專人為您報價</span></h5>
              <span class="mb-3 quote-item-icon material-symbols-outlined text-primary">mail</span>
              <a class="text-primary">abcdef@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 p-5 p-sm-6 bg-gray100">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-5">
            <h4 class="mb-4">模數試算</h4>
            <p class="mb-4 mb-xl-0 text-secondary">尺寸若小於一模，也將以一模計價。<br>公式：選擇名片材質數量的價格 X 模數 ＝ 價格</p>
          </div>
          <div class="col-auto">
            <form>
              <div class="d-flex align-items-center align-items-md-center">
                <div class="me-2 me-sm-5 d-flex flex-md-row flex-column">
                  <label for="modeWidth" class="me-md-2 d-flex justify-content-center align-items-center">
                    <span class="me-1 fs-4 fw-bold">寬</span>
                    <span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeWidth" v-model="mode.width" @keyup="caluMode()" style="width: 100px;">
                </div>
                <div class="mt-5 mt-sm-0 me-2 me-sm-5">
                  <span class="material-symbols-outlined fs-2 text-secondary">close</span>
                </div>
                <div class="me-3 me-sm-5 d-flex flex-md-row flex-column">
                  <label for="modeHeight" class="me-md-2 d-flex justify-content-center align-items-center">
                    <span class="me-1 fs-4 fw-bold">高</span>
                    <span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeHeight" v-model="mode.height" @keyup="caluMode()" style="width: 100px;">
                </div>
                <div class="mt-5 mt-sm-0">
                  <span class="me-2 fs-1 fw-bolder text-primary">{{ mode.result }}</span><span>模</span>
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
.step-circle {
  $size: 1.75rem;
  display: inline-block;
  width: $size;
  height: $size;
  color: $white;
  line-height: $size;
  text-align: center;
  border-radius: 50%;
  background-color: $accent;
}
.quote-item-icon {
  font-size: 4.5rem;
}
.rotate90 {
  transform: rotate(90deg);
  @include media-breakpoint-up(md){
    transform: rotate(0deg);
  }
}
</style>

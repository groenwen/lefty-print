<template>
  <div>
    <HeadTitle class="mb-7" dialog="Try It!" primary-text="名片" dark-text="快速製作"></HeadTitle>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11">
          <div class="overflow-hidden">
            <div class="p-sm-6 p-4 bg-gray100">
              <div class="mb-4">
                <a href="#" class="btn btn-sm rounded-pill me-2" :class="[isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = true">正面</a>
                <a href="#" class="btn btn-sm rounded-pill" :class="[!isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = false">背面</a>
              </div>
              <div class="row align-items-start">
                <div class="col-xl-8 col-12">
                  <div class="d-flex flex-lg-row flex-column align-items-start">
                    <div class="order-lg-1 order-2 mt-lg-2 me-lg-3 mb-lg-0 mb-3 color-list d-flex flex-lg-column flex-row justify-content-center align-items-center align-self-start">
                      <a v-for="item in colorList" :key="item" href="#" class="color-item m-1 border shadow-sm" :class="{ active: colorItem === item }" :style="{ backgroundColor: item }" @click.prevent="colorItem = item"></a>
                    </div>
                    <div class="order-lg-2 order-1 me-4 mb-xl-0 mb-3 ratio ratio-5x3">
                      <!-- <img class="img-fluid" src="@/assets/images/business_card.png" alt=""> -->
                      <div ref="businessCard" class="canvas-wrap">
                        <canvas ref="front" class="cover-fit shadow-sm" width="100%" height="100%" v-show="isFront"></canvas>
                        <canvas ref="back" class="cover-fit shadow-sm" width="100%" height="100%" v-show="!isFront"></canvas>
                      </div>
                    </div>
                    <div class="d-none">
                      <img ref="phone_icon" src="@/assets/images/phone_icon.svg" alt="" />
                      <img ref="email_icon" src="@/assets/images/email_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-12">
                  <form>
                    <div v-show="isFront">
                      <div class="mb-2 form-floating">
                        <input type="text" class="form-control" id="frontCompany" v-model="frontForm.company" placeholder="輸入公司名稱" />
                        <label for="frontCompany" class="form-label small text-primary">公司名稱</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="text" class="form-control" id="frontName" v-model="frontForm.name" placeholder="輸入名字" />
                        <label for="frontName" class="form-label small text-primary">名字</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="text" class="form-control" id="frontEName" v-model="frontForm.e_name" placeholder="輸入英文名字" />
                        <label for="frontEName" class="form-label small text-primary">英文名字</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="tel" class="form-control" id="frontPhone" v-model="frontForm.phone" placeholder="輸入電話" />
                        <label for="frontPhone" class="form-label small text-primary">電話</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="email" class="form-control" id="frontEmail" v-model="frontForm.email" placeholder="輸入 Email" />
                        <label for="frontEmail" class="form-label small text-primary">Email</label>
                      </div>
                    </div>
                    <div v-show="!isFront">
                      <div class="mb-2 form-floating">
                        <input type="text" class="form-control" id="backCompany" v-model="backForm.company" placeholder="輸入公司名稱" />
                        <label for="backCompany" class="form-label small text-primary">公司名稱</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="text" class="form-control" id="backName" v-model="backForm.name" placeholder="輸入名字" />
                        <label for="backName" class="form-label small text-primary">名字</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="text" class="form-control" id="backEName" v-model="backForm.e_name" placeholder="輸入英文名字" />
                        <label for="backEName" class="form-label small text-primary">英文名字</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="tel" class="form-control" id="backPhone" v-model="backForm.phone" placeholder="輸入電話" />
                        <label for="backPhone" class="form-label small text-primary">Mobile</label>
                      </div>
                      <div class="mb-2 form-floating">
                        <input type="email" class="form-control" id="backEmail" v-model="backForm.email" placeholder="輸入 Email" />
                        <label for="backEmail" class="form-label small text-primary">Email</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="d-flex flex-md-row flex-column align-items-md-center bg-gray200 px-sm-5 px-4 py-3">
              <span class="text-dark mb-md-0 mb-3">90x54mm ／ 雙面一級卡 ／ 300 張</span>
              <a href="#" class="btn btn-accent ms-auto" @click.prevent="addToCart('-NCAtlm5RkX8T74O5ILR')">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 py-7 bg-gray200">
      <ServiceTemp></ServiceTemp>
    </div>
  </div>
</template>

<script>
import emitter from '@/js/emitter'
import HeadTitle from '@/components/HeadTitle.vue'
import ServiceTemp from '@/components/ServiceTemp.vue'
export default {
  data () {
    return {
      isFront: true,
      vueCanvas: null,
      dataURL: {
        front: '',
        back: ''
      },
      colorList: ['#46BAC7', '#F9A44A', '#F37E5F', '#48A5D9', '#AF89DF'],
      colorItem: '#46BAC7',
      frontForm: {
        company: '雲端印刷',
        name: '林小希',
        e_name: 'Sharon',
        phone: '0912345678',
        email: 'abc78463@gmail.com'
      },
      backForm: {
        company: 'Cloud Print',
        name: 'SHIAU-SHI, Lin',
        e_name: 'Sharon',
        phone: '0912345678',
        email: 'abc78463@gmail.com'
      }
    }
  },
  components: { HeadTitle, ServiceTemp },
  watch: {
    colorItem: {
      handler (newVal, oldVal) {
        this.createCanvas('front')
        this.createCanvas('back')
      }
    },
    frontForm: {
      handler (newVal, oldVal) {
        this.createCanvas('front')
      },
      deep: true
    },
    backForm: {
      handler (newVal, oldVal) {
        this.createCanvas('back')
      },
      deep: true
    }
  },
  methods: {
    createCanvas (side) {
      const canvas = this.$refs[side]
      // console.log(businessCardW)
      canvas.width = 590
      canvas.height = 360
      const ctx = canvas.getContext('2d')

      // 先設定顏色 再繪製位置及尺寸
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, 590, 360)
      ctx.save()

      ctx.fillStyle = this.colorItem
      ctx.fillRect(0, 315, 590, 45)
      ctx.fillRect(0, 308, 590, 2)
      ctx.save()

      ctx.restore()
      // 公司
      ctx.font = '20px sans-serif'
      ctx.fillStyle = this.colorItem
      ctx.fillText(this[`${side}Form`].company, 40, 50)
      ctx.save()

      if (side === 'front') {
        // 名字
        const nameX = 120
        // let eNameX = 0
        ctx.font = '36px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].name, nameX, 150)
        const nameW = ctx.measureText(this[`${side}Form`].name).width
        ctx.save()
        // 英文名字
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].e_name, nameX + nameW + 20, 150)
        ctx.save()
        // phone icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('phone_iphone', 120, 225)
        // ctx.save()
        // phone
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('手機 |', 120, 223) // 145
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].phone, 175, 223) // 200
        ctx.save()
        // email icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('mail', 120, 256)
        // ctx.save()
        // email
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('信箱 |', 120, 253) // 145
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].email, 175, 253) // 200
        ctx.save()
      } else {
        const nameX = 120
        // 名字
        ctx.font = '28px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].name, nameX, 150)
        const nameW = ctx.measureText(this[`${side}Form`].name).width
        // 英文名字
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].e_name, nameX + nameW + 20, 150)
        ctx.save()
        // phone icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('phone_iphone', 120, 225)
        // ctx.save()
        // phone
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('Mobile |', 120, 223) // 145
        ctx.save()
        ctx.font = '14px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].phone, 193, 223) // 218
        ctx.save()
        // email icon
        // ctx.font = '16px Material Symbols Outlined'
        // ctx.fillStyle = this.colorItem
        // ctx.fillText('mail', 120, 256)
        // ctx.save()
        // email
        ctx.font = '14px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('Email   |', 120, 253) // 147
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].email, 191, 253) // 218
        ctx.save()
      }

      ctx.restore()

      this.dataURL[side] = canvas.toDataURL('image/jpeg', 0.5)
      // const blob = this.dataURItoBlob(dataURL)
      // this.dataURL[side] = window.URL.createObjectURL(blob)
      this.vueCanvas = ctx
    },
    dataURItoBlob (dataURI) {
      // 來源：https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
      // convert base64/URLEncoded data component to raw binary data held in a string
      let byteString
      if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1])
      } else {
        byteString = unescape(dataURI.split(',')[1])
      }
      // separate out the mime component
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

      // write the bytes of the string to a typed array
      const ia = new Uint8Array(byteString.length)
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }

      return new Blob([ia], { type: mimeString })
    },
    addToCart (id) {
      this.isLoading = true
      let url = `${this.VUE_APP}/cart`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts

          let http = 'post'
          // 撈出 carts 裡是否有同 ID 的資料
          let cartItem = this.carts.find(item => item.product_id === id)
          if (cartItem === undefined) {
            cartItem = { product_id: id, qty: 1, files: [this.dataURL] }
          } else {
            // 抓出將 file 再 push 進去
            url = `${url}/${cartItem.id}`
            http = 'put'
            cartItem.files.push(this.dataURL)
            cartItem = {
              product_id: cartItem.product_id,
              qty: 1,
              files: cartItem.files
            }
          }
          // 加入購物車
          this.$http[http](url, { data: cartItem })
            .then((res) => {
              this.isLoading = false
              // 更新購物車數量
              emitter.emit('cartCount')
              emitter.emit('sweetalert', `${res.data.message}, success`)
            })
            .catch((err) => {
              emitter.emit('sweetalert', `${err.response.data.message}, error`)
            })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    // 更新購物車數量
    emitter.emit('cartCount')
    this.createCanvas('front')
    this.createCanvas('back')
    setTimeout(() => {
      this.createCanvas('front')
      this.createCanvas('back')
    }, 2000)
  }
}
</script>
<style lang="scss">
.color-list {
  width: 32px;
  @include media-breakpoint-down(lg){
    width: 100%;
    height: 38px;
  }
}
.color-item {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: width .25s, height .25s;
  &:hover {
    opacity: .8;
  }
  &.active {
    width: 30px;
    height: 30px;
    border-color: #E5EBFD !important;
  }
}
</style>

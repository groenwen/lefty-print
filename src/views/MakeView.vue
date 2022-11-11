<template>
  <div>
    <SweetAlert></SweetAlert>
    <HeadTitle class="" dialog="Try It !" primary-text="名片" dark-text="快速製作"></HeadTitle>
    <div class="bg-gray100 mb-8">
      <div class="container pt-5 pb-6 pb-lg-8">
        <div class="row justify-content-center">
          <div class="col-xl-11">
            <div class="">
              <div class="mb-5">
                <a href="#" class="btn btn-sm rounded-pill me-2" :class="[isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = true">正面</a>
                <a href="#" class="btn btn-sm rounded-pill" :class="[!isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = false">背面</a>
              </div>
              <div class="row align-items-start">
                <div class="col-12 col-lg-8">
                  <div class="mb-5 mb-lg-0 d-flex flex-md-row flex-column align-items-start">
                    <div class="me-4 mb-xl-0 mb-3 ratio ratio-5x3">
                      <div ref="businessCard" class="canvas-wrap p-shadow">
                        <canvas ref="front" class="cover-fit " width="100%" height="100%" v-show="isFront"></canvas>
                        <canvas ref="back" class="cover-fit" width="100%" height="100%" v-show="!isFront"></canvas>
                      </div>
                    </div>
                    <div class="me-xl-5 mb-md-0 mb-3 d-flex flex-md-column flex-row justify-content-center align-items-center align-self-start color-list">
                      <a v-for="item in colorList" :key="item" href="#" class="color-item m-1 border shadow-sm" :class="{ active: colorItem === item }" :style="{ backgroundColor: item }" @click.prevent="colorItem = item"></a>
                    </div>
                    <div class="d-none">
                      <img ref="phone_icon" src="@/assets/images/phone_icon.svg" alt="" />
                      <img ref="email_icon" src="@/assets/images/email_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
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
          </div>
        </div>
      </div>
      <div class=" bg-light">
        <div class="container d-flex align-items-center px-sm-5 px-4 py-3">
          <span class="text-dark me-3 mb-md-0 mb-3">90x54mm ／ 雙面 ／ 一級卡 ／ 300 張</span>
          <a href="#" class="btn btn-accent ms-auto flex-shrink-0" @click.prevent="addToCart('-NCAtlm5RkX8T74O5ILR')">
            加入購物車<span class="ms-2 material-symbols-sharp align-middle fs-5">shopping_cart</span>
          </a>
        </div>
      </div>
    </div>
    <div class="py-7 bg-gray200">
      <ServiceTemp></ServiceTemp>
    </div>
  </div>
</template>
<style lang="scss">
.cover-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p-shadow {
  box-shadow: 0 0 0.5rem rgba($dark, 0.25);
}
.color-list {
  width: 32px;
  @include media-breakpoint-down(md) {
    width: 100%;
    height: 38px;
  }
}
.color-item {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: width 0.25s, height 0.25s;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    width: 30px;
    height: 30px;
    border-color: #e5ebfd !important;
  }
}
</style>
<script>
import emitter from '@/js/emitter'
import HeadTitle from '@/components/HeadTitle.vue'
import ServiceTemp from '@/components/ServiceTemp.vue'
import SweetAlert from '@/components/SweetAlert.vue'

export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
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
  components: { HeadTitle, ServiceTemp, SweetAlert },
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
      const width = 720
      const height = 420
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')

      // 先設定顏色 再繪製位置及尺寸
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, width, height)
      ctx.save()

      ctx.fillStyle = this.colorItem
      ctx.fillRect(0, height - 45, width, 45)
      ctx.fillRect(0, height - 45 - 2 - 5, width, 2)
      ctx.save()

      ctx.restore()

      // 公司
      ctx.font = '24px sans-serif'
      ctx.fillStyle = this.colorItem
      ctx.fillText(this[`${side}Form`].company, height * 0.15, height * 0.15)
      ctx.save()

      const nameX = 120
      const nameY = height * 0.4
      const phoneY = height * 0.6
      const emailY = height * 0.7

      if (side === 'front') {
        // 名字
        ctx.font = '44px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].name, nameX, nameY)
        const nameW = ctx.measureText(this[`${side}Form`].name).width
        ctx.save()

        // 英文名字
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].e_name, nameX + nameW + 20, nameY)
        ctx.save()

        // phone
        ctx.font = '18px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('手機', nameX, phoneY)
        ctx.fillStyle = this.colorItem
        ctx.fillText('|', nameX + 50, phoneY)
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].phone, nameX + 70, phoneY)
        ctx.save()

        // email
        ctx.font = '18px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('信箱', nameX, emailY)
        ctx.fillStyle = this.colorItem
        ctx.fillText('|', nameX + 50, emailY)
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].email, nameX + 70, emailY)
        ctx.save()
      } else {
        // 名字
        ctx.font = '36px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].name, nameX, nameY)
        const nameW = ctx.measureText(this[`${side}Form`].name).width

        // 英文名字
        ctx.font = '20px sans-serif'
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].e_name, nameX + nameW + 20, nameY)
        ctx.save()

        // phone
        ctx.font = '18px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('Mobile', nameX, phoneY)
        ctx.fillStyle = this.colorItem
        ctx.fillText('|', nameX + 80, phoneY)
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].phone, nameX + 100, phoneY)
        ctx.save()

        // email
        ctx.font = '18px sans-serif'
        ctx.fillStyle = this.colorItem
        ctx.fillText('Email', nameX, emailY)
        ctx.fillStyle = this.colorItem
        ctx.fillText('|', nameX + 80, emailY)
        ctx.fillStyle = '#323232'
        ctx.fillText(this[`${side}Form`].email, nameX + 100, emailY)
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
              console.dir(err)
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

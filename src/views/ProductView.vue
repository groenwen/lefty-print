<template>
  <v-loading :active="isLoading" ></v-loading>
  <SweetAlert></SweetAlert>
  <div class="mb-5 bg-gray100">
    <div class="container py-4">
      <div class="row justify-content-between align-items-center">
        <div class="order-md-1 order-2 col-md-5 col-12">
          <span class="mb-4 d-inline-block px-3 py-2 fs-8 lh-1 text-primary bg-light rounded-pill">{{ currProd.category }}</span>
          <h1 class="mb-4 fs-2">{{ currProd.title }}</h1>
          <p class="mb-4">{{ currProd.content }}</p>
          <div class="d-flex align-items-center text-primary">
            <span class="material-symbols-sharp fs-2 me-3 ">calendar_month</span>
            <span class="lh-1">{{ currProd.description }}</span>
          </div>
        </div>
        <div class="order-md-2 order-1 col-md-6 col-12">
          <div class="bg-cover h-100" style="min-height: 300px" :style="{backgroundImage: `url(${currProd.imageUrl})`}">
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="mb-5">
      <span class="me-3 mb-1 fs-7 text-secondary">尺寸&emsp;&nbsp;</span>
      <a href="#"
        v-for="(item, index) in sizeList"
        :key="`size${index}`"
        @click.prevent="checkSizeAndSide('size', item)"
        class="btn btn-sm rounded-pill me-3"
        :class="[this.currSize === item ? 'btn-dark' : 'btn-outline-secondary']"
        >{{ item }}
      </a>
    </div>
    <div class="mb-5">
      <span class="me-3 mb-1 fs-7 text-secondary">單/雙面</span>
      <a href="#"
        v-for="(item, index) in sideList"
        :key="`side${index}`"
        @click.prevent="checkSizeAndSide('side', item)"
        class="btn btn-sm rounded-pill me-3"
        :class="[
          this.currProd.side === item
            ? 'btn-dark'
            : 'btn-outline-secondary'
        ]"
        >{{ item }}</a
      >
    </div>
    <div class="mb-5 position-relative" style="min-height: 100px">
      <v-loading :active="isLoading" ></v-loading>
      <div class="bg-gray100 px-md-4 px-2 py-3">
        <table class="table table-borderless table-hover text-center">
          <thead>
            <tr class="text-secondary fs-7">
              <th class="text-start ps-md-4 fw-normal" width="16%">尺寸</th>
              <th class="fw-normal" width="16%">單 / 雙面</th>
              <th class="fw-normal">材質</th>
              <th class="fw-normal">數量</th>
              <th class="fw-normal">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in sortProds" :key="item.id" :class="[this.currProd.id === item.id ? 'bg-light' : 'bg-white']" class="position-relative">
              <th class="text-start text-secondary ps-md-4">{{ item.width }}x{{ item.height }}mm</th>
              <td class="text-secondary">{{ item.side }}</td>
              <td :class="{'text-primary':this.currProd.id === item.id}">{{ item.material }}</td>
              <td :class="{'text-primary':this.currProd.id === item.id}">{{ item.p_qty }} {{ item.unit }}</td>
              <td :class="{'text-primary':this.currProd.id === item.id}">
                $<router-link :to="`/product/${item.id}`" class="fw-bolder stretched-link" :class="{'text-dark':this.currProd.id !== item.id}">{{ item.price }}</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="mb-5 text-end text-secondary">{{ currProd.width }}x{{ currProd.height }}mm ／ {{ currProd.side }} ／ {{ currProd.material }} ／ {{ currProd.p_qty }} 張</p>
    <div class="mb-5">
      <form @submit.prevent="uploadFile">
        <input class="inputfile" type="file" id="formFile" @change="choseFile">
        <label for="formFile" class="p-4 w-100 text-secondary text-center bg-gray100 border-dash">
          <span v-if="fileName.length <= 0"><span class="me-2 material-symbols-sharp fs-1 align-middle">cloud_upload</span>上傳檔案</span>
          <span v-else><span class="me-2 material-symbols-sharp fs-1 align-middle">cloud_upload</span>{{ fileName }}</span>
        </label>
      </form>
    </div>
    <div class="mb-5 d-flex justify-content-end align-items-center">
      <span class="text-primary me-5">NT$ <span class="fs-2 fw-bold">{{currProd.price}}</span></span>
      <a href="#" class="btn btn-accent" @click.prevent="addToCart()" :class="{'disabled' : this.file.name === undefined}">
        <span class="material-symbols-sharp align-text-bottom">shopping_cart</span>
        加入購物車
      </a>
    </div>
  </div>
</template>
<style lang="scss">
table th {
  font-weight: 500;
}
</style>
<script>
import demoImage from '@/assets/images/demo.jpg'
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'
export default {
  data () {
    return {
      isLoading: false,
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      currProd: {},
      currProds: [],
      sortProds: [],
      currSize: '',
      currSide: '',
      carts: [],
      sizeList: [],
      sideList: [],
      file: {},
      fileName: ''
    }
  },
  computed: {
    prodId () {
      return this.$route.params.id
    }
  },
  watch: {
    prodId () {
      this.getProds()
    }
  },
  components: {
    SweetAlert
  },
  methods: {
    // 1.顯示所有選項 size side
    // 2. 所有產品 currProducts > 所有 title currProduct
    // 3. 依篩選條件 顯示產品 sortcurrProduct
    // 4. 切換條件時 更新產品列表
    // 所有 size、篩選過的 size、當前 size
    // canva https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLCanvasElement/toDataURL
    getProds () {
      this.isLoading = true
      // 取得所有產品
      const url = `${this.VUE_APP}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          // [a, b, c...]
          const allProds = res.data.products
          // obj
          this.currProd = allProds.find((item) => item.id === this.prodId)
          this.currSize = `${this.currProd.width}x${this.currProd.height}`
          this.currSide = this.currProd.side
          // [a, a, a...]
          this.currProds = allProds.filter((item) => item.title === this.currProd.title)
          // 列出 size, side
          this.showSizeAndSide()

          // 篩選
          this.getSortProds()
        })
        .catch((err) => {
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    },
    checkSizeAndSide (status, val) {
      if (status === 'size') {
        const size = val.split('x')
        this.currSize = `${size[0]}x${size[1]}`
      } else if (status === 'side') {
        this.currSide = val
      }
      this.getSortProds()
      this.currProd = { ...this.sortProds[0] }
      this.$router.push(`/product/${this.currProd.id}`)
    },
    getSortProds () {
      // 選 size, side 時 預設選取 sortProds 的第一筆資料
      // 選 price 時 即選取該資料

      // 篩選的資料
      const filterProds = this.currProds.filter((el, i) => {
        const size = this.currSize.split('x')
        return el.width === Number(size[0]) && el.height === Number(size[1]) && el.side === this.currSide
      })

      // 排序 - 先將資料存入暫時的 Array
      const mapped = filterProds.map((el, i) => {
        return { index: i, value: el }
      })
      // 排序 - 暫時的 Array 依數量排序
      mapped.sort((a, b) => {
        if (a.value.p_qty > b.value.p_qty) return 1
        if (a.value.p_qty < b.value.p_qty) return -1
        return 0
      })
      // 排序 - 再依 filterProds 的資料存回 sortProds
      this.sortProds = mapped.map(el => filterProds[el.index])
    },
    // 初始化顯示 size, side
    showSizeAndSide () {
      // 該產品所有 size, side
      const allSize = this.currProds.map(item => {
        return `${item.width}x${item.height}`
      })
      const allSide = this.currProds.map(item => {
        return item.side
      })

      // 不重複的 size
      this.sizeList = allSize.filter((item, index) => allSize.indexOf(item) === index)
      this.sizeList.sort() // 排序 size
      // 不重複的 side
      this.sideList = allSide.filter((item, index) => allSide.indexOf(item) === index)
      this.sideList.sort() // 排序 side
    },
    // 物件比較
    shallowEqual (obj1, obj2) {
      // 取出各自的 key 值 ['width', 'height']
      const keys1 = Object.keys(obj1)
      const keys2 = Object.keys(obj2)

      // 比較長度 如果不相等 返回
      if (keys1.length !== keys2.length) {
        return false
      }
      for (let i = 0; i <= keys1.length; i++) {
        const val1 = obj1[keys1[i]]
        const val2 = obj2[keys2[i]]
        if (val1 !== val2) {
          return false
        }
      }
      return true
    },
    addToCart () {
      this.isLoading = true
      const url = `${this.VUE_APP}/cart`
      this.$http.post(url, { data: { product_id: this.currProd.id, qty: 1, files: [{ id: 0, front: demoImage }] } })
        .then((res) => {
          this.isLoading = false
          // 更新購物車數量
          emitter.emit('cartCount')
          emitter.emit('sweetalert', `${res.data.message}, success`)
        })
        .catch((err) => {
          this.isLoading = false
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    },
    choseFile (e) {
      this.file = e.target.files[0]
      this.fileName = this.file.name
      console.log(this.fileName)
      console.log(this.file.name.length > 0, '{}')
    },
    uploadFile () {
      const url = 'https://script.google.com/macros/s/AKfycbwuS2QeYvec72MZrQTPElC07XE1ntHm3tepY2ySf44qWRNvy_J9vADKZveVQ93dzhO8/exec'
      // const form = new FormData()
      // const parameter = {
      //   fileName: this.file.name,
      //   fileType: this.file.type
      // }
      // form.append('file', this.file)
      // console.log(form.parentNode)
      this.$http.post(url, this.file, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProds()
  }
}
</script>
<style lang="scss">
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  cursor: pointer;
  &:hover {
    background-color: $gray-200 !important;
  }
}

.border-dash {
  border: 1px dashed $secondary;
}
</style>

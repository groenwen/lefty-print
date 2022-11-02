<script>
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'

export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      allProds: [],
      pords: []
    }
  },
  components: {
    SweetAlert
  },
  methods: {
    getProds () {
      const url = `${this.VUE_APP}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.allProds = res.data.products
          // 所有 title [a, a, b, c, c, ....]
          let title = this.allProds.map(el => el.title)

          // 不重複的 title [a, b, c, ....]
          title = title.filter((el, i) => title.indexOf(el) === i)

          // sort AllProds
          const mapped = this.allProds.map((el, i) => {
            return { index: i, value: el }
          })
          const sortList = ['width', 'height', 'side', 'qty']
          sortList.forEach(el => {
            mapped.sort((a, b) => {
              if (a.value[el] > b.value[el]) return 1
              if (a.value[el] < b.value[el]) return -1
              return 0
            })
          })
          this.allProds = mapped.map(el => this.allProds[el.index])

          // 將第一個產品 設為產品入口
          title.forEach((el, i) => {
            const prod = this.allProds.find(el2 => el === el2.title)
            this.pords.push(prod)
          })
        })
        .catch((err) => {
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    }
  },
  mounted () {
    this.getProds()
  }
}
</script>

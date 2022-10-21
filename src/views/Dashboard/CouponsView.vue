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
        <th>活動名稱</th>
        <th>折扣</th>
        <th>有效期限</th>
        <th>折扣碼</th>
        <th>顯示</th>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ parseDate(item.due_date) }}</td>
          <td>{{ item.code }}</td>
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
            <button type="button" class="btn btn-sm btn-outline-danger" @click="openModal('delete', item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <couponModal :is-new="isNew" :coupon-item="coupon" @update-coupon="updateCoupon" ref="callModal"></couponModal>
</template>
<script>
import couponModal from '@/components/CouponModal.vue'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      isNew: false,
      coupons: [],
      coupon: {
        title: '',
        is_enabled: 1,
        percent: 80,
        due_date: 1555459200,
        code: 'leftyprint2022'
      }
    }
  },
  components: { couponModal },
  methods: {
    getCoupons () {
      this.$http.get(`${this.VUE_APP}/admin/coupons`)
        .then((res) => {
          this.coupons = res.data.coupons
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    updateCoupon (item) {
      // 將日期轉為  timestamp 格式
      item.due_date = new Date(item.due_date).getTime()
      const data = { ...item }
      let url = `${this.VUE_APP}/admin/coupon`
      let http = 'post'
      if (!this.isNew) {
        http = 'put'
        url = `${url}/${item.id}`
      }
      this.$http[http](url, { data })
        .then((res) => {
          this.hideModal()
          this.getCoupons()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    parseDate (dueDate) {
      const year = new Date(dueDate).getFullYear()
      const month = new Date(dueDate).getMonth() + 1
      const date = new Date(dueDate).getDate()
      return `${year}-${month}-${date}`
    },
    // 開啟 modal
    openModal (active, item) {
      if (active === 'new') {
        this.coupon = {
          is_enabled: 1
        }
        this.$refs.callModal.showModal()
        this.isNew = true
      } else if (active === 'edit') {
        // 將日期轉為 yyyy-mm-dd 格式
        item.due_date = this.parseDate(item.due_date)
        this.coupon = { ...item }

        // 避免資料互相汙染需用解構賦值
        this.$refs.callModal.showModal()
        this.isNew = false
      } else if (active === 'delete') {
        this.coupon = { ...item }
        this.$refs.callDelModal.showModal()
      }
    },
    hideModal () {
      this.$refs.callModal.hideModal()
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>

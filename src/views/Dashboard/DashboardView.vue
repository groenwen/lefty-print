<template>
  <div>
    <SweetAlert></SweetAlert>
    <div class="container">
    <p>Dashboard</p>
    <nav class="mb-5">
      <router-link to="/admin">後台首頁</router-link> |
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/orders">訂單管理</router-link> |
      <router-link to="/admin/coupons">折扣碼管理</router-link> |
      <router-link to="/admin/upload">上傳圖片</router-link> |&emsp;&emsp;
      <a href="#" @click.prevent="logout()">登出</a> |&emsp;&emsp;
      <router-link to="/">回首頁</router-link>
    </nav>
    <router-view />
  </div>
  </div>
</template>

<script>
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    SweetAlert
  },
  methods: {
    checkAdmin () {
      const url = `${import.meta.env.VITE_API}/api/user/check`
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)groenToken\s*=\s*([^;]*).*$)|^.*$/, '$1')

      // 設置 token
      this.$http.defaults.headers.common.Authorization = token

      // 如果 token 有值
      if (token) {
        this.$http.post(url)
          .then((res) => {
            // 驗證成功
            this.$router.push('/admin/products')
          })
          .catch((err) => {
            // 驗證有誤 顯示錯誤訊息 回到登入頁面
            emitter.emit('sweetalert', `${err.response.data.message}, error`)
            this.$router.push('/login')
          })
      } else {
        // 尚未登入 回到登入頁面
        emitter.emit('sweetalert', '尚未登入, info')
        this.$router.push('/login')
      }
    },
    logout () {
      // 移除 token 即代表登出
      document.cookie = 'groenToken=;expires=;'
      emitter.emit('sweetalert', '已登出, success')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>

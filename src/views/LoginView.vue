<template>
  <div class="mt-5">
    <SweetAlert></SweetAlert>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <h1 class="text-primary fs-2 text-center mb-4">管理員登入</h1>
          <v-form class="mb-5" v-slot="{ errors }" @submit="login">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field name="email" id="email" type="email" rules="required|email" class="form-control" :class="{ 'is-invalid':errors['email'] }" v-model="user.username" />
              <error-message name="email" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <v-field name="密碼" id="password" type="password" rules="required" class="form-control" :class="{ 'is-invalid':errors['密碼'] }" v-model="user.password" />
              <error-message name="密碼" class="invalid-feedback" />
            </div>
            <div class="d-grid">
              <button class="btn btn-primary">登入</button>
            </div>
          </v-form>
          <div class="text-center">
            <router-link class="btn btn-link" to="/">
              <span class="material-symbols-outlined align-text-bottom">home</span>
              回首頁
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/js/emitter'
import SweetAlert from '@/components/SweetAlert.vue'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    SweetAlert
  },
  methods: {
    login () {
      const url = `${import.meta.env.VITE_API}/admin/signin`
      this.$http.post(url, this.user)
        .then((res) => {
          document.cookie = `groenToken=${res.data.token};expires=${new Date(res.data.expired)}`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          emitter.emit('sweetalert', `${err.response.data.message}, error`)
        })
    }
  }
}
</script>

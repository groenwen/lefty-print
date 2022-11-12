<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <router-link to="/" class="navbar-brand"><img src="@/assets/images/logo.svg" class="navbar-logo" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="@/assets/images/logo.svg" class="navbar-logo" alt=""></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end align-items-lg-center flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/products" class="nav-link" :class="{'active':this.$route.path === '/products'}">所有產品</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/make" class="nav-link" :class="{'active':this.$route.path === '/make'}">名片快速製作</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/quote" class="nav-link" :class="{'active':this.$route.path === '/quote'}"><span class="material-symbols-sharp">request_quote</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/days" class="nav-link ms-md-1" :class="{'active':this.$route.path === '/days'}"><span class="material-symbols-sharp">calendar_month</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/carts" class="nav-link-cart position-relative pe-1" :class="{'active':this.$route.path === '/carts' || this.$route.path === '/carts2'}">
                <span class="material-symbols-sharp">shopping_cart</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{carts?.length}}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import 'bootstrap/js/dist/offcanvas.js'
import emitter from '@/js/emitter'
export default {
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getCarts () {
      const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          const carts = res.data.data.carts
          const fileCarts = []
          carts.forEach(item => {
            // 如果沒有 files 值 或 files <= 1 直接存入 item
            if (item.files === undefined || item.files.length <= 1) {
              fileCarts.push(item)
            } else {
              // 依 files 的數量 拆分成對應的 cartItem 數，並存回 fileCarts
              const count = item.files.length
              for (let i = 0; i < count; i++) {
                const cartItem = { ...item }
                cartItem.files = [item.files[i]]
                cartItem.files[0].id = i + 1
                fileCarts.push(cartItem)
              }
            }
          })
          this.carts = fileCarts
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    emitter.on('cartCount', () => {
      this.getCarts()
    })
    console.log(this.$route.path)
  }
}
</script>
<style lang="scss">
.navbar-logo {
  height: 1.5rem;
  @include media-breakpoint-up(md) {
    height: 1.75rem;
  }
}
.navbar-toggler {
  border-width: 0px;
}
.nav-link, .nav-link-cart {
  width: fit-content;
  margin-top: 1rem;
  @include media-breakpoint-up(md) {
    margin-left: 1rem;
  }
  @include media-breakpoint-up(lg) {
    margin-top: 0rem;
  }
}
.nav-link-cart {
  $size: 2.5rem;
  display: inline-block;
  width: $size;
  height: $size;
  color: $dark;
  line-height: $size;
  padding: .5rem;
  background-color: $gray-100;
  border-radius: 50%;
  &.active {
    color: $primary;
    background-color: $light;
  }
}
.navbar-nav .show > .nav-link, .navbar-nav .nav-link.active {
  color: $primary !important;
  // border-bottom: 2px solid $primary;
}
</style>

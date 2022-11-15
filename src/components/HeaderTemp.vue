<template>
  <nav class="navbar navbar-expand-lg bg-white sticky-top" :class="{'navbar-min': isScroll}">
    <div class="container">
      <router-link to="/" class="navbar-brand"><img src="@/assets/images/logo.svg" class="navbar-logo" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
        <div class="offcanvas-header">
          <router-link to="/" class="navbar-brand"><img src="@/assets/images/logo.svg" class="navbar-logo" alt=""></router-link>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end align-items-lg-center flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/products" class="nav-link" :class="{'active':this.$route.path === '/products'}">所有產品</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/make" class="nav-link" :class="{'active':this.$route.path === '/make'}">名片線上製作</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/qa" class="nav-link" :class="{'active':this.$route.path === '/qa'}">印刷小知識</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/quote" data-bs-toggle="tooltip" data-bs-title="特殊尺寸報價" class="nav-link d-flex align-items-center" :class="{'active':this.$route.path === '/quote'}">
                <span class="material-symbols-sharp">request_quote</span>
                <span class="ms-2 d-inline-block d-lg-none">特殊尺寸報價</span>
              </router-link>
            </li>
            <li class="nav-item mb-lg-0 mb-2">
              <router-link to="/days" data-bs-toggle="tooltip" data-bs-title="印刷工作天" class="nav-link d-flex align-items-center" :class="{'active':this.$route.path === '/days'}">
                <span class="material-symbols-sharp">calendar_month</span>
                <span class="ms-2 d-inline-block d-lg-none">印刷工作天</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/carts" class="nav-link-cart position-relative" :class="{'active':this.$route.path === '/carts' || this.$route.path === '/carts2'}">
                <span class="material-symbols-sharp">shopping_cart</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-accent">
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
<style lang="scss">
.navbar {
  transition: all 0.5s;
}
.navbar-logo {
  height: 1.5rem;
  transition: all 0.5s;
  @include media-breakpoint-up(md) {
    height: 1.75rem;
  }
}
.navbar-toggler {
  border-width: 0px;
}
.nav-link,
.nav-link-cart {
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
  padding: 0.5rem;
  background-color: $gray-100;
  border-radius: 50%;
  &.active {
    color: $primary;
  }
}
.navbar-nav .show > .nav-link,
.navbar-nav .nav-link.active {
  color: $primary !important;
}
.navbar-min {
  padding: 0.75rem 0 0.5rem !important;
  box-shadow: 0 0.25rem 0.5rem rgba($dark, 0.15);
  .navbar-logo {
    height: 1.25rem;
    @include media-breakpoint-up(md) {
      height: 1.5rem;
    }
  }
}
</style>
<script>
import '@popperjs/core/dist/umd/popper.min.js'
import BsTooltip from 'bootstrap/js/dist/tooltip.js'
import BsOffCanvas from 'bootstrap/js/dist/offcanvas.js'
import emitter from '@/js/emitter'
export default {
  data () {
    return {
      tooltipList: [],
      bsOffcanvas: null,
      isScroll: false,
      carts: []
      // path: ''
    }
  },
  computed: {
    path () {
      return this.$route.path
    }
  },
  watch: {
    path () {
      this.hideOffcanvas()
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
    },
    hideOffcanvas () {
      this.bsOffcanvas.hide()
    },
    setTooltip (windowWidth) {
      // lg 以上才 shown tooltip
      if (windowWidth >= 992) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        this.tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
          return new BsTooltip(tooltipTriggerEl, {
            trigger: 'hover'
          })
        })
        console.log('yes')
      } else {
        // 否則 移除 tooltip
        this.tooltipList.forEach(el => {
          el.disable()
        })
      }
    },
    scrollPos (scrollY) {
      if (scrollY > 50) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
      console.log(this.isScroll)
    }
  },
  mounted () {
    // lg 以上才顯示 tooltip
    const vm = this
    vm.fullWidth = window.innerWidth
    this.setTooltip(vm.fullWidth)
    window.onresize = () => {
      vm.fullWidth = window.innerWidth
      this.setTooltip(vm.fullWidth)
    }

    // offcanvas
    this.bsOffcanvas = new BsOffCanvas('#offcanvasNavbar')
    emitter.on('cartCount', () => {
      this.getCarts()
    })

    // scroll
    vm.scrollY = window.scrollY
    window.onscroll = () => {
      vm.scrollY = window.scrollY
      this.scrollPos(vm.scrollY)
    }
  }
}
</script>

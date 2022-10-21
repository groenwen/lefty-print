<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <td>訂單編號</td>
          <!-- <td></td> -->
          <td>姓名</td>
          <td>電話</td>
          <td>Email</td>
          <td>地址</td>
          <td>數量</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td colspan="7">
            <table>
              <tr>
                <td>
                {{ item.create_at }}<br />
                  <span class="small text-secondary">{{ item.id }}</span>
                </td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.user.tel }}</td>
                <td>{{ item.user.email }}</td>
                <td>{{ item.user.address }}</td>
                <td>{{ item.num }}</td>
              </tr>
              <tr>
                <td>
                  {{item.products}}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      orders: []
    }
  },
  methods: {
    getOrders (page = 1) {
      const url = `${this.VUE_APP}/admin/orders`
      this.$http.get(url)
        .then((res) => {
          this.orders = res.data.orders
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

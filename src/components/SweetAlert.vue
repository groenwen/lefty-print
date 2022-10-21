<template>
  <div></div>
</template>
<script>
import emitter from '@/js/emitter'
export default {
  data () {
    return {
      data: {
        position: 'top',
        toast: true,
        icon: 'success',
        title: '',
        showConfirmButton: false,
        timer: 1500
      }
    }
  },
  methods: {
    showAlert (message) {
      this.$swal(message)
    }
  },
  mounted () {
    emitter.on('sweetalert', (message) => {
      const msgData = message.split(', ')
      this.data.title = msgData[0]
      this.data.icon = msgData[1]
      this.$swal.fire(this.data)
    })
  },
  unmounted () {
    emitter.off('sweetalert')
  }
}
</script>
